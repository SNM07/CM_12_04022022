import React, { useState, useEffect } from "react";
import { mockUserAverageSessions } from "../services/mockAPI";
import { useParams } from "react-router";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function UserAverageSessions() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;

  useEffect(() => {
    const getData = async () => {
      const request = await mockUserAverageSessions(userID);
      if (!request) return alert("data error");
      console.log(request);
      const formatData = request.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: "L" };
          case 2:
            return { ...data, day: "M" };
          case 3:
            return { ...data, day: "M" };
          case 4:
            return { ...data, day: "J" };
          case 5:
            return { ...data, day: "V" };
          case 6:
            return { ...data, day: "S" };
          case 7:
            return { ...data, day: "D" };
          default:
            return { ...data };
        }
      });
      console.log(formatData);
      setData(formatData);
    };
    getData();
  }, [userID]);
  if (data.length === 0) return null;

  console.log(data);
  return <></>;
}

export default UserAverageSessions;
