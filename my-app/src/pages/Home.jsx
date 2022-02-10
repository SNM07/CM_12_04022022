import React from "react";
import { NavLink } from "react-router-dom";

function HomePage() {
    document.title = "SportSee";
  return (
    <div className="homePage">
      <h1>
        Bienvenue sur <span>SportSee</span>
      </h1>
      <p>
        Projet 12 de la formation OpenClassrooms, réalisation d'un tableau de
        bord avec React et Recharts. <br/> Cliquez sur l'id d'un utilisateur pour voir
        ses données :
      </p>
      <div className="homePageUserLinks">
        <NavLink to="/user/12">User 12</NavLink>
        <NavLink to="/user/18">User 18</NavLink>
          </div>
          <span id="allLinksTitle">Tous les liens:</span>
      <div className="allLinks">
        <NavLink to="/user/12">User 12</NavLink>
        <NavLink to="/user/18">User 18</NavLink>
        <NavLink to="/ErrorPage">Error Page</NavLink>
      </div>
    </div>
  );
}

export default HomePage;
