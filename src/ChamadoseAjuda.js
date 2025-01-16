import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import './ChamadoseAjuda.css';
import { FaShoppingBag, FaDollarSign, FaTruck, FaClipboardList, FaPlay, FaComments, FaTimes } from 'react-icons/fa';

const ChamadoseAjuda = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="chamados-page">
      {/* Sidebar Menu */}
      <SidebarMenu />

      <div className="chamados-container">
        {/* Cabeçalho */}
        <header className="chamados-header">
          <h1>Como podemos te ajudar?</h1>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Digite sua dúvida ou o tema que você quer encontrar"
              className="search-input"
            />
            <button className="search-button">Atendimento</button>
          </div>
          <div className="quick-search">
            <span>Busca Rápida:</span>
            <button>Como funcionam os repasses</button>
            <button>Atendimento JA</button>
            <button>Cancelamento de pedidos</button>
            <button>Autenticação de dois fatores</button>
          </div>
        </header>

        {/* Conteúdos Relevantes */}
        <section className="conteudos-relevantes">
          <h2>Conteúdos relevantes para sua operação</h2>
          <div className="conteudos-grid">
            <div className="conteudo-card">
              <FaShoppingBag className="card-icon" />
              <h3>Pedidos</h3>
              <p>Conteúdos sobre pedidos para ajudar no seu dia a dia</p>
            </div>
            <div className="conteudo-card">
              <FaDollarSign className="card-icon" />
              <h3>Financeiro</h3>
              <p>Tire suas dúvidas sobre fatura, repasse e taxas</p>
            </div>
            <div className="conteudo-card">
              <FaTruck className="card-icon" />
              <h3>Entrega</h3>
              <p>Conheça os serviços de entrega disponíveis</p>
            </div>
            <div className="conteudo-card">
              <FaClipboardList className="card-icon" />
              <h3>Gestor de Pedidos</h3>
              <p>Como acessar, configurar e abrir sua loja no Gestor</p>
            </div>
          </div>
        </section>

        {/* Feedback */}
        <section className="feedback-section">
          <p>
            Esses assuntos são relevantes para você?{' '}
            <button className="feedback-button positivo">Sim</button>
            <button className="feedback-button negativo">Não</button>
          </p>
        </section>

        {/* Seção de Vídeos */}
        <section className="videos-section">
          <h2>Vídeos feitos para você</h2>
          <div className="videos-grid">
            <div className="video-card">
              <FaPlay className="play-icon" />
              <p>Jornada do Pedido</p>
            </div>
            <div className="video-card">
              <FaPlay className="play-icon" />
              <p>Juntos na Operação</p>
            </div>
            <div className="video-card">
              <FaPlay className="play-icon" />
              <p>Entrega+ Como Funciona</p>
            </div>
            <div className="video-card">
              <FaPlay className="play-icon" />
              <p>Conheça a Entrega Sob Demanda</p>
            </div>
          </div>
        </section>
      </div>

      {/* Botão flutuante de chat */}
      <button className="chat-button" onClick={toggleChat}>
        <FaComments />
      </button>

      {/* Janela de chat */}
      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Atendimento JA</span>
            <FaTimes className="close-icon" onClick={toggleChat} />
          </div>
          <div className="chat-body">
            <p><strong>Lucas M:</strong> Olá! Como posso te ajudar hoje?</p>
          </div>
          <div className="chat-footer">
            <input type="text" placeholder="Digite sua mensagem..." />
            <button>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChamadoseAjuda;
