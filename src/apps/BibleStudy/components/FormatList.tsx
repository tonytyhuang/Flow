import{ memo, useRef } from 'react';
import { FC } from 'react';

interface Props {
    onClick: (format:string) => void;
}

const FormatList:FC<Props> = memo(({onClick}) => {

    console.log("renders");
    const formats = ['Standard', '7arrows'];
    const formatList = formats.map((format, index) =>
        <li className = "ExerciseItem" key = {index} >
            <div onClick = {() => onClick(format)} >
                {format}
            </div>
        </li>
    );


    return(
        <div className = "FormatList">
            <ul> {formatList} </ul>
        </div>
    )
});

export default FormatList;