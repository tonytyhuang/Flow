import{ memo, useRef } from 'react';
import { FC } from 'react';
import FormatListCard from './FormatListCard';
import '../styles/FormatList.css'

interface Props {
    selected: string | null;
    onClick: (format:string) => void;
}

const FormatList:FC<Props> = memo(({selected, onClick}) => {
    const formats = ['Standard', '7arrows', 'SOAP'];
    const formatList = formats.map((format, index) =>
        <li className = "ExerciseItem" key = {index} >
            <FormatListCard format = {format} selected = {selected === format} onClick = {onClick}/>
        </li>
    );


    return(
        <div className = "FormatList">
            <ul className = 'FormatList' > {formatList} </ul>
        </div>
    )
});

export default FormatList;