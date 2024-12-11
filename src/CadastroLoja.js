import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroLoja.css';

const CadastroLoja = () => {
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    navigate('/detalhes'); // Redireciona para a tela de detalhes
  };

  return (
    <div className="cadastro-container">
      {/* Imagem e mensagem */}
      <div className="cadastro-left">
        <h1>Seu negócio pede agilidade na gestão?</h1>
        <p>
          Esse é o alcance das lojas parceiras do JA. Faça parte e alavanque
          suas vendas em Londrina.
        </p>
      </div>

      {/* Formulário */}
      <div className="cadastro-right">
        <h2>Cadastre sua loja</h2>
        <p>Entre e ganhe 1 mês de mensalidade grátis!</p>
        <form onSubmit={handleCadastro}>
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Celular (com DDD)" required />
          <button type="submit">Cadastrar agora</button>
        </form>
        <small>
          Ao continuar, você concorda em receber comunicações do JA. Confira
          nossa <a href="/">Declaração de Privacidade</a>.
        </small>
      </div>
    </div>
  );
};

export default CadastroLoja;
