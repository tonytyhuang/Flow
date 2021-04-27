import DateDisplay from "./DateDisplay";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/FlowPage.css"

const FlowPage = () => {
    return (
        <div className = "flowPage">
            <DateDisplay/>
            <WeatherDisplay/>
        </div>
    )
}

export default FlowPage;