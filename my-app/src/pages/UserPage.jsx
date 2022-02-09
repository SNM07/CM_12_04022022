import React from "react";
import { useState, useEffect } from "react";
import { mockUserInfos } from "./../services/mockAPI";
import { useParams } from "react-router";
import UserActivity from "../components/UserActivity";
import UserAverageSessions from "../components/UserAverageSessions";
import UserPerformance from "../components/UserPerformance";

function UserPage() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;
  console.log(userId, userID);

  useEffect(() => {
    const getData = async () => {
      const request = await mockUserInfos(userID);
      console.log(request);
      if (!request) return alert("data error");
      console.log(request);
      setData(request);
    };
    getData();
  }, [userID]);

  console.log(data);
  if (data.length === 0) return null;

  return (
    
    <>
      <UserActivity />
      <UserAverageSessions />
      <UserPerformance />
    </>
  );
}

export default UserPage;
