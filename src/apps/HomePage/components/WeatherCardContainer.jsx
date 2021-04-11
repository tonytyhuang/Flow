import WeatherCard from "./WeatherCard";
import "../styles/WeatherCardContainer.css"

const WeatherCardContainer = ({props}) => {
    console.log(props);
    const weatherList = props;
    console.log(weatherList);
    const weatherCards = weatherList.map((weatherInfo, index) => 
        <li className = "WeatherCard" key = {index} ><WeatherCard props = {weatherInfo} /></li>
    );
    return (
        <div className = "WeatherCardContainer">
            <ul className = "WeatherCardsList">{weatherCards}</ul>
        </div>
    );
}

export default WeatherCardContainer;