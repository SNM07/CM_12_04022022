import React from "react";
import CardInfos from "./CardInfos";
import { useState, useEffect } from "react";
import { userInfosData } from "../services/API";
import { useParams } from "react-router";

/**
 * Render Cards with user key infos Data
 * @return {JSX}
 */
export default function CardContainer() {
  const [data, setData] = useState([]);
  const userId = useParams();
  const userID = userId.id;

  useEffect(() => {
    const getData = async () => {
      const request = await userInfosData(userID);
      if (!request) return alert("data error");
      setData(request.keyData);
    };
    getData();
  }, [userID]);

  if (data.length === 0) return null;

  return (
    <section className="cardContainer">
      <CardInfos type="Calories" value={data.calorieCount} />
      <CardInfos type="Protéines" value={data.proteinCount} />
      <CardInfos type="Glucides" value={data.carbohydrateCount} />
      <CardInfos type="Lipides" value={data.lipidCount} />
    </section>
  );
}
