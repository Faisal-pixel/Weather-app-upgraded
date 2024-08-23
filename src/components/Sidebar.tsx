import React from "react";
import { NavLink } from "react-router-dom";
import { Cloud } from 'lucide-react';
import './Sidebar.css'

const Sidebar: React.FC = () => {
    return(
        <div className="sidebar">
            <div className="cloud">
            <Cloud size={100}/>
            <h1>THE WEATHER</h1>
            </div> 
      <nav>
        <ul>
          <li><NavLink to="/" className="sidebar-link" >
            <i className="icon-map"></i>
            <span>Weather</span>
          </NavLink></li>
          <li><NavLink to="/cities" className="sidebar-link">
            <i className="icon-cities"></i>
            <span>Cities</span>
          </NavLink></li>
          <li><NavLink to="/maps" className="sidebar-link">
            <i className="icon-map"></i>
            <span>Map</span>
          </NavLink></li>
          <li><NavLink to="/setting" className="sidebar-link">
            <i className="icon-settings"></i>
            <span>Settings</span>
          </NavLink></li>
        </ul>
      </nav>
        </div>
    )

} 

export default Sidebar