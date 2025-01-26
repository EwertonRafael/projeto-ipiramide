import React from 'react';
import { Header } from '../../components/header/Header.jsx';
import { Sidebar } from '../../components/sidebar/Sidebar.jsx';
// import { Form } from '../../components/form/Form.jsx';
// import { Select } from '../../components/input-select/Select.jsx';
import './style.css';

export const Demonstrativo = () => {

  return (
    <div>
      <main className='main'>
        <Header title="PIRAMIDE 360" />
        <div className="container-demonstrativo">
          <Sidebar />
          <div className='container-form'>
            
            <div className='container-form-select'>

            </div>
            
          </div>
          
          
        </div>
      </main>
    </div>
  );
};
