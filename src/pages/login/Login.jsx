import logoMarca from '../../assets/img/LogoMarca.png';
import React from 'react';
import './style.css';
import { Button } from '../../components/button/Button';
import { Input } from '../../components/input/Input';
import { Eye } from 'lucide-react';

export const Login = () => {
  const [form, setForm] = React.useState({
    user: '',
    password: '',
  });

  const handleForm = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      console.log('Form enviado:', form);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <>
      <section className="login">
        <div>
          <img src={logoMarca} alt="logo" />
          <h1 className="title">iPIRAMIDE</h1>
          <p>ACESSAR O SISTEMA</p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Selecione o usuário"
            id="user"
            label="Nome"
            name="user"
            value={form.user}
            onChange={handleForm}
          />
          <label>Senha</label>
          <div className='input-pass'>

            <input
              type="password"
              placeholder="Selecione sua senha"
              id="password"
              label="Senha"
              name="password"
              value={form.password}
              onChange={handleForm}
            />
            <button className='btn-view-pass'><Eye color='#c4c4c4'/></button>
          </div>
          <Button value="Entrar" type="submit" />
        </form>
      </section>
    </>
  );
};
