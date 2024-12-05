import React from 'react'
import { Form } from './../../components/form/Form';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';

export const Requisicao = () => {
  return (
    <main>
      <Header title="PIRAMIDE 360" />
      <section className="container">
      <Sidebar />
      <Form />
      </section>
    </main>
  )
}
