import React, { useState, useEffect } from "react";
import { mockUserPerformance } from "../services/mockAPI";
import { useParams } from "react-router";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function UserPerformance() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;

  useEffect(() => {
    const getData = async () => {
      const request = await mockUserPerformance(userID);
      if (!request) return alert("data error");
      console.log(request);
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
      <ResponsiveContainer width="99%" height="99%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={dataReorder}>
          <PolarGrid gridType="polygon" polarRadius={[10, 20 ,40, 60, 78]} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
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
