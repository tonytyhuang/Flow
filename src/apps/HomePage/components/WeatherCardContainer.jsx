import WeatherCard from "./WeatherCard";

const WeatherCardContainer = ({props}) => {
    console.log(props);
    const weatherList = props;
    console.log(weatherList);
    const weatherCards = weatherList.map((weatherInfo) =>
        <li><WeatherCard props = {weatherInfo} /></li>
    );
    return (
        <ul>{weatherCards}</ul>
    );
}

export default WeatherCardContainer;