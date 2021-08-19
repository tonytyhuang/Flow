import { FC } from "react";

interface Props {
    exercise: Array<any> | null;
    onClick: () => void;
}

const HighlightTask:FC<Props> = ({exercise, onClick}) => {
    return (
        <div>
        </div>
    );
}

export default HighlightTask;