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
            console.log(value);
            if (!highlightSet){
                if (value.length >= 0){
                    setHighlightSet(true);
                    setHighlightValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [highlight])

    useEffect(() => {
        bibleStudy
        .then(value => {
            console.log(value);
            if (!bibleSet){
                if (value.length >= 0){
                    setBibleSet(true);
                    setBibleValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [bibleStudy])

    useEffect(() => {
        exercise
        .then(value => {
            console.log(value);
            if (!exerciseSet){
                if (value.length >= 0){
                    setExerciseSet(true);
                    setExerciseValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [exercise])


    return (
        <div className = "flowPage">
            <h1>Home Panel</h1>
            <h2>Tasks Remaining</h2>
        </div>
    )
}

export default Page;