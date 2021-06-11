import { FC } from 'react';
import '../styles/HighlightDisplay.css'

const HighlightDisplay:FC = () => {
    return (
        <div className = "flowPage">
            <div className="card">
                <h2>Highlight</h2>
                <label className="input">
                <input className="input__field" type="text" placeholder=" " />
                <span className="input__label">Some Fancy Label</span>
                </label>
                <div className="button-group">
                <button>Send</button>
                <button type="reset">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default HighlightDisplay;