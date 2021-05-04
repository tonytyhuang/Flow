import { FC } from "react";

const DateDisplay:FC = () => {
    var date = new Date()
    var hour = date.getHours();
    var dateString = date.toDateString();
    var finalDate = dateString.slice(0,3) + ',' + dateString.slice(3,10) + ',' + dateString.slice(10);
    
    return (
        <div>
            <h1 className = "">
                {hour > 12 && hour < 18 && 'Good Afternoon'}
                {hour >= 18 && 'Good Evening'}
                {hour <= 4 && 'Good Evening'}
                {hour > 4 && hour <= 12 && 'Good Morning'}
            </h1>
            <h2>
                {finalDate}
            </h2>
        </div>
    )
}

export default DateDisplay;