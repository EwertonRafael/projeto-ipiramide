import React from 'react';
import { Header } from '../../components/header/Header.jsx';
import { Sidebar } from '../../components/sidebar/Sidebar.jsx';
import { Form } from '../../components/form/Form.jsx';
import { Select } from '../../components/input-select/Select.jsx';
import './style.css';

export const Demonstrativo = () => {

  return (
    <div>
      <main>
        <Header title="PIRAMIDE 360" />
        <div className="container">
          <Sidebar />
          <Form className="containerform">
            <h1>Demonstrativo</h1>
            <Select
              label="Empresa"
              id="empresa"
              options={[
                { value: 'empresa1', label: 'Empresa 1' },
                { value: 'empresa2', label: 'Empresa 2' },
                { value: 'empresa3', label: 'Empresa 3' },
              ]}
              placeholder="Selecione as opções"
            />
            <Select
              label="Acumulado"
              id="acumulado"
              options={[
                { value: 'empresa1', label: 'Empresa 1' },
                { value: 'empresa2', label: 'Empresa 2' },
                { value: 'empresa3', label: 'Empresa 3' },
              ]}
              placeholder="Selecione as opções"
            />
            <Select
              label="Análise Vertical"
              id="acumulado"
              options={[
                { value: 'empresa1', label: 'Empresa 1' },
                { value: 'empresa2', label: 'Empresa 2' },
                { value: 'empresa3', label: 'Empresa 3' },
              ]}
              placeholder="Selecione as opções"
            />
          </Form>
        </div>
      </main>
    </div>
  );
};
