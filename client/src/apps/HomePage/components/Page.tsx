import { FC } from 'react';
// import "../styles/Page.css"
import { getHighlight } from "../repository";

const Page:FC = () => {
    const highlight = getHighlight();
    console.log(highlight);
    highlight
        .then(value => {console.log(value)})
        .catch(err => {console.log(err)});


    return (
        <div className = "flowPage">
            <h1>Home Panel</h1>
            <h2>Tasks Remaining</h2>
        </div>
    )
}

export default Page;