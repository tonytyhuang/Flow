import { FC, useReducer, useState } from "react";
import '../styles/FormatListCard.css'
import TextEditor from './TextEditor'

interface Props {
}

const SevenArrows:FC<Props> = () => {
    const sections = [1,2,3,4,5,6,7];
    const sectionTextArray = ['','','','','','',''];

    const handleChange = (key:number, text:string | undefined) => {
        switch (key){
            case 0:
                sectionTextArray[0] == text;
                break;
            case 1:
                sectionTextArray[1] == text;
                break;
            case 2:
                sectionTextArray[2] == text;
                break;
            case 3:
                sectionTextArray[3] == text;
                break;
            case 4:
                sectionTextArray[4] == text;
                break;
            case 5:
                sectionTextArray[5] == text;
                break;
            case 6:
                sectionTextArray[6] == text;
                break;
        }
    }

    const section = sections.map((index) => {
        <li className = "ExerciseItem" key = {index}>
            <TextEditor key = {index} onChange = {handleChange}></TextEditor>
        </li>
    });

    return (
        <div>
            7Arrows
            <ul>{section}</ul>
        </div>

    );
}

export default SevenArrows;