import WeatherCard from "./WeatherCard";

const WeatherCardContainer = ({props}) => {
    const weatherList = props.weatherList;
    console.log(weatherList);
    const weatherCards = weatherList.map((weatherInfo) =>
        <li><WeatherCard props = {weatherInfo} /></li>
    );
    return (
        <ul>{weatherCards}</ul>
    );
}

export default WeatherCardContainer;