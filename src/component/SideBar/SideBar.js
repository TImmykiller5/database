import React, { useState } from "react";
import "./SideBar.css";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { NavLink } from "react-router-dom";


function SideBar() {
  const currPath = window.location.pathname;

  const Navigate = useNavigate();
  return (
    <div>
      <div className="side">
        {SideBarData.map((navitem, i) => (
          <div key={i} className="side-items">

            
              <NavLink
                className={ ({isActive}) => 
                  
                    isActive ? "active2": "link"
                  
                }
                to={navitem.link}
              >
                <div> {navitem.icon} </div>
                {navitem.title}
              </NavLink>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
