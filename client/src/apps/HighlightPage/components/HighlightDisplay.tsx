import { FC, useState } from 'react';
import '../styles/HighlightDisplay.css'

const HighlightDisplay:FC = () => {
    const [highlight, setHighlight] = useState<string|null>(null);

    const handleChange = (e:any) => {
        setHighlight(e.target.value);
    }

    const handleClick = () => {
        console.log(highlight);
    }



    return (
        <div className = "flowPage">
            <div className="card">
                <h2>Highlight</h2>
                <label className="input">
                <input className="inputField" type="text" placeholder="Whats your highlight" onChange = {(e)=>handleChange(e)} />
                </label>
                <div className="button-group">
                <button className = 'send' onClick = {() => handleClick()}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default HighlightDisplay;