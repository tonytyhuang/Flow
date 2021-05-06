import { FC, useReducer, useState } from "react";
import '../styles/FormatListCard.css'
import TextEditor from './TextEditor'

interface Props {
}

const SevenArrows:FC<Props> = () => {
    const [body, setBody] = useState<string | undefined>();
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(body);
    const handleChange = (text:string) => {
        setBody(text);
        console.log(body);
    }

    return (
        <div>
            7Arrows
            <TextEditor value = {body} onChange = {setBody}></TextEditor>
        </div>

    );
}

export default SevenArrows;