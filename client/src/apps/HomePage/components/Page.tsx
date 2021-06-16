import { FC } from 'react';
// import "../styles/Page.css"
import { getHighlight } from "../repository";

const Page:FC = () => {
    const highlight = getHighlight();
    console.log(highlight);


    return (
        <div className = "flowPage">
            <h1>What's your highlight for today?</h1>
        </div>
    )
}

export default Page;