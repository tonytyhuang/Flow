import { FC } from 'react';
import {renderHeaderIcon} from './Icon';
import '../styles/Header.css'

interface Props {
    index: number;
    title: string;
}

const Header:FC<Props> = ({index, title}) => {

    const icon = renderHeaderIcon(index);
    return(
        <div className = "Header">
            <img className = 'Icon' src={icon} />
            {title}
        </div>
    )
}

export default Header;