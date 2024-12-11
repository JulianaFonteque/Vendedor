import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import SidebarMenu from "./SidebarMenu"; // Menu lateral
import "./Promocoes.css"; // Estilos personalizados

const Promocoes = () => {
  const [abas, setAbas] = useState("estaporvir"); // Estado para controlar as abas
  const navigate = useNavigate(); // Instancia o hook para navegação

  const handleAbaClick = (aba) => {
    setAbas(aba);
  };

  return (
    <div className="promocoes-container">
      {/* Menu Lateral */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <div className="promocoes-main">
        <div className="alerta">
          <p>
            Comece oferecendo seus melhores preços aqui! Clique aqui para
            acessar nosso Guia do Usuário, onde explicamos como criar seus
            próprios descontos. <a href="#">Saiba mais</a>
          </p>
        </div>

        <div className="cabecalho">
          <select className="select-filtro">
            <option>Nome da Promoção</option>
            <option>Data de início</option>
            <option>Data de término</option>
          </select>
          <input
            type="text"
            className="input-pesquisa"
            placeholder="Procurar por promoções"
          />
          <button
            className="botao-nova-promocao"
            onClick={() => navigate("/nova-promocao")}
          >
            + Nova Promoção
          </button>
        </div>

        {/* Abas */}
        <div className="abas">
          <button
            className={`aba ${abas === "estaporvir" ? "ativa" : ""}`}
            onClick={() => handleAbaClick("estaporvir")}
          >
            Está por vir
          </button>
          <button
            className={`aba ${abas === "emandamento" ? "ativa" : ""}`}
            onClick={() => handleAbaClick("emandamento")}
          >
            Em andamento
          </button>
          <button
            className={`aba ${abas === "expirado" ? "ativa" : ""}`}
            onClick={() => handleAbaClick("expirado")}
          >
            Expirado
          </button>
        </div>

        {/* Conteúdo das Abas */}
        <div className="conteudo-aba">
          {abas === "estaporvir" && <p>Nenhuma promoção está por vir.</p>}
          {abas === "emandamento" && <p>Nenhuma promoção em andamento.</p>}
          {abas === "expirado" && <p>Nenhuma promoção expirada.</p>}
        </div>
      </div>
    </div>
  );
};

export default Promocoes;
