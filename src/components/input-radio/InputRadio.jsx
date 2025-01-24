import React from 'react'
import './style.css'
import { Radio, RadioGroup } from 'rsuite';

export const InputRadio = ({ type,name, option_one, option_two }) => {
  return (

  <RadioGroup name="radio-group-inline" inline defaultValue="A" className="input-radio">
    <Radio value="Sim" className='sub-input-radio'>Sim</Radio>
    <Radio value="Não" className='sub-input-radio'>Não</Radio>
  </RadioGroup>

    // <div className='container-radio'>
    //   <div className="input-radio">
    //     <input 
    //       type={type} 
    //       name={name} 
    //       value={option_one}/>
    //       <span>{option_one}</span>
    //   </div>
    // </div>
  );
};