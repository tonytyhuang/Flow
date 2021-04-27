import { FC } from 'react';
import DateDisplay from "./DateDisplay";
import WeatherDisplay from "./WeatherDisplay";
import "../styles/Page.css"

const Page:FC = () => {
    return (
        <div className = "flowPage">
            <DateDisplay/>
            <WeatherDisplay/>
        </div>
    )
}

export default Page;