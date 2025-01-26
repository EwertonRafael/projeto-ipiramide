import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { CircleCheckBig, FileText, Play } from 'lucide-react'

export const Sidebar = () => {
  return (
    <div className="sidebar">
      
      <Link to="/gerencial">
        <div className='box-icon'>
          <span><FileText stroke='#0056A4' fill='#ffffff' height={16}/></span> Gerencial
        </div>
        <Play fill='#525252' stroke='#ffffff' height={12}/>
      </Link>


      <Link to="/autorizacoes">
        <div className='box-icon'>
          <span><CircleCheckBig height={15}/></span>Autorizações
        </div>
        <Play fill='#525252' stroke='#ffffff' height={12}/>
      </Link>
    </div>
  )
}
