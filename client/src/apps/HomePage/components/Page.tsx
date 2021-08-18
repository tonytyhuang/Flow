import { FC, useEffect, useState } from 'react';
// import "../styles/Page.css"
import { getHighlight, getBibleStudy, getExercise } from "../repository";

const Page:FC = () => {
    const [highlightSet, setHighlightSet ] = useState<boolean>(false);
    const [highlightValue, setHighlightValue] = useState<Array<any> | null>(null);
    const [exerciseSet, setExerciseSet ] = useState<boolean>(false);
    const [exerciseValue, setExerciseValue] = useState<Array<any> | null>(null);
    const [bibleSet, setBibleSet ] = useState<boolean>(false);
    const [BibletValue, setBibleValue] = useState<Array<any> | null>(null);
    const highlight = getHighlight();
    const bibleStudy = getBibleStudy();
    const exercise = getExercise();
    useEffect(() => {
        highlight
        .then(value => {
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