import React from 'react'
import { Header } from '../../components/header/Header.jsx';
import { Sidebar } from '../../components/sidebar/Sidebar.jsx';
import { Form } from '../../components/form/Form.jsx';
import { Select } from '../../components/input-select/Select.jsx';
import { Button } from '../../components/button/Button.jsx';
import { InputDate } from '../../components/input-date/InputDate.jsx';
import { InputRadio } from '../../components/input-radio/InputRadio.jsx';
import './style.css'

export const Gerencial = () => {

    return (
        
        <main className='main'>
            <Header className='header' title="PIRÂMIDE 360" titleForm='Gerencial' />
            
            <div className="container-gerencial">
                <Sidebar />
                <div className='container-form'>
                    <Form>
                        <div className='container-form-header'>
                            <h1>Gerencial</h1>
                            <span className='span-header'>Preenchimento obrigatório</span>
                        </div>

                        <fieldset className="fieldset">
                            <div className="gerencial-selects">
                                
                                    <Select className='select' label="Empresa" id="empresa" placeholder="Selecione uma empresa"
                                        options={[
                                            { value: 'empresa1', label: 'Empresa 1' },
                                            { value: 'empresa2', label: 'Empresa 2' },
                                            { value: 'empresa3', label: 'Empresa 3' },
                                        ]}/>

                                    <Select className='select' label="Plano" id="plano" placeholder="Selecione um plano"
                                        options={[
                                            { value: 'plano1', label: 'Plano 1' },
                                            { value: 'plano2', label: 'Plano 2' },
                                            { value: 'plano3', label: 'Plano 3' },
                                        ]}/>

                                    <Select className='select' label="Centro de custo" id="centroDeCusto" placeholder="Selecione o centro de custo"
                                        options={[
                                            { value: 'centro1', label: 'Centro 1' },
                                            { value: 'centro2', label: 'Centro 2' },
                                            { value: 'centro3', label: 'Centro 3' },
                                        ]}/>
                                
                            </div>
                            
                            <div className='sub-fieldset'>

                                <div className="gerencial-date">
                                    <InputDate texto="Mês/Ano" type="month" id="data" label="Data" />
                                </div>
                                
                            
                                <div className='sub-container-input'>
                                    <label>Saldo Anterior</label>
                                        <div className='input-radio-form'>
                                            <InputRadio className="input-radio"/>
                                        </div>
                                    </div>

                                    <div className='sub-container-input'>
                                        <label>Acumulado</label>
                                        <div className='input-radio-form'> 
                                            <InputRadio className="input-radio"/>
                                        </div>
                                    </div>
                                    
                                </div>
                                    
                                

                            
                            
                            <div className='input-checkbox-container'>
                                <div className='input-checkbox'>
                                    <span>Saldo anterior</span>
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                                <div className='input-checkbox'>
                                    <span>Acumulados</span>
                                    <label className="switch">
                                        <input type="checkbox"/>
                                        <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </fieldset>

                        <Button value="Demonstrativo" />
                    </Form>
                    
                </div>

                
            </div>
            
        </main>
        
    );
};


