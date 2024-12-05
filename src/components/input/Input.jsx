import React from 'react'
import './style.css'

export const Input = ({ type, placeholder, id, label, value, onChange, name }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <div >
        <input className="input"
          type={type}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          name={name}
        />
      </div>
    </>
  );
};