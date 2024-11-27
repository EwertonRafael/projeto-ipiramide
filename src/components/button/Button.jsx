import React from 'react';
import './style.css';

export const Button = ({value}) => {
    return (
        <button className='button' >
            {value}
        </button>
    );
};
