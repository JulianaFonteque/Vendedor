import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProdutoContext } from './ProdutoContext'; // Importa o contexto
import SidebarMenu from './SidebarMenu'; // Importa o componente SidebarMenu
import './CadastroProduto.css';

const CadastroProduto = () => {
  const navigate = useNavigate(); // Instancia o hook para navegação
  const { produtos } = useContext(ProdutoContext); // Acessa os produtos do contexto

  return (
    <div className="cadastro-produto-container">
      {/* Sidebar Menu */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <main className="content">
        <header className="header">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
        </header>
        <div className="main-content">
          <h1>Seus Novos Pedidos Aparecerão Aqui!</h1>

          {/* Lista de Produtos */}
          <div className="produto-list">
            {produtos.length === 0 ? (
              <p>Nenhum novo pedido.</p>
            ) : (
              produtos.map((produto, index) => (
                <div key={index} className="produto-item">
                  <h3>{produto.nome}</h3>
                  <p>Categoria: {produto.categoria}</p>
                  <p>Preço: R$ {produto.precoVenda}</p>
                  <p>Estoque: {produto.estoqueAtual}</p>
                  <p>Dimensões: {produto.dimensoes}</p>
                  {produto.descricao && <p>Descrição: {produto.descricao}</p>}

                  {/* Imagens do Produto */}
                  <div className="produto-imagens">
                    {produto.imagens &&
                      produto.imagens.map((img, i) => (
                        <img
                          key={i}
                          src={URL.createObjectURL(img)}
                          alt={`Imagem do produto ${produto.nome} ${i}`}
                          className="produto-imagem"
                        />
                      ))}
                  </div>

                  {/* Vídeo do Produto */}
                  {produto.video && (
                    <div className="produto-video">
                      <video controls>
                        <source src={URL.createObjectURL(produto.video)} type="video/mp4" />
                        Seu navegador não suporta a reprodução de vídeos.
                      </video>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CadastroProduto;
