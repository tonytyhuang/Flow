import { renderIcon } from './Icon';

const ExerciseCard = ({exerciseChosen, selected, onClick}) => {
    const icon = renderIcon(exerciseChosen);
    var select = selected ? selected[1] : "";
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