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
	return (
		<div className="lineChartContainer">
		<h2>Durée moyenne des sessions</h2>
		<ResponsiveContainer width='99%' height='99%'>
			<LineChart data={data}>
				<XAxis
					axisLine={false}
					tickLine={false}
					dataKey='day'
					stroke='rgba(255, 255, 255, 0.5)'
					tick={{ fontSize: 12 }}
					minTickGap={3}
					padding={{ left: 10, right: 10 }}
				/>
<YAxis dataKey="sessionLength" domain={[0, 'dataMax + 30']} hide={true}/>				<Line
					dataKey='sessionLength'
					type='monotone'
					stroke='rgba(255, 255, 255, 0.5)'
					strokeWidth={2}
					dot={false}
					activeDot={{
						stroke: 'rgba(255, 255, 255, 0.5)',
						strokeWidth: 10,
						r: 5,
					}}
				/>
				<Tooltip
						content={<AverageSessionsCustomToolTip />}
					cursor={{
						stroke: 'rgba(0, 0, 0, 0.1)',
						strokeWidth: 50,
						height: '1000px',
					}}
				/>
			</LineChart>
		</ResponsiveContainer>
	</div>
  );
}

export default UserAverageSessions;

function AverageSessionsCustomToolTip({ active, payload }) {
    if (active && payload) {
      return (
        <span className="tooltipaveragesession">{`${payload[0].value} min`}</span>
      );
    }
    return null;
  }
