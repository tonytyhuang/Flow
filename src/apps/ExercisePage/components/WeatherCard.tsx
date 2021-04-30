import { FC } from 'react';
import "../styles/WeatherCard.css";
import { renderIcon } from './Icon';

interface Props {
    weatherInfo: Array<any>;
    selected: boolean;
    onClick: (weatherInfo:Array<any>) => void;
}

const WeatherCard:FC<Props> = ({weatherInfo, selected, onClick}) => {
    const hour = weatherInfo[1];
    const temp = Math.round(weatherInfo[0].temp) + '°C'; 
    const icon = renderIcon(weatherInfo[0].weather[0].icon);
    var isSelected = selected ? "selected" : "";

    const className = "WeatherCard" + isSelected;

    var cardStyle = {
        backgroundImage: `url(${icon})`
    }


    return (
        <div style = {cardStyle} className = {className} onClick = {() => onClick(weatherInfo)}>
            <div className = "Temperature">{temp}</div>
            <div className = "Time">{hour}</div>
            <div className = "Weather">{weatherInfo[0].weather[0].main}</div>
        </div>
    );
}

export default WeatherCard;