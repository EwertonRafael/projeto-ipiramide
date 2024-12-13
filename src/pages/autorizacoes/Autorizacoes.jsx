import React from 'react'
import { Form } from '../../components/form/Form';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import './style.css'
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export const Autorizacoes = () => {
  return (
    <main>
      <Header title="PIRÂMIDE 360" />
      
      <div className="container">
      <Sidebar />
        <div className='container-form'>
        <Form>
          <div className='container-form-header'>
            <h1>Autorizações</h1>
            <span></span>
          </div>
            <Link className='btn-choice' to={'/autorizacoes'}><span>Requisição de Material</span><span className='btn-choice-span'>19<ChevronRight/></span></Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Encerramento Cotação Compra</Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Autorização de Fornecimento</Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Cheque</Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Borderô</Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Títulos a Pagar</Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Autorização de Contrato Ativo</Link>
            <Link className='btn-choice' to={'/autorizacoes'}>Solicitação de Compra</Link>
        </Form>
        </div>
      </div>
    </main>
  )
}
