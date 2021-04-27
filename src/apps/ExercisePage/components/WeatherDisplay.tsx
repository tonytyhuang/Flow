import { useState, FC } from 'react';
import { getWeather, postExercise } from "../repository";
import { useAsync } from 'react-async-hook';
import Spinner from 'react-bootstrap/Spinner';
import ExerciseContainer from './ExerciseContainer';
import WeatherContainer from './WeatherContainer';
import { Link } from "react-router-dom";


const WeatherDisplayContainer:FC = () => {
    const weather = useAsync(getWeather, []);
    var date = new Date();
    var currTime = date.getHours();
    var timeWeather = [];
    const [weatherSelected, setWeatherSelected] = useState<Array<any> | null>(null);
    const [exerciseSelected, setExerciseSelected] = useState<string | null>(null);

    // Set choice of weather clicked
    const handleWeatherChoice = (weatherChoice: Array<any>) => {
        setWeatherSelected(weatherChoice);
        console.log(weatherSelected);
        setExerciseSelected(null);
    }

    // Set choice of exercise clicked
    const handleExerciseChoice = (exerciseChoice: string) => {
        setExerciseSelected(exerciseChoice);
    }
    
    // Handle saving exercise chosen
    const handleSaveExercise = (exerciseChoice: string) => {
        const completed = false;
        var exerciseDay = 0;
        if (!weatherSelected){
            return;
        }
        if (date.getHours() > 14 && parseInt(weatherSelected[1].slice(0)) < 10){
            exerciseDay = date.getDate() + 1;
        }else {
            exerciseDay = date.getDate();
        }
        const exerciseDate = new Date(date.getFullYear(), date.getMonth(), exerciseDay);
        var exerciseValue = {
            exercise: exerciseChoice,
            completed: completed,
            date: exerciseDate,
        }
        const resp = postExercise(exerciseValue);
        console.log(resp);
    }

    // When weather response is given, add response of each hour and that hour in array, timeWeather
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
                    <WeatherContainer weatherInfo = {timeWeather} selected = {weatherSelected} onClick = {handleWeatherChoice}/>
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
                <Link onClick = {() => handleSaveExercise(exerciseSelected)} to = "/biblestudy">
                    Save
                </Link>
            )}
        </div>
    )
}

export default WeatherDisplayContainer;