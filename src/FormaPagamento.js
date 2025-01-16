import React, { useState } from "react";
import SidebarMenu from "./SidebarMenu"; // Importa o menu lateral
import "./FormaPagamento.css"; // Arquivo de estilos para a tela

const metodosPagamentoEntrega = [
  { id: 1, nome: "Dinheiro", imagem: "/images/dinheiro.png" },
  { id: 2, nome: "Crédito - Mastercard (Máquina)", imagem: "/images/mastercard.png" },
  { id: 3, nome: "Crédito - Visa (Máquina)", imagem: "/images/visa.png" },
  { id: 4, nome: "Débito - Mastercard (Máquina)", imagem: "/images/mastercard.png" },
  { id: 5, nome: "Débito - Elo (Máquina)", imagem: "/images/elo.png" },
  { id: 6, nome: "Débito - Visa (Máquina)", imagem: "/images/visa.png" },
  { id: 7, nome: "Pix", imagem: "/images/pix.png" },
];

const metodosPagamentoApp = [
    
    { id: 8, nome: "Crédito - Mastercard ", imagem: "/images/mastercard.png" },
    { id: 9, nome: "Crédito - Visa ", imagem: "/images/visa.png" },
    { id: 10, nome: "Débito - Mastercard ", imagem: "/images/mastercard.png" },
    { id: 11, nome: "Débito - Elo ", imagem: "/images/elo.png" },
    { id: 12, nome: "Débito - Visa ", imagem: "/images/visa.png" },
    { id: 13, nome: "Pix", imagem: "/images/pix.png" },
];

const FormaPagamento = () => {
  const [pagamentosEntrega, setPagamentosEntrega] = useState(
    metodosPagamentoEntrega.map(() => false)
  );
  const [pagamentosApp, setPagamentosApp] = useState(
    metodosPagamentoApp.map(() => false)
  );

  const handleTogglePagamento = (index, tipo) => {
    if (tipo === "entrega") {
      const novosPagamentos = [...pagamentosEntrega];
      novosPagamentos[index] = !novosPagamentos[index];
      setPagamentosEntrega(novosPagamentos);
    } else {
      const novosPagamentos = [...pagamentosApp];
      novosPagamentos[index] = !novosPagamentos[index];
      setPagamentosApp(novosPagamentos);
    }
  };

  const handleSave = () => {
    const metodosSelecionadosEntrega = metodosPagamentoEntrega.filter(
      (_, index) => pagamentosEntrega[index]
    );
    const metodosSelecionadosApp = metodosPagamentoApp.filter(
      (_, index) => pagamentosApp[index]
    );

    console.log("Métodos de Pagamento na Entrega Selecionados:", metodosSelecionadosEntrega);
    console.log("Métodos de Pagamento pelo App Selecionados:", metodosSelecionadosApp);

    alert("Configurações salvas com sucesso!");
  };

  return (
    <div className="forma-pagamento-container">
      {/* Menu Lateral */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <div className="forma-pagamento-main">
        <h1>Formas de pagamento</h1>
        <p>Escolha quais formas de pagamento seus clientes poderão usar.</p>

        <div className="pagamentos-cards">
          {/* Pagamento na Entrega */}
          <div className="pagamento-card">
            <h2>Pagamento na Entrega</h2>
            <div className="pagamentos-list">
              {metodosPagamentoEntrega.map((metodo, index) => (
                <div key={metodo.id} className="pagamento-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={pagamentosEntrega[index]}
                      onChange={() => handleTogglePagamento(index, "entrega")}
                    />
                    <img
                      src={metodo.imagem}
                      alt={metodo.nome}
                      className="pagamento-imagem"
                    />
                    {metodo.nome}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Pagamento pelo App */}
          <div className="pagamento-card">
            <h2>Pagamento pelo App</h2>
            <div className="pagamentos-list">
              {metodosPagamentoApp.map((metodo, index) => (
                <div key={metodo.id} className="pagamento-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={pagamentosApp[index]}
                      onChange={() => handleTogglePagamento(index, "app")}
                    />
                    <img
                      src={metodo.imagem}
                      alt={metodo.nome}
                      className="pagamento-imagem"
                    />
                    {metodo.nome}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="save-button" onClick={handleSave}>
          Salvar alterações
        </button>
      </div>
    </div>
  );
};

export default FormaPagamento;
