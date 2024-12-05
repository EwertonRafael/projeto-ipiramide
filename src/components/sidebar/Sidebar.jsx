import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/gerencial">Gerencial</Link>
      <Link to="/autorizacoes">Autorizações</Link>
    </div>
  )
}
