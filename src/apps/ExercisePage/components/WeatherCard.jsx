import "../styles/WeatherCard.css";
import { render, renderIcon } from './Icon';

const WeatherCard = ({props, selected, onClick}) => {
    const hour = props[1];
    const temp = Math.round(props[0].temp) + '°C'; 
    const icon = renderIcon(props[0].weather[0].icon);
    var select = selected ? selected[1] : "";
    var isSelected = (select === hour) ? "selected" : "";

    const className = "WeatherCard" + isSelected;

    var cardStyle = {
        backgroundImage: `url(${icon})`
    }


    return (
        <div style = {cardStyle} className = {className} onClick = {onClick}>
            <div className = "Temperature">{temp}</div>
            <div className = "Time">{hour}</div>
            <div className = "Weather">{props[0].weather[0].main}</div>
        </div>
    );
}

export default WeatherCard;