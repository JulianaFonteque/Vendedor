import React, { useState } from 'react';
import SidebarMenu from './SidebarMenu';
import './Financeiro.css';

const Financeiro = () => {
  const [selectedTab, setSelectedTab] = useState('meu-repasse');
  
  // Dados de exemplo para pedidos
  const pedidos = [
    {
      descricao: 'Vendas de 26/01/2021',
      status: 'Em aberto',
      data: '-',
      valorVendas: 'R$ 33,94',
      valorRepasse: 'R$ 26,91',
    },
    {
      descricao: 'Vendas de 24/01/2021',
      status: 'Agendado',
      data: '25/01/2021',
      valorVendas: 'R$ 34,12',
      valorRepasse: 'R$ 21,46',
    },
  ];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="financeiro-page">
      {/* Sidebar Menu */}
      <SidebarMenu />

      <div className="financeiro-container">
        {/* Cabeçalho */}
        <header className="financeiro-header">
          <h1>Detalhamento do repasse</h1>
          <p>
            Período de vendas <span className="periodo">de 10/05 a 16/05</span>
          </p>
          <div className="header-actions">
            <button className="ajuda-button">Preciso de ajuda</button>
            <button className="baixar-button">Baixar lançamentos</button>
          </div>
        </header>

        {/* Abas de navegação */}
        <div className="tabs-container">
          <button
            className={`tab-button ${selectedTab === 'meu-repasse' ? 'active' : ''}`}
            onClick={() => handleTabClick('meu-repasse')}
          >
            Meu repasse
          </button>
          <button
            className={`tab-button ${selectedTab === 'pedidos' ? 'active' : ''}`}
            onClick={() => handleTabClick('pedidos')}
          >
            Pedidos
          </button>
          <button
            className={`tab-button ${selectedTab === 'vendas' ? 'active' : ''}`}
            onClick={() => handleTabClick('vendas')}
          >
            Vendas
          </button>
        </div>

        {/* Conteúdo principal */}
        {selectedTab === 'meu-repasse' && (
          <div className="detalhamento-container">
            <div className="valor-receber">
              <h2>Valor a receber</h2>
              <p className="valor">R$ 218.556,51</p>
              <p className="status">Status: Pago em 28/06/2021</p>
              <a href="#" className="detalhar-link">Detalhar pagamento &gt;</a>
              <p className="alerta">
                <span className="alerta-icon">&#9888;</span> Seu repasse possui efeitos de
                contrato de registro de recebíveis.
              </p>
            </div>

            <div className="detalhamento-valores">
              <h2>Detalhando os valores</h2>
              <table className="valores-table">
                <tbody>
                  <tr>
                    <td>Total de vendas no período</td>
                    <td>R$ 363.691,75</td>
                  </tr>
                  <tr>
                    <td>Recebido via loja</td>
                    <td>-R$ 95.121,16</td>
                  </tr>
                  <tr>
                    <td>Comissão iFood (11%)</td>
                    <td>-R$ 35.174,86</td>
                  </tr>
                  <tr>
                    <td>Comissão para retirar (11%)</td>
                    <td>-R$ 186,13</td>
                  </tr>
                  <tr>
                    <td>Taxa de transação (3%)</td>
                    <td>-R$ 8.019,88</td>
                  </tr>
                  <tr>
                    <td>Outros lançamentos</td>
                    <td>
                      -R$ 7.557,89{' '}
                      <a href="#" className="detalhar-link">Detalhar outros lançamentos</a>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total</td>
                    <td>R$ 218.556,51</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'pedidos' && (
          <div className="pedidos-container">
            <h2>Lista de Pedidos</h2>
            <table className="pedidos-table">
              <thead>
                <tr>
                  <th>Descrição</th>
                  <th>Status</th>
                  <th>Data</th>
                  <th>Valor de vendas</th>
                  <th>Valor do repasse</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {pedidos.map((pedido, index) => (
                  <tr key={index}>
                    <td>{pedido.descricao}</td>
                    <td>{pedido.status}</td>
                    <td>{pedido.data}</td>
                    <td>{pedido.valorVendas}</td>
                    <td>{pedido.valorRepasse}</td>
                    <td>
                      <button className="detalhar-button">🔍</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Financeiro;
