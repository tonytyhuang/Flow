import { FC } from 'react';
import WeatherCard from "./WeatherCard";
import "../styles/WeatherContainer.css"

interface Props {
    weatherInfo: Array<any>;
    selected: Array<any> | null;
    onClick: (weatherInfo:Array<any>) => void;
}

const WeatherContainer:FC<Props> = ({weatherInfo, selected, onClick}) => {   
    const weatherCard = (weather: Array<any>) => {
        if (selected && selected[1] === weather[1]){
            return <WeatherCard weatherInfo = {weather} selected = {true} onClick = {onClick} />
        }else {
            return <WeatherCard weatherInfo = {weather} selected = {false} onClick = {onClick} />
        }
    }
    
    const weatherCards = weatherInfo.map((weather, index) => 
        <li className = "WeatherCardItem" key = {index} >
            {weatherCard(weather)}
        </li>
    ); 

    return(
        <ul className = "WeatherCardsList"> {weatherCards} </ul>
    )
    
}

export default WeatherContainer;