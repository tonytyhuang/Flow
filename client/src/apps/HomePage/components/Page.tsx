import { FC, useState } from 'react';
// import "../styles/Page.css"
import { getHighlight } from "../repository";

const Page:FC = () => {
    const [highlightSet, setHighlightSet ] = useState<boolean>(false);
    const [highlightValue, setHighlightValue] = useState<Array<any> | null>(null);
    const highlight = getHighlight();
    // console.log(highlight);
    highlight
        .then(value => {
            if (value.length >= 0){
                setHighlightSet(true);
                // setHighlightValue(value);
                // console.log(highlightValue);
                //console.log(value);
            }
        })
        .catch(err => {console.log(err)});

    return (
        <div className = "flowPage">
            <h1>Home Panel</h1>
            <h2>Tasks Remaining</h2>
        </div>
    )
}

export default Page;