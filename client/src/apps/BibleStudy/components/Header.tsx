import { FC } from 'react';
import {renderHeaderIcon} from './Icon';
import '../styles/Header.css'

interface Props {
    index: number;
    title: string;
    sevenArrows?: boolean;
}

const Header:FC<Props> = ({index, title, sevenArrows}) => {
    const icon = renderHeaderIcon(index);
    return(
        <div className = "Header">
            {sevenArrows && (
                <img className = 'Icon' src={icon} />
            )}
            {title}
        </div>
    )
}

export default Header;