import React from "react";
import { useState, useEffect } from "react";
import { userInfosAPI } from "../services/API";
import { useParams } from "react-router";
import UserInfos from "../components/UserInfos";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";
import UserScore from "../components/UserScore";
import CardContainer from "../components/CardContainer";
import { useNavigate } from "react-router-dom";

/**
 * Render the dashboard
 * @return {JSX}
 */
function UserPage() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getData = async () => {
      const object = new userInfosAPI()
      const request = await object.userInfosData(userID);
      if (!request) return navigate("/ErrorPage");
      document.title =
        "SportSee - " +
        request.firstName +
        " " +
        request.lastName;
      setData(request);
    };
    getData();
  }, [userID, navigate]);

  if (data.length === 0) return null;
  
   return (
    <div className="userPage">
      <UserInfos name={data.firstName} />
      <div className="userStatsContainer">
        <div id="globalStatsContainer">
          <UserActivity id="userActivity" />
          <div id="bottomStatsContainer">
            <UserAverageSessions id="userAverageSessions" />
            <UserPerformance id="userPerformance" />
            <UserScore id="userScore" />
          </div>
        </div>
        <CardContainer id="cardContainer" />
      </div>
    </div>
  );
}

export default UserPage;
