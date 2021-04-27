import { renderIcon } from './Icon';
import "../styles/ExerciseCard.css";

const ExerciseCard = ({exerciseChosen, selected, onClick}) => {
    const icon = renderIcon(exerciseChosen);
    var select = selected ? selected : "";
    var isSelected = (select === exerciseChosen) ? "selected" : "";

    const className = "ExerciseCard" + isSelected;


    return (
        <div className = {className} onClick = {onClick}>
            <h2>{exerciseChosen}</h2>
            {icon}
        </div>
    );
}

export default ExerciseCard;