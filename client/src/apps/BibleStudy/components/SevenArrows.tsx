import { FC, useReducer, useState } from "react";
import '../styles/FormatListCard.css'
import TextEditor from './TextEditor'

interface Props {
}

const SevenArrows:FC<Props> = () => {
    const sections = [1,2,3,4,5,6,7];
    const sectionTextArray:string[] = ['','','','','','',''];
    const headings:string[] = [
        'What does it say?',
        "What does it say to it's original audience?",
        'What does it say about God?',
        'What does it say about man?',
        'What does it demand of me?',
        'How does it change the way I relate to people?',
        'How does it prompt me to pray?'
    ];

    const handleChange = (index:number, text:string | undefined) => {
        switch (index){
            case 1:
                if (text === undefined){
                    sectionTextArray[0] = '';
                }else {
                    sectionTextArray[0] = text;
                }
                break;
            case 2:
                if (text === undefined){
                    sectionTextArray[1] = '';
                }else {
                    sectionTextArray[1] = text;
                }
                break;
            case 3:
                if (text === undefined){
                    sectionTextArray[2] = '';
                }else {
                    sectionTextArray[2] = text;
                }
                break;
            case 4:
                if (text === undefined){
                    sectionTextArray[3] = '';
                }else {
                    sectionTextArray[3] = text;
                }
                break;
            case 5:
                if (text === undefined){
                    sectionTextArray[4] = '';
                }else {
                    sectionTextArray[4] = text;
                }
                break;
            case 6:
                if (text === undefined){
                    sectionTextArray[5] = '';
                }else {
                    sectionTextArray[5] = text;
                }
                break;
            case 7:
                if (text === undefined){
                    sectionTextArray[6] = '';
                }else {
                    sectionTextArray[6] = text;
                }
                break;
        }
    }

    const section = sections.map((index) => { return (
        <li key = {index}>
            <TextEditor index = {index} onChange = {handleChange}></TextEditor>
        </li>
    )});

    return (
        <div>
            7Arrows
            <ul>{section}</ul>
            {/* <TextEditor key = {1} onChange = {handleChange}></TextEditor> */}
        </div>

    );
}

export default SevenArrows;