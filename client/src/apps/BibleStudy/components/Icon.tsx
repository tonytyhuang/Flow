import header1 from "../../../images/header1.png";
import header2 from "../../../images/header2.png";
import header3 from "../../../images/header3.png";
import header4 from "../../../images/header4.png";
import header5 from "../../../images/header5.png";
import header6 from "../../../images/header6.png";
import header7 from "../../../images/header7.png";

export const renderHeaderIcon = (iconNumber:number) => {
    switch(iconNumber) {
        case 1:
            return header1;
        case 2:
            return header2;
        case 3:
            return header3;
        case 4:
            return header4;
        case 5: 
            return header5;
        case 6:
            return header6;
        case 7:
            return header7;
    }
}