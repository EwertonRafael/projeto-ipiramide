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
        <main>
            <Header title="PIRAMIDE 360" />
            <div className="container">
                <Sidebar />
                <Form>
                    <h1>Gerencial</h1>

                    <fieldset className="fieldset">
                        <div className="gerencial-selects">
                            <div>
                                <Select
                                    label="Empresa"
                                    id="empresa"
                                    options={[
                                        { value: 'empresa1', label: 'Empresa 1' },
                                        { value: 'empresa2', label: 'Empresa 2' },
                                        { value: 'empresa3', label: 'Empresa 3' },
                                    ]}
                                    placeholder="Selecione uma empresa"
                                />
                            </div>
                            <div>

                                <Select
                                    label="Plano"
                                    id="plano"
                                    options={[
                                        { value: 'plano1', label: 'Plano 1' },
                                        { value: 'plano2', label: 'Plano 2' },
                                        { value: 'plano3', label: 'Plano 3' },
                                    ]}
                                    placeholder="Selecione um plano"
                                />
                            </div>
                            <div>

                                <Select
                                    label="Centro de custo"
                                    id="centroDeCusto"
                                    options={[
                                        { value: 'centro1', label: 'Centro 1' },
                                        { value: 'centro2', label: 'Centro 2' },
                                        { value: 'centro3', label: 'Centro 3' },
                                    ]}
                                    placeholder="Selecione o centro de custo"
                                />
                            </div>
                        </div>
                        <div className="gerencial-date">
                            <InputDate
                                texto="Mês/Ano"
                                type="month"
                                id="data"
                                label="Data" />
                        </div>
                        <div>
                            <InputRadio 
                                type="radio" 
                                label="Saldo Anterior" value="sim" 
                                name="saldo anterior" texto="Sim" />
                            <InputRadio 
                                type="radio" label="Acumulado" value="nao" name="acumulado" texto="Nao" />
                        </div>
                    </fieldset>

                    <Button  value="Demonstrativo" />
                </Form>
            </div>
        </main>
    );
};


