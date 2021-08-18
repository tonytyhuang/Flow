import { FC, useEffect, useState } from 'react';
// import "../styles/Page.css"
import { getHighlight } from "../repository";

const Page:FC = () => {
    const [highlightSet, setHighlightSet ] = useState<boolean>(false);
    const [highlightValue, setHighlightValue] = useState<Array<any> | null>(null);
    const highlight = getHighlight();
    useEffect(() => {
        highlight
        .then(value => {
            // console.log(value);
            if (!highlightSet){
                if (value.length >= 0){
                    setHighlightSet(true);
                    setHighlightValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [highlight])

    return (
        <div className = "flowPage">
            <h1>Home Panel</h1>
            <h2>Tasks Remaining</h2>
        </div>
    )
}

export default Page;