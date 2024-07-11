import React, {useState} from 'react';
import './test.css';

export const Test: React.FC = () => {
    const [value, setValue] = useState(false)


    return (
        <div className="container">
            <div className={`item ${value && 'nextItem'}`} onClick={() => {
                setValue(!value)
            }}></div>
            <div className="follower"></div>
        </div>
    );
};
