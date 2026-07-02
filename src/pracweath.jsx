    import { useState } from "react";

    function Practweath() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    
    const apiKey = "";
    const api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

    async function getWeather() {
        setLoading(true);
        setError("");
        setWeather(null);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            const data = await response.json();
            
            if(Number(data.cod) !== 200){
                setError(data.message || "City Not Found!");
                setLoading(false);
                return;
            }

            const weatherData = {
                country: data.sys.country,
                humidity: data.main.humidity,
                feelslike: data.main.feels_like,
                temp: data.main.temp,
                wind: data.wind.speed,
            };

            setWeather(weatherData);
        } catch(err){
            setError("Sometheng went wrong");
        } finally {
            setLoading(false);
        }

    }
        return (
            <div className="w-full h-screen flex justify-center items-center">
                <div className="border-2 w-md h-[70%] flex flex-col gap-5 items-center">
                <p className="text-4xl">Weather App</p>
                <div className="flex gap-2">
                <input className="border-1" value={city} onChange={(e)=> setCity(e.target.value)}></input>< button className="border-1 rounded-xl p-1" onClick={getWeather}>Click</button></div>
                {loading && (<p>Loading...</p>)}

                {weather && !loading && (<div>
                    <p className="">{city}, {weather.country}</p>
                    <p>{weather.temp}°C</p>
                    <p>{weather.feelslike}</p>
                    <p>{weather.humidity}</p>
                    <p>{weather.wind}</p>
                </div>)}
                {error && (<div className="text-xl text-red-500"><p>{error}</p></div>)}
                </div>
            </div>
        )
    }
    export default Practweath;