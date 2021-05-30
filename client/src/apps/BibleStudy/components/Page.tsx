import { FC, useState, useCallback } from 'react';
import FormatList from './FormatList';
import SevenArrows from './SevenArrows';
import '../styles/Page.css'
import Soap from './Soap';
import Standard from './Standard';

const Page:FC = () => {
    const [format, setFormat] = useState<string|null>(null);
    
    const handleFormat = useCallback((format:string) => {
        setFormat(format);
    },[setFormat]);

    return (
        <div className = "Page">
            <h1>Select Bible Study Format</h1>
            <FormatList onClick = {handleFormat} selected = {format}/>
            {format && format === '7arrows' && (
                <SevenArrows/>
            )}
            {format && format === 'SOAP' && (
                <Soap/>
            )}
            {format && format === 'Standard' && (
                <Standard/>
            )}
        </div>
    )
}

export default Page;