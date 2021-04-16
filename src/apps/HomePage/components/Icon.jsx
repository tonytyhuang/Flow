
import clearDay from "../../../images/01d.png";
import clearNight from "../../../images/01n.png";
import fewCloudsDay from "../../../images/02d.png";
import fewCloudsNight from "../../../images/02n.png";
import scatteredClouds from "../../../images/03d.png";
import brokenClouds from "../../../images/04d.png";
import showerRain from "../../../images/09d.png";
import rainDay from "../../../images/10d.png";
import rainNight from "../../../images/10n.png";
import snowDay from "../../../images/13d.png";
import mist from "../../../images/50d.png";

export const render = () => {
    return <img className='icon' src={clearDay} alt={clearDay} />;
}

export const renderIcon = (iconNumber) => {
    switch(iconNumber) {
        case "01d":
            return <img className='icon' src={clearDay} alt={clearDay} />;
        case "01n":
            return <img className='icon' src={clearNight} alt={clearNight} />;
        case "02d":
            return <img className='icon' src={fewCloudsDay} alt={fewCloudsDay} />;
        case "02n":
            return <img className='icon' src={fewCloudsNight} alt={fewCloudsNight} />;
        case "03d":
            return <img className='icon' src={scatteredClouds} alt={scatteredClouds} />;
        case "03n":
            return <img className='icon' src={scatteredClouds} alt={scatteredClouds} />;
        case "04d":
            return <img className='icon' src={brokenClouds} alt={brokenClouds} />;
        case "04n":
            return <img className='icon' src={brokenClouds} alt={brokenClouds} />;
        case "09d":
            return <img className='icon' src={showerRain} alt={showerRain} />;
        case "09n":
            return <img className='icon' src={showerRain} alt={showerRain} />;
        case "10d":
            return <img className='icon' src={rainDay} alt={rainDay} />;
        case "10n":
            return <img className='icon' src={rainNight} alt={rainNight} />;
        case "13d":
            return <img className='icon' src={snowDay} alt={snowDay} />;
        case "13n":
            return <img className='icon' src={snowDay} alt={snowDay} />;
        case "50d":
            return <img className='icon' src={mist} alt={mist} />;
        case "50n":
            return <img className='icon' src={mist} alt={mist} />;
    }
}