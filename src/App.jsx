import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from './pages/login/Login.jsx'
import { Gerencial } from './pages/gerencial/Gerencial.jsx';
import {Demonstrativo} from "./pages/demonstrativo/Demonstrativo.jsx"
import { Autorizacoes } from './pages/autorizacoes/Autorizacoes.jsx';
import { Encerramento } from './pages/encerramento/Encerramento.jsx';
import { Requisicao } from './pages/requisicao/Requisicao.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gerencial" element={<Gerencial />} />
        <Route path="/demonstrativo" element={<Demonstrativo />}/>
        <Route path="/autorizacoes" element={<Autorizacoes />}/>
        <Route path='/encerramento' element={<Encerramento />} />
        <Route path='/requisicao' element={<Requisicao />} />

      </Routes>
    </Router>
  );
}

export default App;
