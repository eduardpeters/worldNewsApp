import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/WeatherBox.css";

const WeatherBox = ({country}) => {
    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const getWeather = async (cityName) => {
            const URI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            console.log(URI);
            try {
                const response = await axios.get(URI);
                setWeatherData(response.data);
            }
            catch (error) {
                console.error(error);
            }
        }
        getWeather(getCityName(country));
    }, [country]);

    const getCityName = code => {
        switch (code) {
            case "us":
                return ("Washington D.C.");
            case "de":
                return ("Berlin");
            case "fr":
                return ("Paris");
            case "gb":
                return ("London");
            case "jp":
                return ("Tokyo");
            default:
                return ;
        }
    }
    console.log(weatherData);
    return (
        <div className="weatherContainer">
            <p>weather for {weatherData?.name} goes here</p>
            <p>{weatherData?.main?.temp}</p>
        </div>
    );
}

export default WeatherBox;