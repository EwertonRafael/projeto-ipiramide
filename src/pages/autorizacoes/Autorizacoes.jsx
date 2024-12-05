import React from 'react'
import { Form } from '../../components/form/Form';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './style.css'

export const Autorizacoes = () => {
  return (
    <main>
      <Header title="PIRAMIDE 360" />
      <section className="container">
        <Sidebar />
        <Form >
          <h1>Autorizações</h1><br />
            <label className='label' htmlFor="">Requisição de materias  <button >></button></label>
            <label className='label' htmlFor="">Encerramento cotação compra  <button >></button></label>
            <label className='label' htmlFor="">Autorização de Fornacimento  <button >></button></label>
            <label className='label' htmlFor="">Cheque<button >></button></label>
            <label className='label' htmlFor="">Borderô<button >></button></label>
            <label className='label' htmlFor="">Títulos a Pagar<button >></button></label>
            <label className='label' htmlFor="">Autorização de Contrato Ativo<button >></button></label>
            <label className='label' htmlFor="">Solicitação de Compra<button >></button></label>
        </Form>
      </section>
    </main>
  )
}
