import logoMarca from '../../assets/img/LogoMarca.png'
import React from 'react'
import './style.css'
import { Button } from '../../components/button/Button'

export const Login = () => {
  return (
    <>
      <section className="login">
        <div>
          <img src={logoMarca} alt="logo" />
          <h1 className='title'>iPIRAMIDE</h1>
          <p>ACESSAR O SISTEMA</p>

        </div>
        <form action="" >
          <label htmlFor="user">Nome</label>
          <input type="text" placeholder="Slecione o usuário"  id='user'/>
          <label htmlFor="password">Senha</label>
          <input type="password" placeholder="Selecione sua senha" id='password'/>
          <Button value="Entrar" />
        </form>
      </section>
    </>
  )
}
