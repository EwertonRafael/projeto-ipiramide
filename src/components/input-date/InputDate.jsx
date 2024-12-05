import React from 'react'
import './style.css'

export const InputDate = ({ texto, type }) => {
  return (
    <>
      <label>{texto}</label>
      <section>
        <div className="date-range-inputs">
          <div>
            <input 
              className='input' 
              type={type} placeholder="Inicial" />
          </div>
          <div>
            <input 
              className='input' 
              type={type} placeholder="Final" />
          </div>
        </div>
      </section>
    </>
  );
};