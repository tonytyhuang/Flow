import { FC } from 'react';
import '../styles/HighlightDisplay.css'

const HighlightDisplay:FC = () => {
    return (
        <div className = "flowPage">
            <div className="card">
                <h2>Highlight</h2>
                <label className="input">
                <input className="inputField" type="text" placeholder=" " />
                </label>
                <div className="button-group">
                <button className = 'send'>Send</button>
                </div>
            </div>
        </div>
    )
}

export default HighlightDisplay;