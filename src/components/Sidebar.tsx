import React from "react";
import { Link } from "react-router-dom";
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
          <li><Link to="/">Weather</Link></li>
          <li><Link to="/cities">Cities</Link></li>
          <li><Link to="/maps">Maps</Link></li>
          <li><Link to="/setting">Settings</Link></li>
        </ul>
      </nav>
        </div>
    )

} 

export default Sidebar