import React from 'react'
import { Header } from '../../components/header/Header.jsx';
import { Sidebar } from '../../components/sidebar/Sidebar.jsx';
import { Form } from '../../components/form/Form.jsx';
import './style.css'

export const Dashboard = () => {
    return (
        <>
            <Header title="iPIRÂMIDE 360" />
            <section className='container'>
                <Sidebar />
                <Form texto="Gerencial"/>
            </section>
        </>
    );
};


