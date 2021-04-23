import WeatherCard from "./WeatherCard";
import "../styles/WeatherContainer.css"

const WeatherContainer = ({timeWeather, weatherSelected, onClick}) => {   
    const weatherCards = timeWeather.map((weatherInfo, index) => 
        <li className = "WeatherCardItem" key = {index}  >
            <WeatherCard props = {weatherInfo} selected = {weatherSelected} onClick = {()=> onClick(weatherInfo)} />
        </li>
    ); 

    return(
        <ul className = "WeatherCardsList"> {weatherCards} </ul>
    )

}

export default WeatherContainer;