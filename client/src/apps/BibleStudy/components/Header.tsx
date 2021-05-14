import { FC } from 'react';

interface Props {
    title: string;
}

const Header:FC<Props> = ({title}) => {


    return(
        <div className = "Header">
            {title}
        </div>
    )
}

export default Header;