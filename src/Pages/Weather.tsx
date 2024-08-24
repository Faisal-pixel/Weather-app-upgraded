import React, { useEffect, useState } from "react";
import "./Weather.css";
import {
  Search,
  Sun,
  CloudRain,
  CloudLightning,
  CloudSunRain,
  Thermometer,
  SunDim,
  Wind,
  EyeIcon,
} from "lucide-react";

/**
 * So when the user types into the search bar, using na onchange handler and set to a state.
 * After getting the search value, when the user clicks the search button it should fetch the long and lat set it to the state.
 * Now that we have the long and lat, we can use it to fetch the weather data.
 */

type TtodaysWeatherInfo = {
  location: Tlocation | undefined;
  temperature: string;
  chanceOfRain: string;
  humidity: string;
  sunset: string;
  sunrise: string;
  weatherIcon: string;
  pressure: string;
  wind: string;
  feelsLike: string;
  visibility: string;
};

type TlongLat = {
  long: string;
  lat: string;
};

type Tlocation = {
  name: string;
  coutnry: string;
  state: string;
};

const BASE_URL = "https://api.openweathermap.org";
const API_KEY = import.meta.env.VITE_API_KEY;

const Weather: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [location, setLocation] = useState<Tlocation>();
  const [todaysWeather, setTodaysWeather] = useState<TtodaysWeatherInfo>();
  const [longLat, setLongLat] = useState<TlongLat>();
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onSubmitClickedHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fetchLongLat = async () => {
      const res = await fetch(
        `${BASE_URL}/geo/1.0/direct?q=${inputValue}&appid=${API_KEY}`
      );
      const data = await res.json();

      setLocation({
        name: data[0].name,
        coutnry: data[0].country,
        state: data[0].state,
      });

      setLongLat({
        long: data[0].lon.toString(),
        lat: data[0].lat.toString(),
      });
      console.log(data);
    };
    fetchLongLat();
  };

  useEffect(() => {
    if (longLat === undefined) return;
    const fetchWeatherInfo = async () => {
      const weatherRes = await fetch(
        `${BASE_URL}/data/2.5/weather?lat=${longLat?.lat}&lon=${longLat?.long}&appid=${API_KEY}&units=metric`
      );
      //   const timeDateRes = await fetch(
      //     `https://timeapi.io/api/time/current/coordinate?latitude=${longLat.lat}&longitude=${longLat.long}`
      //   );
      const weatherData = await weatherRes.json();
      //   const timeDateData = await timeDateRes.json();
      setTodaysWeather({
        location: location,
        temperature: weatherData.main.temp,
        humidity: weatherData.main.humidity,
        chanceOfRain: weatherData.clouds.all,
        sunset: weatherData.sys.sunset,
        sunrise: weatherData.sys.sunrise,
        weatherIcon: weatherData.weather[0].icon,
        pressure: weatherData.main.pressure,
        wind: weatherData.wind.speed,
        feelsLike: weatherData.main.feels_like,
        visibility: weatherData.visibility,
        // timeDate: `${timeDateData.time} & ${timeDateData.date}`,
      });
      console.log(weatherData);
    };

    fetchWeatherInfo();
  }, [longLat, inputValue, location]);
  return (
    <div className="search-bar">
      <div className="seconddiv">
        <div>
          <div className="display">
            <form onSubmit={onSubmitClickedHandler}>
              <input
                name="search"
                id="search"
                placeholder="Search for Cities..."
                onChange={onChangeHandler}
              />
              <button type="submit">
                <Search />
              </button>
            </form>
          </div>
          <div className="city-display">
            <div className="city">
              <h1>
                {todaysWeather?.location
                  ? todaysWeather.location.name
                  : "Your City"}
              </h1>
              <p>Chances of rain: {todaysWeather?.chanceOfRain}% </p>
              <p>{todaysWeather?.temperature}°C</p>
            </div>

            <div className="weather-icon">
              <img
                src={`http://openweathermap.org/img/wn/${todaysWeather?.weatherIcon}.png`}
                alt="weather-icon"
                style={{width: "6rem", height: "6rem"}}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h5>TOMORROW'S FORECAST</h5>
          </div>
          <div className="forecast">
            <div className="box">
              <p>8AM</p>
              <Sun />
              <p>0°C</p>
            </div>
            <div className="box">
              <p>10AM</p>
              <Sun />
              <p>0°C</p>
            </div>
            <div className="box">
              <p>12PM</p>
              <Sun />
              <p>0°C</p>
            </div>
            <div className="box">
              <p>2PM</p>
              <Sun />
              <p>0°C</p>
            </div>
            <div className="box">
              <p>4PM</p>
              <Sun />
              <p>0°C</p>
            </div>
            <div className="box">
              <p>6PM</p>
              <Sun />
              <p>0°C</p>
            </div>
          </div>
        </div>
        <div className="air-conditions">
          <h5>AIR CONDITIONS</h5>
          <div className="conditions">
            <div className="box">
              <Thermometer />
              <p>Feels Like</p>
              <p> 
                {todaysWeather?.feelsLike ? todaysWeather.feelsLike : 0}°C
              </p>
            </div>
            <div className="box">
              <SunDim />
              <p>UV Index</p>
              <p>0°C</p>
            </div>
            <div className="box">
              <Wind />
              <p>Wind</p>
              <p>{todaysWeather?.wind ? todaysWeather.wind : 0} meter/sec</p>
            </div>
            <div className="box">
              <EyeIcon />
              <p>Visibility</p>
              <p>
                {todaysWeather?.visibility ? todaysWeather.visibility : 0} meter
              </p>
            </div>
            <div className="box">
              <Thermometer />
              <p>Pressure</p>
              <p>{todaysWeather?.pressure ? todaysWeather.pressure : 0} hPa</p>
            </div>
            <div className="box">
              <Thermometer />
              <p>Sunset</p>
              <p>0°C</p>
            </div>
            <div className="box">
              <Thermometer />
              <p>Humidity</p>
              <p>{todaysWeather?.humidity ? todaysWeather.humidity : 0}%</p>
            </div>
            <div className="box">
              <Thermometer />
              <p>Chance of Rain</p>
              <p>0°C</p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirddiv">
        <h4>7-Day Forecast</h4>
        <div className="seven-days">
          <div className="day">
            <p>Monday</p>
            <Sun />
            <p>0°C</p>
          </div>
          <div className="day">
            <p>Tuesday</p>
            <CloudLightning />
            <p>0°C</p>
          </div>
          <div className="day">
            <p>Wednesday</p>
            <Sun />
            <p>0°C</p>
          </div>
          <div className="day">
            <p>Thursday</p>
            <Sun />
            <p>0°C</p>
          </div>
          <div className="day">
            <p>Friday</p>
            <Sun />
            <p>0°C</p>
          </div>
          <div className="day">
            <p>Saturday</p>
            <CloudSunRain />
            <p>0°C</p>
          </div>
          <div className="day">
            <p>Sunday</p>
            <CloudRain />
            <p>0°C</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
