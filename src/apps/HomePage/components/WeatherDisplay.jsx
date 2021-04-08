import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';
import Spinner from 'react-bootstrap/Spinner';

const WeatherDisplay = () => {
    const weather = useAsync(getWeather, []);
    
    return (
        <div>
            {weather.result && (
                <h3>
                    {weather.result.main.temp}
                </h3>
            )}
            {weather.loading && (
                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                </Spinner>)}
        </div>
    )
}

export default WeatherDisplay;