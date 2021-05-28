import { FC, useEffect, useState } from "react";
import '../styles/FormatListCard.css'
import Header from "./Header";
import TextEditor from './TextEditor'
import '../styles/Form.css'
import { Link } from "react-router-dom";
import { postBibleEntry } from "../repository";

interface Props {
}

const Soap:FC<Props> = () => {
    const sections = [1,2,3,4];
    const [passage, setPassage] = useState<string|undefined>('');
    const sectionTextArray:string[] = ['','','',''];
    const headings:string[] = [
        'Scripture: Write out one meaningful verse',
        'Observation: What do you notice about the verse',
        'Application: How can this scripture be applied in my life',
        'Prayer: Write a prayer about applying this scripture to your life'
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
    }

    const section = sections.map((index) => { return (
        <li key = {index}>
            <Header index = {index} title = {headings[index-1]}/>
            <TextEditor index = {index} onChange = {handleChange}></TextEditor>
        </li>
    )});

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

export default Soap;