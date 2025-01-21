import React from 'react'
import './style.css'
import 'rsuite/dist/rsuite.min.css';
import { DatePicker } from 'rsuite';

export const InputDate = ({ texto, type }) => {
  return (
    <>
      
      <section className='date-container'>
      <label>{texto}</label>
        <div className="date-range-inputs">
        
          <DatePicker oneTap format="yy-MM"  className='input-date' placement="bottomStart"/>
          <DatePicker oneTap format="yy-MM" className='input-date' placement="bottomEnd"/>
          
        </div>
      </section>
    </>
  );
};