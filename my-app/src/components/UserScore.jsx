import React from "react";
import { useState, useEffect } from "react";
import { mockUserInfos } from "./../services/mockAPI";
import { useParams } from "react-router";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

export default function UserScore() {
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
      setData([request.todayScore]);
    };
    getData();
  }, [userID]);

  if (data.length === 0) return null;
  console.log("SCORE", data);

  const dataFloat = parseFloat(data);

  const pieScore = [
    { name: "finished", value: dataFloat, fillColor: "#ff0101" },
    { name: "inProgress", value: 1 - dataFloat, fillColor: "transparent" },
  ];

  console.log(pieScore);

  return (
    <div className="pieChartContainer">
      <ResponsiveContainer width="99%" height="99%" className="pieChart">
        <PieChart>
          <Pie
            data={pieScore}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={80}
            //cornerRadius={50}
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            {pieScore.map((entry, index) => (
              <Cell
                key={`${index}`}
                fill={entry.fillColor}
                cornerRadius="50%"
                stroke="transparent"
              />
            ))}
            <Label
              value={data[0] * 100 + "%"}
              position="center"
              fontSize={26}
              fontWeight={700}
              dy={-10}
            />
            <Label
              value="de votre objectif"
              position="centerTop"
              dy={10}
              width={100}
              fill="#74798C"
              fontSize={16}
              fontWeight={500}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
