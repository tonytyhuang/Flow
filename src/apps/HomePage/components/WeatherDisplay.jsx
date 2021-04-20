import { useState } from 'react';
import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';
import Spinner from 'react-bootstrap/Spinner';
import ExerciseContainer from './ExerciseContainer';
import WeatherContainer from './WeatherContainer';

const WeatherDisplayContainer = () => {
    const weather = useAsync(getWeather, []);
    var date = new Date();
    var currTime = date.getHours();
    var timeWeather = [];
    const [weatherSelected, setWeatherSelected] = useState();
    const [exerciseSelected, setExerciseSelected] = useState();

    const handleWeatherChoice = (weatherChoice) => {
        setWeatherSelected(weatherChoice);
        setExerciseSelected(null);
    }

    const handleExerciseChoice = (exerciseChoice) => {
        setExerciseSelected(exerciseChoice);
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

    return (
        <div>
            
            {weather.result && (
                <div className = "WeatherCardContainer">
                    <WeatherContainer timeWeather = {timeWeather} weatherSelected = {weatherSelected} onClick = {handleWeatherChoice}/>
                </div>
            )}
            {weather.loading && (
                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                </Spinner>)}
            {weatherSelected && (
                <div className = "ExerciseContainer">
                    <h1>Suggested activities</h1>
                    <ExerciseContainer weatherInfo = {weatherSelected} exerciseSelected = {exerciseSelected} onClick = {handleExerciseChoice} />
                </div>
            )}
            {exerciseSelected && (
                <button>
                    Save
                </button>
            )}
        </div>
    )
}

export default WeatherDisplayContainer;