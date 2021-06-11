import { FC } from 'react';
import HighlightPage from './HighlightDisplay';
// import "../styles/Page.css"

const Page:FC = () => {
    return (
        <div className = "flowPage">
            <h1>What's your highlight for today?</h1>
            <HighlightPage/>
        </div>
    )
}

export default Page;