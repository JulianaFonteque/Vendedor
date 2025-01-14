import React, { useState, useEffect } from 'react';
import SidebarMenu from './SidebarMenu';
import './CadastroProduto.css';
import { FaUser, FaMapMarkerAlt, FaMoneyBillWave, FaBox } from 'react-icons/fa';

const CadastroProduto = () => {
  const [pedidos, setPedidos] = useState([
    { id: '#18 - 1B4ZZ7', cliente: 'Vilma', endereco: 'Conjunto João Nogueira', total: 'R$ 34,79', status: 'pendente', tempo: 'poucos segundos' },
    { id: '#17 - 6N8RZS', cliente: 'Gleide', endereco: 'Jardim Campo Novo', total: 'R$ 56,61', status: 'aprovado', tempo: '3 minutos' },
    { id: '#13 - HFH9LL', cliente: 'Jaerson', endereco: 'Centro', total: 'R$ 32,79', status: 'separacao', tempo: '24 minutos' },
    { id: '#10 - 1DYW4', cliente: 'Daniele', endereco: 'Centro', total: 'R$ 62,73', status: 'entregando', tempo: '49 minutos' }
  ]);

  const [notificacoes, setNotificacoes] = useState([]);

  // Simular notificações de novo pedido
  useEffect(() => {
    const timer = setInterval(() => {
      setNotificacoes((prev) => [...prev, 'Novo pedido recebido 🔔']);
    }, 80000);
    return () => clearInterval(timer);
  }, []);

  const handleRemoverNotificacao = (index) => {
    setNotificacoes((prev) => prev.filter((_, i) => i !== index));
  };

  const colunas = [
    { id: 'pendente', titulo: 'Pendente' },
    { id: 'aprovado', titulo: 'Aprovado' },
    { id: 'separacao', titulo: 'Separação' },
    { id: 'entregando', titulo: 'Entregando' }
  ];

  return (
    <div className="cadastro-produto-container">
      {/* Sidebar Menu */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <main className="content">
        {/* Cabeçalho */}
        <header className="page-header">
          <h1>Gestor de pedidos</h1>
          <div className="status-info">
            <div>
              <span>0</span>
              <p>não entregues</p>
            </div>
            <div>
              <span>9</span>
              <p>concluídos</p>
            </div>
            <div>
              <span>41 minutos</span>
              <p>Tempo de entrega médio</p>
            </div>
          </div>
          <div className="header-actions">
            <FaUser className="icon" title="Perfil" />
            <FaMapMarkerAlt className="icon" title="Atualizar" />
          </div>
        </header>

        {/* Notificações */}
        <div className="notificacoes-container">
          {notificacoes.map((notificacao, index) => (
            <div
              key={index}
              className="notificacao"
              onClick={() => handleRemoverNotificacao(index)}
            >
              {notificacao}
            </div>
          ))}
        </div>

        {/* Colunas de pedidos */}
        <div className="pedidos-container">
          {colunas.map((coluna) => (
            <div key={coluna.id} className="pedido-coluna">
              <h2>{coluna.titulo}</h2>
              {pedidos
                .filter((pedido) => pedido.status === coluna.id)
                .map((pedido) => (
                  <div key={pedido.id} className="pedido-card">
                    <h3>{pedido.id}</h3>
                    <p>
                      <FaUser className="icon" /> <strong>Cliente:</strong>{' '}
                      {pedido.cliente}
                    </p>
                    <p>
                      <FaMapMarkerAlt className="icon" />{' '}
                      <strong>Endereço:</strong> {pedido.endereco}
                    </p>
                    <p>
                      <FaMoneyBillWave className="icon" /> <strong>Total:</strong>{' '}
                      {pedido.total}
                    </p>
                    <p className="tempo">{pedido.tempo}</p>
                    <button className="acao-button">
                      {coluna.id === 'pendente'
                        ? 'Aceitar'
                        : coluna.id === 'aprovado'
                        ? 'Preparar'
                        : 'Enviar'}
                    </button>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CadastroProduto;
