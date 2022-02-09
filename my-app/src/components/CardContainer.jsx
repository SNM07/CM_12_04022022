import React from "react";
import CardInfos from "./CardInfos";
import { useState, useEffect } from "react";
import { mockUserInfos } from "./../services/mockAPI";
import { useParams } from "react-router";

export default function CardContainer() {
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
            setData(request.keyData);
          };
          getData();
        }, [userID]);
      
        if (data.length === 0) return null;
        console.log("USERCARDS", data);
      

		return (
			<section className="cardContainer">
				<CardInfos type="Calories" value={data.calorieCount} />
				<CardInfos type="Protéines" value={data.proteinCount} />
				<CardInfos type="Glucides" value={data.carbohydrateCount} />
				<CardInfos type="Lipides" value={data.lipidCount} />
			</section>
		);
}