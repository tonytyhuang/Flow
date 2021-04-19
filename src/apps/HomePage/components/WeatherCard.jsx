import "../styles/WeatherCard.css";
import { renderIcon } from './Icon';

const WeatherCard = ({props, selected, onClick}) => {
    const hour = props[1];
    const temp = props[0].temp;
    const icon = renderIcon(props[0].weather[0].icon);
    var select = selected ? selected[1] : "";
    var isSelected = (select === hour) ? "selected" : "";

    const className = "WeatherCard" + isSelected;


    return (
        <div className = {className} onClick = {onClick}>
            <h1>{hour}</h1>
            {icon}
            <h2>{props[0].weather[0].main}</h2>
            <h2>{temp}</h2>
        </div>
    );
}

export default WeatherCard;