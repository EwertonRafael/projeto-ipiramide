import React from 'react'
import './style.css'
import { Select } from '../input-select/Select'
import { Button } from '../button/Button';
import { Input } from '../input/Input';

export const Form = ({ texto }) => {
  const [empresa, setEmpresa] = React.useState('');
  const [plano, setPlano] = React.useState('');
  return (

    <form className="containerform">
      <h2>{texto}</h2><br />
      <fieldset className='fieldset'>
        <section className="form-section-1">
          <Select
            label="Empresa"
            id="empresa"
            value=""
            onChange={(e) => {
              setEmpresa(e.target.value)
            }}
            options={[
              { value: 'empresa1', label: 'empresa 1' },
              { value: 'empresa2', label: 'empresa 2' },
              { value: 'empresa3', label: 'empresa 3' },
            ]} placeholder="Selecione um plano" />

          <Select
            label="Plano"
            id="plano"
            value=""
            onChange={(e) => {
              setPlano(e.target.value)
            }}
            options={[
              { value: 'plano1', label: 'Plano 1' },
              { value: 'plano2', label: 'Plano 2' },
              { value: 'plano3', label: 'Plano 3' },
            ]} placeholder="Selecione um plano" />
          <Select
            label="Centro de custo"
            id="Centro de custo"
            value=""
            onChange={(e) => {
              setPlano(e.target.value)
            }} options={[
              { value: 'centro1', label: 'centro 1' },
              { value: 'centro2', label: 'centro 2' },
              { value: 'centro3', label: 'centro 3' },
            ]} placeholder="Selecione o custo" />
        </section>
        <section className="form-section-2">
          <Input
            type="month"
            id="inicial"
            label="Mês/Ano inicial" />
          <Input
            type="month"
            id="final"
            label="Mês/Ano Final" />
        </section>
        <section className="form-section-3">
          <label htmlFor="saldoAnterior">Saldo Anterior</label>
          <div>
            <span>Sim</span>
            <Input
              type="radio"
              value="Sim"
              id="saldo"
              name='saldo'
            />
            <span>Não</span>
            <Input
              type="radio"
              value="Não"
              id="saldo"
              name='saldo' />
          </div>
          <label htmlFor="saldoAnterior">Acumulado</label>
          <div>
            <span>Sim</span>
            <Input
              type="radio"
              value="Sim"
              id="acumulado"
              name='acumulado'
            />
            <span>Não</span>
            <Input
              type="radio"
              value="Não"
              id="acumulado"
              name='acumulado' />
          </div>
        </section>
        <Button value="Filtrar" />
      </fieldset>
    </form>


  )
}
