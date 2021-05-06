import { FC, memo } from "react";
import '../styles/FormatListCard.css'

interface Props {
    format: string;
    selected: boolean | null;
    onClick: (format:string) => void;
}

const FormatListCard:FC<Props> = memo(({format, selected, onClick}) => {
    var select = selected ? "selected" : "";
    console.log('renders');
    const className = "FormatListCard" + select;


    return (
        <div className = {className} onClick = {() => onClick(format)}>
            {format}
        </div>
    );
});

export default FormatListCard;