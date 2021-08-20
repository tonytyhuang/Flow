import { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
// import "../styles/Page.css"
import { getHighlight, getBibleStudy, getExercise } from "../repository";
import { useHistory } from 'react-router-dom';

const Page:FC = () => {
    const history = useHistory();
    const [highlightSet, setHighlightSet ] = useState<boolean>(false);
    const [highlightValue, setHighlightValue] = useState<Array<any> | null>(null);
    const [exerciseSet, setExerciseSet ] = useState<boolean>(false);
    const [exerciseValue, setExerciseValue] = useState<Array<any> | null>(null);
    const [bibleSet, setBibleSet ] = useState<boolean>(false);
    const [bibleValue, setBibleValue] = useState<Array<any> | null>(null);
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
            if (!exerciseSet){
                if (value.length >= 0){
                    setExerciseSet(true);
                    setExerciseValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [exercise])

    useEffect(() => {
        if (exerciseSet && bibleSet && highlightSet){
            if (exerciseValue && bibleValue && highlightValue){
                if (exerciseValue.length === 0){
                    console.log("exercise");
                    history.push("/exercise");
                }else if (bibleValue.length === 0){
                    history.push("/biblestudy");
                }else if (highlightValue.length === 0){
                    history.push("/highlight");
                }
            }
        }
    }, [exerciseSet, bibleSet, highlightSet])

    return (
        <div>
            { !(exerciseSet && bibleSet && highlightSet) && (
                <Spinner animation="border" role="status">
                                        <span className="sr-only">Loading...</span>
                </Spinner>)
            }
            { exerciseSet && bibleSet && highlightSet && (
                <div className = "flowPage">
                    <h1>Home Panel</h1>
                    <h2>Tasks Remaining</h2>
                    
                </div>
            )}
        </div>
    )
}

export default Page;