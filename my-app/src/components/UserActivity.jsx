import React from 'react';
import { useState,useEffect } from 'react';
import {mockUserActivity} from '../services/mockAPI'
import { useParams } from 'react-router';
import {BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip, ResponsiveContainer} from "recharts";

function UserActivity() {

    const [data, setData] = useState([]);
	const userId = useParams();
	const userID = userId.id;

    useEffect(() => {
		const getData = async () => {
			const request = await mockUserActivity(userID);
			if (!request) return alert('data error');
 			setData(request.sessions);
		};
		getData();
	}, [userID]);
	if (data.length === 0) return null;
	//format data.day
	for (let i = 0 ; i < data.length ; i ++){data[i].day = i + 1;}
	console.log(data)
    return (  
        <></>
    );
}

export default UserActivity;
