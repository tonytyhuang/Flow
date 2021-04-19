import { useState } from 'react';
import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';
import Spinner from 'react-bootstrap/Spinner';
import WeatherCard from "./WeatherCard";
import "../styles/WeatherDisplay.css"

const WeatherDisplayContainer = () => {
    const weather = useAsync(getWeather, []);
    var date = new Date();
    var currTime = date.getHours();
    var timeWeather = [];
    const [weatherSelected, setWeatherSelected] = useState();

    const handleWeatherChoice = (weatherChoice) => {
        setWeatherSelected(weatherChoice);
    }
    
    if (weather.result) {
        for (var i = 0; i < 10; ++i){
            var fullTime = (currTime + i) % 24;
            var hour = (currTime + i) % 12;
            let time;
            if (fullTime > 11) {
                if (hour === 0){
                    hour = 12;
                }
                time = hour + 'pm';
            }else {
                if (hour === 0){
                    hour = 12;
                }
                time = hour + 'am';
            }
            timeWeather.push([weather.result.hourly[i], time]);
        }
    }

    const weatherCards = timeWeather.map((weatherInfo, index) => 
        <li className = "WeatherCardItem" key = {index}  >
            <WeatherCard props = {weatherInfo} selected = {weatherSelected} onClick = {()=> handleWeatherChoice(weatherInfo)} />
        </li>
    ); 

    return (
        <div>
            
            {weather.result && (
                <div className = "WeatherCardContainer">
                    <ul className = "WeatherCardsList">{weatherCards}</ul>
                </div>
            )}
            {weather.loading && (
                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                </Spinner>)}
            {weatherSelected && (
                <h1>Suggested activities</h1>
                
            )}
        </div>
    )
}

export default WeatherDisplayContainer;