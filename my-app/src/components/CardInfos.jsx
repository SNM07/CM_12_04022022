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

const colorTypes = {
	Calories: { backgroundColor: 'rgba(255,0,0,0.1)' },
	Glucides: { backgroundColor: 'rgba(253,204,12,0.1)' },
	Protéines: { backgroundColor: 'rgba(74,184,255,0.1)' },
	Lipides: { backgroundColor: 'rgba(253,81,129,0.1)' },
};

export default function CardInfos({ type, value }) {
  return (
	  <article className="cardInfosContainer">
		  <div className="iconContainer" style={colorTypes[type]}>
      <img
        className="cardInfosLogo"
        src={iconTypes[type]}
        alt=""
		  />
		  </div>
      <div className="cardInfos">
        <span className="cardInfosValue">{`${value}${unitTypes[type]}`}</span>
        <span className="cardInfosType">{type}</span>
      </div>
    </article>
  );
}
