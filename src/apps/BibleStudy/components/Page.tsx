import { FC, useState, useCallback } from 'react';
import FormatList from './FormatList';

const Page:FC = () => {
    const [format, setFormat] = useState<string|null>(null);
    

    console.log(format);
    const handleFormat = useCallback((format:string) => {
        setFormat(format);
    },[setFormat]);

    return (
        <div className = "Page">
            <h1>Select Bible Study Format</h1>
            <FormatList onClick = {handleFormat} selected = {format}/>
            {format && format == '7arrows' && (
                <h1>
                    7Arrows
                </h1>
            )}
        </div>
    )
}

export default Page;