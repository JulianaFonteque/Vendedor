import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastroLoja.css';

const CadastroLoja = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    navigate('/detalhes');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login realizado com sucesso');
    navigate('/cadastro-produto');
  };

  return (
    <div>
      {/* Barra Superior */}
      <nav className="top-bar">
        <ul>
          <li><a href="#">Como funciona</a></li>
          <li><a href="#">Quanto custa?</a></li>
          <li><a href="#">Cresça seu negócio</a></li>
          <li><a href="#">Ajuda?</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
      </nav>

      {/* Conteúdo principal */}
      <div
        className="cadastro-container"
        style={{
          backgroundImage: 'url(/images/delivery.png)', // Caminho público para a imagem
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="cadastro-left">
          <h1>Alavanque suas vendas JA!</h1>
          <p>
            Nunca foi tão fácil vender. Impulsione suas vendas online com tudo que temos
            de melhor. Faça parte e comece a vender em Londrina e região.
          </p>
        </div>

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
    </div>
  );
};

export default CadastroLoja;
