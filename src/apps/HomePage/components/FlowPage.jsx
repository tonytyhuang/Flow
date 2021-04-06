import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';

const FlowPage = () => {
    var date = new Date()
    var hour = date.getHours();
    const weather = useAsync(getWeather, []);

    console.log(weather);

    return (
        <div>
            <h1>
                {hour}
            </h1>
        </div>
    )
}

export default FlowPage;