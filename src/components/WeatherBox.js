import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/WeatherBox.css";

const WeatherBox = ({country}) => {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        const getWeather = async (cityName) => {
            const URI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName},${country}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
            //console.log(URI);
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
    //console.log(weatherData);
    return (
        <div className="weatherContainer">
            {Object.keys(weatherData).length ?
               <>
                    <p>Weather in {weatherData.name}</p>
                    <div className="conditionContainer">
                        <p>{weatherData.weather[0].main}</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon"></img>
                    </div>
                    <div className="tempContainer">
                        <p>Temperature: {weatherData.main.temp} C</p>
                        <div className="minMaxContainer">
                            <p><span className="minArrow">&#x2B07;</span>{weatherData.main.temp_min}C</p>
                            <p><span className="maxArrow">&#x2B06;</span>{weatherData.main.temp_max}C</p>
                        </div>
                    </div>
                </>
            :   <div className="noWeather">No weather info</div>
            }
        </div>
    );
}

export default WeatherBox;