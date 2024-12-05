import React from 'react'
import './style.css'

export const InputRadio = ({ type, id, label, value, name }) => {
  return (
    <div>
    <label>{label}</label>
    <div className="input-radio">
        <input 
          className='input-radio' 
          type={type} 
          name={name} 
          value="sim" />
          <span>Sim</span>    
        <input 
          className='input-radio'
          type={type} 
          name={name} 
          value="nao" />
          <span>Não</span> 
    </div>
  </div>
  );
};