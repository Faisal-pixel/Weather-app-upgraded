import React from "react";
import './Weather.css'
import { Search, Sun, CloudRain, CloudLightning, CloudSunRain, Thermometer, SunDim   } from 'lucide-react';

const Weather: React.FC = () => {
    return(
        <div className="search-bar">
          <div>
            <div>
            <div className="display">
            <form>
              <input
                // type="search"
                name="search"
                id="search"
                placeholder="Search for Cities..."
              />
            </form>
            <Search/>
            </div>
            <div>
            <h1>
                YOUR CITY
                </h1>
                <p>Chances of rain: % </p>
                <p>°C</p>
                </div>
                </div>
                <div>
                <div>
                <h5>TOMORROW'S FORECAST</h5>
                </div>
                <div className="forecast">
                    <div className="box">
                        <p>8AM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>10AM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>12PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>2PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>6PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                </div>
                </div>
                <div className="r">
                    <h5>AIR CONDITIONS</h5>
                    <div className="conditions">
                    <div className="box">
                    <Thermometer />
                    <p>Feels Like</p>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <SunDim/>
                        <p>10AM</p>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>12PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>2PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>10AM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>12PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>2PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="box">
                        <p>6PM</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                </div>
                </div>
          </div>
          <div className="thirddiv">
            <h4>7-Day Forecast</h4>
            <div className="seven-day">
                    <div className="day">
                        <p>Monday</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="day">
                        <p>Tuesday</p>
                        <CloudLightning />
                        <p>0°C</p>
                    </div>
                    <div className="day">
                        <p>Wednesday</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="day">
                        <p>Thursday</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="day">
                        <p>Friday</p>
                        <Sun/>
                        <p>0°C</p>
                    </div>
                    <div className="day">
                        <p>Saturday</p>
                        <CloudSunRain/>
                        <p>0°C</p>
                    </div>
                    <div className="day">
                        <p>Sunday</p>
                        <CloudRain/>
                        <p>0°C</p>
                    </div>
                </div>
          </div>
        </div>
    )
} 

export default Weather