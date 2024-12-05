import React from 'react'
import './style.css'

export const Form = ({children}) => {
  return (
    <form  className="containerform">
      {children}
    </form>
  )
}
