import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroDetalhes.css';

const CadastroDetalhes = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomeLoja: '',
    nomeResponsavel: '',
    emailLoja: '',
    telefoneLoja: '',
    cnpjLoja: '',
    cpfResponsavel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
    navigate('/final'); // Redireciona para a terceira tela
  };

  return (
    <div className="cadastro-detalhes-container">
      <h2>Cadastro de Detalhes da Loja</h2>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <label htmlFor="nomeLoja">Nome da Loja:</label>
        <input
          type="text"
          id="nomeLoja"
          name="nomeLoja"
          value={formData.nomeLoja}
          onChange={handleChange}
          required
        />

        <label htmlFor="nomeResponsavel">Nome do Responsável:</label>
        <input
          type="text"
          id="nomeResponsavel"
          name="nomeResponsavel"
          value={formData.nomeResponsavel}
          onChange={handleChange}
          required
        />

        <label htmlFor="emailLoja">E-mail da Loja ou Responsável:</label>
        <input
          type="email"
          id="emailLoja"
          name="emailLoja"
          value={formData.emailLoja}
          onChange={handleChange}
          required
        />

        <label htmlFor="telefoneLoja">Telefone de Contato da Loja:</label>
        <input
          type="text"
          id="telefoneLoja"
          name="telefoneLoja"
          value={formData.telefoneLoja}
          onChange={handleChange}
          required
        />

        <label htmlFor="cnpjLoja">CNPJ da Loja:</label>
        <input
          type="text"
          id="cnpjLoja"
          name="cnpjLoja"
          value={formData.cnpjLoja}
          onChange={handleChange}
          required
        />

        <label htmlFor="cpfResponsavel">CPF do Responsável:</label>
        <input
          type="text"
          id="cpfResponsavel"
          name="cpfResponsavel"
          value={formData.cpfResponsavel}
          onChange={handleChange}
          required
        />

        <button type="submit">Próxima Etapa</button>
      </form>
    </div>
  );
};

export default CadastroDetalhes;
