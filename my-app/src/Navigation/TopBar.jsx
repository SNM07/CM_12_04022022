import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

/**
 * Create top bar with navlinks
 * @return {JSX}
 */
export default class TopBar extends Component {
  render() {
    return (
      <nav className="topBar">
        <Link to="/accueil">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <ul className="menu">
          <NavLink to="/accueil">
            <p>Accueil</p>
          </NavLink>
          <NavLink to="#">
            <p>Profil</p>
          </NavLink>
          <NavLink to="#">
            <p>Réglages</p>
          </NavLink>
          <NavLink to="#">
            <p>Communauté</p>
          </NavLink>
        </ul>
      </nav>
    );
  }
}
