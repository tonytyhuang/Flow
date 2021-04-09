import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';
import Spinner from 'react-bootstrap/Spinner';

const WeatherDisplayContainer = () => {
    const weather = useAsync(getWeather, []);
    var date = new Date();
    var timeWeather = [];

    if (weather.result) {
        for (i = 0; i < 12; ++i){
            var hour = (Date.getHours() + i) & 12;
            timeWeather.concat([weather.result.data.hourly[i], hour]);
        }
    }

    return (
        <div>
            {weather.result && (
                <h3>
                    {weather.result.data.current.temp}
                </h3>
            )}
            {weather.loading && (
                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                </Spinner>)}
        </div>
    )
}

export default WeatherDisplayContainer;