import { FC } from "react";

interface Props {
    highlight: Array<any>;
    onClick?: () => void;
}

const HighlightTask:FC<Props> = ({highlight, onClick}) => {
    const title = highlight[0].highlight;
    return (
        <div>
            <div className = "title">{title}</div>
        </div>
    );
}

export default HighlightTask;