import { getWeather } from "../repository";
import { useAsync } from 'react-async-hook';
import Spinner from 'react-bootstrap/Spinner';
import WeatherCardContainer from "./WeatherCardContainer";

const WeatherDisplayContainer = () => {
    const weather = useAsync(getWeather, []);
    var date = new Date();
    var currTime = date.getHours();
    var timeWeather = [];

    if (weather.result) {
        for (var i = 0; i < 12; ++i){
            var fullTime = (currTime + i) % 24;
            var hour = (currTime + i) % 12;
            let time;
            if (fullTime > 11) {
                if (hour === 0){
                    hour = 12;
                }
                time = hour + 'pm';
            }else {
                if (hour === 0){
                    hour = 12;
                }
                time = hour + 'am';
            }
            timeWeather.push([weather.result.hourly[i], time]);
            // console.log(weather.result);
            // timeWeather.push(<WeatherCard key = {i} props={[weather.result.hourly[i], hour]} />);
        }
        console.log(timeWeather);
    }

    // render: function() {
    //     var rows = [];
    //     for (var i = 0; i < numrows; i++) {
    //         rows.push(<ObjectRow key={i}/>);
    //     } 
    
    //     return (<tbody>{rows}</tbody>);
    // }

    return (
        <div>
            
            {weather.result && (
                <div>
                    <h3>
                        {weather.result.current.temp}
                    </h3>
                    <WeatherCardContainer props = {timeWeather} />
                </div>
            )}
            {weather.loading && (
                <Spinner animation="border" role="status">
                                    <span className="sr-only">Loading...</span>
                </Spinner>)}
        </div>
    )
}

export default WeatherDisplayContainer;