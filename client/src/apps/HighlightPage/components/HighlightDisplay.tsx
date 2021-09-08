import { FC, useState } from 'react';
import '../styles/HighlightDisplay.css'
import { postHighlight } from "../repository";
import HighlightPage from '../app';
import { useHistory } from 'react-router-dom';

const HighlightDisplay:FC = () => {
    const history = useHistory();
    const [highlight, setHighlight] = useState<string|null>(null);

    const handleChange = (e:any) => {
        setHighlight(e.target.value);
    }

    const handleClick = () => {
        var entry = {
            highlight: highlight,
            date: new Date(),
        }
        const resp = postHighlight(entry);
        console.log(resp);
        history.push("/");
    }



    return (
        <div className = "flowPage">
            <div className="card">
                <h2>Highlight</h2>
                <label className="input">
                <input className="inputField" type="text" placeholder="What would you like to focus on?" onChange = {(e)=>handleChange(e)} />
                </label>
                <div className="button-group">
                <button className = 'send' onClick = {() => handleClick()}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default HighlightDisplay;