import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook useNavigate
import SidebarMenu from "./SidebarMenu"; // Menu lateral
import "./Promocoes.css"; // Estilos personalizados
import { PromocoesContext } from "./PromocoesContext"; // Importa o contexto de promoções

const Promocoes = () => {
  const { promocoes } = useContext(PromocoesContext); // Consome o contexto de promoções
  const [abas, setAbas] = useState("estaporvir"); // Estado para controlar as abas
  const navigate = useNavigate(); // Instancia o hook para navegação

  const handleAbaClick = (aba) => {
    setAbas(aba);
  };

  const filtrarPromocoes = (status) => {
    const agora = new Date();
    switch (status) {
      case "estaporvir":
        return promocoes.filter(
          (promocao) => new Date(promocao.dataInicio) > agora
        );
      case "emandamento":
        return promocoes.filter(
          (promocao) =>
            new Date(promocao.dataInicio) <= agora &&
            new Date(promocao.dataFim) >= agora
        );
      case "expirado":
        return promocoes.filter((promocao) => new Date(promocao.dataFim) < agora);
      default:
        return [];
    }
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
          {filtrarPromocoes(abas).length === 0 ? (
            <p>Nenhuma promoção encontrada.</p>
          ) : (
            <table className="tabela-promocoes">
              <thead>
                <tr>
                  <th>Imagem</th>
                  <th>Produto</th>
                  <th>Período</th>
                  <th>Preço</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {filtrarPromocoes(abas).map((promocao, index) =>
                  promocao.produtos.map((produto, i) => (
                    <tr key={`${index}-${i}`}>
                      <td>
                        <img
                          src={produto.preview || "placeholder-image.png"}
                          alt={produto.nome}
                          className="produto-imagem-listagem"
                        />
                      </td>
                      <td>{produto.nome}</td>
                      <td>
                        {new Date(promocao.dataInicio).toLocaleString()} -{" "}
                        {new Date(promocao.dataFim).toLocaleString()}
                      </td>
                      <td>
                        <span className="preco-atual">
                          R$ {produto.precoAtual}
                        </span>{" "}
                        <span className="preco-promocional">
                          R$ {produto.precoPromocional}
                        </span>
                      </td>
                      <td>
                        <button className="acao-editar">Editar</button>
                        <button className="acao-excluir">Excluir</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Promocoes;
