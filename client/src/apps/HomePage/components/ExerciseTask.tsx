import { FC } from "react";

interface Props {
    exercise: Array<any> | null;
    onClick: () => void;
}

const ExerciseTask:FC<Props> = ({exercise, onClick}) => {
    return (
        <div>
        </div>
    );
}

export default ExerciseTask;