import React from 'react'
import './style.css'

export const Select = ({ label, id, value, onChange, options, placeholder }) => {
  return (
    <div className="input-select">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder || "Selecione uma opção"}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    </div>
  )
}
