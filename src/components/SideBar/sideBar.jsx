// React imports 
import { NavLink } from "react-router-dom";

import './sideBar.css'

// Assets and style imports
import iconMeditation from "../../assets/iconMeditation.svg";
import iconBike from "../../assets/iconBike.svg";
import iconSwiming from "../../assets/iconSwiming.svg";
import iconDumbBell from "../../assets/iconDumbBell.svg";

// Component left sideBar navigation
export default function SideBar() {
  return (
    <>
      <div className="sideNav_container">
        <div className="sideNav_content">
          <div className="sideNav_links">
            <NavLink to="#">
              <img src={iconMeditation} alt="Meditation" />
            </NavLink>
            <NavLink to="#">
              <img src={iconSwiming} alt="Swiming" />
            </NavLink>
            <NavLink to="#">
              <img src={iconBike} alt="Bike" />
            </NavLink>
            <NavLink to="#">
              <img src={iconDumbBell} alt="Dumb-Bell" />
            </NavLink>
          </div>
          <p className="sideNav_text">Copyright, SportSee 2020</p>
        </div>

      </div>

    </>
  );
};

