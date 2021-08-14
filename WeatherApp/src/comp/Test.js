import React from "react";
import { useState } from "react";
import "./Test";

const api = {
  key: "c0d573b18729da9019711dcbacf8458d",
  base: "https://api.openweathermap.org/data/2.5/",
};

export default function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const Search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };
  const dateBuilder = (d) => {
    let months = [
      "January",
      "Febrauary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDay();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-box"
            placeholder="Search..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={Search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name},</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}</div>
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c0d573b18729da9019711dcbacf8458d&units=metric?
