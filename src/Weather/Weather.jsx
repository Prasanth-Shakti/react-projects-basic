import { useState } from "react";

export default function Weather() {
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const APIkey = import.meta.env.VITE_API_KEY;
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    setWeatherData(data);
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={() => fetchData()}>Get Weather</button>
      {!loading && weatherData && (
        <div>
          <span>{weatherData.name}</span>
          <span>{` Temp: ${weatherData.main.temp}°C`}</span>
          <span>{` Condition: ${weatherData.weather[0].description}`}</span>
          <span>{` Feels like: ${weatherData.main.feels_like}°C`}</span>
        </div>
      )}
    </div>
  );
}
