import { FC, useEffect, useState } from "react";
import '../styles/FormatListCard.css'
import Header from "./Header";
import TextEditor from './TextEditor'
import '../styles/Form.css'
import { Link } from "react-router-dom";
import { postBibleEntry } from "../repository";

interface Props {
}

const SevenArrows:FC<Props> = () => {
    const sections = [1,2,3,4,5,6,7];
    const [passage, setPassage] = useState<string|undefined>('');
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

    const handlePassage = (text:string | undefined) => {
        setPassage(text);
    }

    const handleChange = (index:number, text:string | undefined) => {
        console.log(sectionTextArray)
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

    const formatEntry = () => {
        var entry = '';
        for (var i = 0; i < headings.length; i++ ){
            entry += '<p><strong>' + headings[i] + '</strong></p>' + sectionTextArray[i]
        }
        return entry;
    }

    const handleSaveJournal = () => {
        const entry = formatEntry();
        var bibleEntryValue = {
            title: passage,
            entry: entry,
            date: new Date(),
        }

        const resp = postBibleEntry(bibleEntryValue);
        console.log(resp);
    }

    const section = sections.map((index) => { return (
        <li key = {index}>
            <Header index = {index} title = {headings[index-1]}/>
            <TextEditor index = {index} onChange = {handleChange}></TextEditor>
        </li>
    )});

    useEffect(() => {
        console.log(sectionTextArray)
    }, [sectionTextArray])

    return (
        <div>
            <form autoComplete="off">
            <label>
            Passage&nbsp;&nbsp;
            <input type="text" name="name" onChange = {(e) => handlePassage(e.target.value)}/>
            </label>
            </form>
            <ul className = 'Form'>{section}</ul>
            <Link onClick = {() => handleSaveJournal()} to = "/biblestudy">
                    Save
            </Link>
        </div>

    );
}

export default SevenArrows;