import "../styles/WeatherCard.css"

const WeatherCard = ({props}) => {
    const hour = props[1];
    const temp = props[0].temp;

    return (
        <div className = "WeatherCard">
            <h1>{hour}</h1>
            <h2>{temp}</h2>
            <h2></h2>
        </div>
    );
}

export default WeatherCard;