import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import yoga from "../assets/yoga.png";
import swim from "../assets/swim.png";
import bike from "../assets/biking.png";
import bell from "../assets/dumbbell.png";

/**
 * Create left bar with navlinks
 * @return {JSX}
 */
export default class LeftBar extends Component {
  render() {
    return (
      <nav className="leftBar">
        <ul className="iconsbar">
          <NavLink to="#">
            <button className="yoga icons">
              <img className="yoga" src={yoga} alt="yoga"></img>
            </button>
          </NavLink>
          <NavLink to="#">
            <button className="swim icons">
              <img className="swim" src={swim} alt="swimming"></img>
            </button>
          </NavLink>
          <NavLink to="#">
            <button className="bike icons">
              <img className="bike" src={bike} alt="biking"></img>
            </button>
          </NavLink>
          <NavLink to="#">
            <button className="bell icons">
              <img className="bell" src={bell} alt="bell"></img>
            </button>
          </NavLink>
        </ul>
        <p className="copyright">Copyright, SportSee 2021</p>
      </nav>
    );
  }
}
