import { FC } from "react";
import '../styles/FormatListCard.css'
import TextEditor from './TextEditor.js'

interface Props {
}

const SevenArrows:FC<Props> = () => {



    return (
        <div>
            7Arrows
            <TextEditor></TextEditor>
        </div>

    );
}

export default SevenArrows;