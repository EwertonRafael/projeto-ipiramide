import React from 'react'
import './style.css'

export const Input = ({ type, placeholder, id, label, value, onChange, name }) => {
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
      />
    </div>
  );
};