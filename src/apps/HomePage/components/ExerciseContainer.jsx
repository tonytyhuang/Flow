import ExerciseCard from "./ExerciseCard";


const ExerciseContainer = ({weatherInfo, exerciseSelected, onClick}) => {
    const temperature = weatherInfo[0].temp;
    const weather = weatherInfo[0].weather[0].id;
    const outdoor = ['Run', 'Sports', 'Gym', 'Home Workout', 'Break'];
    const indoor = ['Home Workout', 'Gym', 'Break'];

    const exercise = () => {
        if (temperature >= 6.5 && weather >= 800){
            return outdoor.map((exercise, index) => 
            <li className = "ExerciseItem" key = {index}  >
                <ExerciseCard exerciseChosen = {exercise} selected = {exerciseSelected} onClick = {() => onClick(exercise)} />
            </li>
            )
        }else {
            return indoor.map((exercise, index) => 
            <li className = "ExerciseItem" key = {index}  >
                <ExerciseCard exerciseChosen = {exercise} selected = {exerciseSelected} onClick = {() => onClick(exercise)} />
            </li>
            )
        }
    }

    const exerciseChosen = exercise();

    return(
        <div className = "Exercise">
            <ul>{exerciseChosen}</ul>
        </div>
    )

}

export default ExerciseContainer;