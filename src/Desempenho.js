import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import SidebarMenu from './SidebarMenu'; // Importa o SidebarMenu
import './Desempenho.css';

const Desempenho = () => {
  const [selectedTab, setSelectedTab] = useState('vendas');
  const [periodo, setPeriodo] = useState(''); // Estado para o período personalizado

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handlePeriodoChange = (e) => {
    setPeriodo(e.target.value);
  };

  return (
    <div className="desempenho-layout">
      {/* Sidebar Menu */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <div className="desempenho-container">
        <header className="desempenho-header">
          <h1>Desempenho</h1>
          <p>Acompanhe os principais indicadores da sua loja.</p>
        </header>

        {/* Abas de navegação */}
        <div className="desempenho-tabs">
          <button
            className={selectedTab === 'vendas' ? 'active' : ''}
            onClick={() => handleTabClick('vendas')}
          >
            Vendas
          </button>
          <button
            className={selectedTab === 'operacao' ? 'active' : ''}
            onClick={() => handleTabClick('operacao')}
          >
            Operação
          </button>
          <button
            className={selectedTab === 'produtos' ? 'active' : ''}
            onClick={() => handleTabClick('produtos')}
          >
            Produto
          </button>
        </div>

        {/* Filtros de período e serviço */}
        <div className="desempenho-filtros">
          <div className="filtro-periodo">
            <label>Período:</label>
            <InputMask
              mask="99/99/9999"
              value={periodo}
              onChange={handlePeriodoChange}
              placeholder="dd/mm/aaaa"
              className="input-periodo"
            />
            <button>Últ. 7 dias</button>
            <button className="active">Últ. 30 dias</button>
          </div>
          <div className="filtro-servico">
            <label>Serviço:</label>
            <button className="active">App e Site JA</button>
            <button>Vitrine Digital</button>
          </div>
        </div>

        {/* Indicadores de Desempenho */}
        <div className="indicadores-container">
          <div className="indicador">
            <h3>Total de vendas realizadas</h3>
            <p className="valor">1.234</p>
            <p className="variacao positivo">+25,18%</p>
          </div>
          <div className="indicador">
            <h3>Valor total das vendas</h3>
            <p className="valor">R$ 12.345,67</p>
            <p className="variacao positivo">+24,1%</p>
          </div>
          <div className="indicador">
            <h3>Ticket médio</h3>
            <p className="valor">R$ 50,00</p>
            <p className="variacao negativo">-0,86%</p>
          </div>
          <div className="indicador">
            <h3>Novos clientes</h3>
            <p className="valor">320</p>
            <p className="variacao positivo">+31,03%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desempenho;
