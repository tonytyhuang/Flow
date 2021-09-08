import { FC } from "react";

interface Props {
    exercise: Array<any>;
    onClick?: () => void;
}

const ExerciseTask:FC<Props> = ({exercise, onClick}) => {
    const title = exercise[0].title;
    const date = exercise[0].date;

    return (
        <div>
            <div className = "title">{title}</div>
            <div className = "date">{date}</div>
        </div>
    );
}

export default ExerciseTask;