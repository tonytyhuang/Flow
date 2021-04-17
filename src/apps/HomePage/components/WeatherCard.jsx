import "../styles/WeatherCard.css";
import { render, renderIcon } from './Icon';

const WeatherCard = ({props, selected, onClick}) => {
    const hour = props[1];
    const temp = props[0].temp;
    const icon = renderIcon(props[0].weather[0].icon);
    var isSelected = (selected === hour) ? "selected" : "";

    const className = "WeatherCard" + isSelected;

    return (
        <div className = {className} onClick = {onClick}>
            <h1>{hour}</h1>
            {icon}
            <h2>{temp}</h2>
        </div>
    );
}

export default WeatherCard;