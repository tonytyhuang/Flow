import { FC } from 'react';
import WeatherCard from "./WeatherCard";
import "../styles/WeatherContainer.css"

interface Props {
    weatherInfo: Array<any>;
    selected: Array<any> | null;
    onClick: (weather:Array<any>) => void;
}

const WeatherContainer:FC<Props> = ({weatherInfo, selected, onClick}) => {   
    const weatherCards = weatherInfo.map((weather, index) => 
        <li className = "WeatherCardItem" key = {index}  >
            <WeatherCard weatherInfo = {weather} selected = {selected} onClick = {()=> onClick(weather)} />
        </li>
    ); 

    return(
        <ul className = "WeatherCardsList"> {weatherCards} </ul>
    )

}

export default WeatherContainer;