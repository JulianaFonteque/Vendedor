import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para navegação
import './CadastroFinal.css';

const CadastroFinal = () => {
  const [selectedPlan, setSelectedPlan] = useState('');
  const navigate = useNavigate(); // Instanciando o useNavigate

  // Função para selecionar o plano
  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  // Função para continuar para a próxima etapa
  const handleContinue = () => {
    if (!selectedPlan) {
      alert('Por favor, selecione um plano antes de continuar.');
      return;
    }
    alert(`Plano selecionado: ${selectedPlan}`);
    navigate('/produto'); // Redireciona para a tela CadastroProduto
  };

  return (
    <div className="cadastro-final-container">
      <h2>Planos do JA</h2>
      <p>Selecione o plano ideal para sua loja.</p>
      <div className="planos-container">
        {/* Plano Básico */}
        <div
          className={`plano-card ${selectedPlan === 'Básico' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('Básico')}
        >
          <h3>Básico</h3>
          <p>Sua loja visível no app do JA. Entregas feitas pela própria loja.</p>
          <p><strong>5% Comissão </strong></p>
          <p><strong>R$ 100,00 / mês</strong></p>
          <p>Apenas se faturar acima de R$ 1.800,00</p>
          <p className="free">1º mês grátis!</p>
          <p>3.2%: Taxa sobre pedidos pagos pelo app do JA</p>
        </div>

        {/* Plano Entrega */}
        <div
          className={`plano-card ${selectedPlan === 'Entrega' ? 'selected' : ''}`}
          onClick={() => handlePlanSelect('Entrega')}
        >
          <h3>Entrega</h3>
          <p>Sua loja visível no app do JA. Entregas feitas por parceiros JA.</p>
          <p><strong>10% Comissão</strong></p>
          <p><strong>R$ 130,00 / mês</strong></p>
          <p>Apenas se faturar acima de R$ 1.800,00</p>
          <p className="free">1º mês grátis!</p>
          <p>3.2%: Taxa sobre pedidos pagos pelo app do JA</p>
        </div>
      </div>

      {/* Botão de Continuar */}
      <button
        className={`continue-button ${!selectedPlan ? 'disabled' : ''}`}
        onClick={handleContinue}
        disabled={!selectedPlan} // Desabilita o botão se nenhum plano for selecionado
      >
        Continuar
      </button>
    </div>
  );
};

export default CadastroFinal;
