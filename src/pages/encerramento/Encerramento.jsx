import React from 'react'
import { Form } from './../../components/form/Form';
import { Header } from '../../components/header/Header';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { Select } from '../../components/input-select/Select';
import { InputDate } from '../../components/input-date/InputDate';
import { Input } from '../../components/input/Input';
import { Button } from '../../components/button/Button';
import './style.css'

export const Encerramento = () => {
  return (
    <main>
      <Header title="PIRAMIDE 360" />
      <section className="container">
        <Sidebar />
        <Form >
          <h1>Encerramento</h1>
          <fieldset className="fieldset-encerramento">
            <h3>Dados Gerais</h3>
            <Select
              label="Centro de Custo"
              id="empresa"
              options={[
                { value: 'empresa1', label: 'Empresa 1' },
                { value: 'empresa2', label: 'Empresa 2' },
                { value: 'empresa3', label: 'Empresa 3' },
              ]}
              placeholder="Selecione uma empresa"
            /> <br />

            <InputDate texto="Data Requisição" type="date" />
            <InputDate texto="Data Atendemento" type="date" />
            <InputDate texto="Data Liberação" type="date" /> <br />
            <Input label="Numero Requisição" />
            <Input label="quantidade de itens" type="number" />
            <Input label="Operador (>,<,=)" />
          </fieldset>
          <div>
            <Button value="Filtrar" />
            <button className='button-limpar'>Limpar</button>
          </div>
        </Form>
      </section>
    </main>
  )
}
