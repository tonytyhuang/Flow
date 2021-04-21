import clearDay from "../../../images/01day.png";
import clearNight from "../../../images/01night.png";
import fewCloudsDay from "../../../images/02day.png";
import fewCloudsNight from "../../../images/02night.png";
import scatteredClouds from "../../../images/03day.png";
import rain from "../../../images/09day.png";
import snowDay from "../../../images/13day.png";

export const render = () => {
    return clearDay;
}

export const renderIcon = (iconNumber) => {
    switch(iconNumber) {
        case "01d":
            return clearDay;
        case "01n":
            return clearNight;
        case "02d":
            return fewCloudsDay;
        case "02n":
            return fewCloudsNight;
        case "03d":
            return scatteredClouds;
        case "03n":
            return scatteredClouds;
        case "04d":
            return scatteredClouds;
        case "04n":
            return scatteredClouds;
        case "09d":
            return rain;
        case "09n":
            return rain;
        case "10d":
            return rain;
        case "10n":
            return rain;
        case "13d":
            return snowDay;
        case "13n":
            return snowDay;
        case "50d":
            return scatteredClouds;
        case "50n":
            return scatteredClouds;
    }
}

export const renderExerciseIcon = (exercise) => {
    switch(exercise) {
        case 'Run':
            return <img className='icon' src={snowDay} alt={snowDay} />;
    }
}