import { useState } from "react";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeatherIcon = (code) => {
    if (code === 0) return "☀️";
    if ([1, 2].includes(code) || code === 3) return "🌤️";
    if ([45, 48].includes(code)) return "🌫️";
    if ([51, 53, 55, 61, 63, 65].includes(code)) return "🌧️";
    if ([71, 73, 75, 77].includes(code)) return "❄️";
    if ([80, 81, 82].includes(code)) return "🌦️";
    if ([95, 96, 99].includes(code)) return "⛈️";
    return "🌍";
  };

  const searchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoData = await geoRes.json();

      if (!geoData.results?.length) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code`
      );

      const data = await weatherRes.json();

      setWeather({
        city: name,
        country,
        temp: data.current.temperature_2m,
        humidity: data.current.relative_humidity_2m,
        feelsLike: data.current.apparent_temperature,
        wind: data.current.wind_speed_10m,
        code: data.current.weather_code,
      });
        console.log(data);
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") searchWeather();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-sky-400 via-blue-600 to-indigo-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6 text-white">

        {/* Title */}
        <h1 className="text-center text-3xl font-bold mb-6">
          🌤 Weather App
        </h1>

        {/* Search */}
        <div className="flex gap-2 mb-5">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter city..."
            className="flex-1 px-4 py-3 rounded-full text-black outline-none"
          />
          <button
            onClick={searchWeather}
            className="bg-yellow-400 hover:bg-yellow-300 active:scale-95 transition px-5 rounded-full font-bold text-black"
          >
            🔍
          </button>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center py-6 animate-pulse">
            Loading weather...
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-500 text-white text-center p-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        {/* Weather Info */}
        {weather && !loading && (
          <div className="text-center space-y-4">
            <div className="text-5xl">
              {getWeatherIcon(weather.code)}
            </div>

            <h2 className="text-2xl font-semibold">
              {weather.city}, {weather.country}
            </h2>

            <p className="text-5xl font-bold">
              {weather.temp}°C
            </p>

            <p className="text-sm opacity-80">
              Feels like {weather.feelsLike}°C
            </p>

            <div className="grid grid-cols-3 gap-3 mt-6 text-sm">
              <div className="bg-white/10 p-3 rounded-xl">
                💧<br />{weather.humidity}%
              </div>
              <div className="bg-white/10 p-3 rounded-xl">
                💨<br />{weather.wind} km/h
              </div>
              <div className="bg-white/10 p-3 rounded-xl">
                🌡<br />Real Feel
              </div>
            </div>
          </div>
         
        )}

      </div>
    </div>
    
  );
}

export default Weather;