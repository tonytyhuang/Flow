import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';
import axios from 'axios';

const FlowPage = () => {
    var date = new Date()
    var hour = date.getHours();
    const weather = useAsync(getWeather, []);

    console.log(weather.result);


    return (
        <div>
            <h1>
                {hour > 12 && hour < 18 && 'Good Afternoon'}
                {hour <= 4 || hour >= 18 && 'Good Evening'}
                {hour > 4 && hour <= 12 && 'Good Morning'}
            </h1>
            {weather.result && weather.result.main.temp}
        </div>
    )
}

export default FlowPage;