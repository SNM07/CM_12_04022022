import React, { useState, useEffect } from "react";
import { userPerformanceData } from "../services/API";
import { useParams } from "react-router";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * Render a RadarChart with user performance Data
 * @return {JSX}
 */
function UserPerformance() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;

  useEffect(() => {
    const getData = async () => {
      const request = await userPerformanceData(userID);
      if (!request) return alert("data error");
      const formatData = request.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: "Cardio" };
          case 2:
            return { ...data, kind: "Energie" };
          case 3:
            return { ...data, kind: "Endurance" };
          case 4:
            return { ...data, kind: "Force" };
          case 5:
            return { ...data, kind: "Vitesse" };
          case 6:
            return { ...data, kind: "Intensité" };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    getData();
  }, [userID]);
  if (data.length === 0) return null;

  const index = [5, 4, 3, 2, 1, 0];
  const dataReorder = index.map((i) => data[i]);

  return (
    <div className="radarChartContainer">
      <ResponsiveContainer width="99%" height="99%" minWidth="0">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataReorder}>
          <PolarGrid gridType="polygon" />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: "1vw" }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserPerformance;
