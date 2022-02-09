import React from "react";
import iconCalories from "../assets/fire.png";
import iconGlucides from "../assets/apple.png";
import iconLipides from "../assets/cheeseburger.png";
import iconProteines from "../assets/chicken.png";

const iconTypes = {
	Calories: iconCalories,
	Glucides: iconGlucides,
	Protéines: iconProteines,
	Lipides: iconLipides,
};

const unitTypes = {
	Calories: "Kcal",
	Glucides: "g",
	Protéines: "g",
	Lipides: "g",
};

export default function CardInfos({ type, value }) {
	return (
		<article className="cardInfosContainer">
			<img className="cardInfosLogo" src={iconTypes[type]} alt="" />
			<div className="cardInfos">
				<span className="cardInfosValue">{`${value}${unitTypes[type]}`}</span>
				<span className="cardInfosType">{type}</span>
			</div>
		</article>
	);
}
