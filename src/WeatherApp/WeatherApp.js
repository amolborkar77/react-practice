// Build a Weather App: Develop a weather application that fetches weather data
// from an API and displays it to the user.
import React, { useState } from "react";

const MY_API_KEY = "4ac74ee97fd00e72c158b1b43367aa68";

const WEATHER_API = "https://api.openweathermap.org/data/2.5/weather?q=";

const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const getData = async () => {
    if (!city) {
      setError("Please enter a city");
      return;
    }

    try {
      const response = await fetch(`${WEATHER_API + city}&appid=${MY_API_KEY}`);

      if (!response.ok) throw new Error("City not found");

      const data = await response.json();
      setWeatherData(data);
      setError("");
    } catch (e) {
      setError(e.message);
      setWeatherData(null);
    }
  };

  return (
    <>
      <h1>My Weather App</h1>
      <input
        type="string"
        placeholder="Enter a city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          marginLeft: "5px",
          borderRadius: "4px",
          border: "2px solid blue",
        }}
        onClick={getData}
      >
        Get Weather
      </button>

      <h2>Weather Details:</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}

      {weatherData && (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys.country}
          </h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </>
  );
};

export default WeatherApp;
