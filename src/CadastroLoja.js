import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroLoja.css';

const CadastroLoja = () => {
  const [isLogin, setIsLogin] = useState(false); // Estado para alternar entre login e cadastro
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleCadastro = (e) => {
    e.preventDefault();
    navigate('/detalhes'); // Redireciona para a tela de detalhes após o cadastro
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Login realizado com sucesso');
    navigate('/cadastro-produto'); // Redireciona para a tela de CadastroProduto.js
  };

  return (
    <div className="cadastro-container">
      {/* Imagem e mensagem */}
      <div className="cadastro-left">
        <h1>Alavanque suas vendas JA!</h1>
        <p>
          Nunca foi tão fácil vender. Impulsione suas vendas online com tudo que temos
          de melhor. Faça parte e alavanque suas vendas em Londrina e região.
        </p>
      </div>

      {/* Formulário: alterna entre cadastro e login */}
      <div className="cadastro-right">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <p>Entre com sua conta para continuar.</p>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="E-mail" required />
              <input type="password" placeholder="Senha" required />
              <button type="submit">Entrar</button>
            </form>
            <p>
              Ainda não tem uma conta?{' '}
              <button onClick={() => setIsLogin(false)} className="toggle-button">
                Cadastre-se aqui
              </button>
            </p>
          </>
        ) : (
          <>
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
            <p>
              Já tem uma conta?{' '}
              <button onClick={() => setIsLogin(true)} className="toggle-button">
                Faça login aqui
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CadastroLoja;
