import React from "react";
import { useState, useEffect } from "react";
import { mockUserActivity } from "../services/mockAPI";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function UserActivity() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;

  useEffect(() => {
    const getData = async () => {
      const request = await mockUserActivity(userID);
      if (!request) return alert("data error");
      setData(request.sessions);
    };
    getData();
  }, [userID]);
  if (data.length === 0) return null;
  //format data.day
  for (let i = 0; i < data.length; i++) {
    data[i].day = i + 1;
  }
  console.log(data);

  return (
    <div className="barChartContainer">
      <h2 className="barChartTitle">Activités quotidienne</h2>
      <ResponsiveContainer height="99%" width="99%">
        <BarChart data={data} barGap={8} maxBarSize={"100 %"}>
          <XAxis dataKey="day" stroke="grey" tickLine={false} dy={10} />
          <YAxis
            yAxisId="poids"
            domain={["dataMin -2", "dataMax + 1"]}
            orientation="right"
            axisLine={false}
            tickLine={false}
            dx={10}
            dy={-4}
          />
          <YAxis
            yAxisId="calories"
            domain={["dataMin -20", "dataMax + 20"]}
            orientation="left"
            axisLine={false}
            tickLine={false}
            hide={true}
            dx={-10}
            dy={-4}
          />
          <Tooltip
            wrapperStyle={{ width: 130 }}
            content={<CustomTooltip />}
          />
          <Legend
            width={"60%"}
            iconType={"circle"}
            iconSize={".5rem"}
            wrapperStyle={{
              top: "-13%",
              right: "0",
              lineHeight: "40px",
              fontSize: ".8em",
            }}
          />
          <CartesianGrid stroke="#ccc" vertical={false} />
          <Bar
            yAxisId="poids"
            name="Poids (kg)"
            dataKey="kilogram"
            fill="black"
            barSize={8}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill="red"
            barSize={8}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default UserActivity;

function CustomTooltip({ active, payload }) {
  return active && payload ? (
    <ul className="customToolTip">
      <li className="toolTipDatas">{`${payload[0].value}kg`}</li>
      <li className="toolTipDatas">{`${payload[1].value}kCal`}</li>
    </ul>
  ) : null;
}
