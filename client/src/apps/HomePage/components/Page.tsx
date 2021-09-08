import { FC, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
// import "../styles/Page.css"
import { getHighlight, getBibleStudy, getExercise } from "../repository";
import { useHistory } from 'react-router-dom';

const Page:FC = () => {
    const history = useHistory();
    const [highlightValue, setHighlightValue] = useState<Array<any> | null>(null);
    const [exerciseValue, setExerciseValue] = useState<Array<any> | null>(null);
    const [bibleValue, setBibleValue] = useState<Array<any> | null>(null);
    const [loadPage, setLoadPage] = useState<boolean | null>(null);
    const highlight = getHighlight();
    const bibleStudy = getBibleStudy();
    const exercise = getExercise();
    useEffect(() => {
        highlight
        .then(value => {
            if (highlightValue === null){
                if (value.length >= 0){
                    setHighlightValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [highlight])

    useEffect(() => {
        bibleStudy
        .then(value => {
            if (bibleValue === null){
                if (value.length >= 0){
                    setBibleValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [bibleStudy])

    useEffect(() => {
        exercise
        .then(value => {
            if (exerciseValue === null){
                if (value.length >= 0){
                    setExerciseValue(value);
                }
            }
        })
        .catch(err => {console.log(err)});
    }, [exercise])

    useEffect(() => {
        if (exerciseValue && bibleValue && highlightValue){
            if (exerciseValue.length === 0){
                console.log("exercise");
                history.push("/exercise");
            }else if (bibleValue.length === 0){
                history.push("/biblestudy");
            }else if (highlightValue.length === 0){
                history.push("/highlight");
            }else {
                setLoadPage(true);
            }
        }
    }, [exerciseValue, bibleValue, highlightValue])

    return (
        <div>
            { !(exerciseValue && bibleValue && highlightValue) && (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>)
            }
            { exerciseValue && bibleValue && highlightValue && loadPage &&(
                <div className = "flowPage">
                    <h1>Home Panel</h1>
                    <h2>Tasks Remaining</h2>
                </div>
            )}
        </div>
    )
}

export default Page;