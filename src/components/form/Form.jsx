import React from 'react'
import './style.css'

export const Form = ({ texto }) => {
  return (

    <form action="" className="containerform">
  <h2>{texto}</h2>
  <fieldset>
    <section className="form-section-1">
      {/* Empresa */}
      <div className="form-group">
        <label htmlFor="empresa">Empresa</label>
        <select name="empresa" id="empresa" required>
          <option value="">Selecione uma empresa</option>
          <option value="empresa1">Empresa 1</option>
          <option value="empresa2">Empresa 2</option>
          <option value="empresa3">Empresa 3</option>
        </select>
      </div>

      {/* Plano */}
      <div className="form-group">
        <label htmlFor="plano">Plano</label>
        <select name="plano" id="plano" required>
          <option value="">Selecione um plano</option>
          <option value="plano1">Plano 1</option>
          <option value="plano2">Plano 2</option>
          <option value="plano3">Plano 3</option>
        </select>
      </div>

      {/* Centro de Custo */}
      <div className="form-group">
        <label htmlFor="centro-de-custo">Centro de Custo</label>
        <select name="centroDeCusto" id="centro-de-custo" required>
          <option value="">Selecione um centro de custo</option>
          <option value="centro1">Centro 1</option>
          <option value="centro2">Centro 2</option>
          <option value="centro3">Centro 3</option>
        </select>
      </div>
    </section>

    {/* Datas */}
    <section className="form-section-2">
      <div className="form-group">
        <label htmlFor="data-inicial">Mês/Ano Inicial</label>
        <input type="month" name="dataInicial" id="data-inicial" required />
      </div>
      <div className="form-group">
        <label htmlFor="data-final">Mês/Ano Final</label>
        <input type="month" name="dataFinal" id="data-final" required />
      </div>
    </section>
  </fieldset>
</form>


  )
}
