import DateDisplay from "./DateDisplay";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/Page.css"

const FlowPage = () => {
    return (
        <div className = "flowPage">
            <DateDisplay/>
            <WeatherDisplay/>
        </div>
    )
}

export default FlowPage;