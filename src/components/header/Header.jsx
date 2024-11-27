import React from 'react';
import './style.css';
export const Header = ({title}) => {
    return (
        <header className="header" >
            <h1 className='titlee'>{title}</h1>
            <div className='user'>
                <span className='name'>Marcela</span>
                {/* https://random.responsiveimages.io/ */}
                <img  className='img' src="https://random.imagecdn.app/500/151" alt="foto do usuário"/>
            </div>
        </header>
    );
};