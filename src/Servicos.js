import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProdutoContext } from './ProdutoContext'; // Contexto para acessar produtos
import SidebarMenu from './SidebarMenu'; // Importa o menu reutilizável
import './Cardapio.css';

const Cardapio = () => {
  const navigate = useNavigate(); // Hook para navegação
  const { produtos } = useContext(ProdutoContext); // Obtém os produtos do contexto

  const handleAddProduct = () => {
    navigate('/novoproduto'); // Redireciona para a tela NovoProduto
  };

  return (
    <div className="cardapio-container">
      {/* Sidebar Menu */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <div className="cardapio-main">
        {/* Cabeçalho */}
        <header className="cardapio-header">
          <button className="back-button" onClick={() => navigate(-1)}>
            ← Voltar
          </button>
          <div>
            <h1>Serviços</h1>
            <p>
              {produtos.length} {produtos.length === 1 ? 'item cadastrado' : 'itens cadastrados'}
            </p>
          </div>
        </header>

        {/* Barra de Ações */}
        <div className="cardapio-actions">
          <input
            type="text"
            placeholder="Serviço ou Código do Serviço"
            className="search-input"
          />
          
          <button className="action-button">Categorias de Serviços</button>
          <button className="action-button">Exportar</button>
          <button className="add-product-button" onClick={handleAddProduct}>
            + Seviços
          </button>
        </div>

        {/* Conteúdo */}
        <div className="cardapio-content">
          {produtos.length === 0 ? (
            <div className="empty-state">
              <img
                src="/path/to/empty-state-image.png" // Substituir pelo caminho correto da imagem
                alt="Sem Serviços"
                className="empty-state-image"
              />
              <p>Nenhum Serviço cadastrado.</p>
            </div>
          ) : (
            <table className="product-table">
              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Produto</th>
                  <th>Categoria</th>
                  <th>Preço</th>
                  <th>Estoque</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto, index) => (
                  <tr key={index}>
                    <td>
                      {produto.imagens && produto.imagens.length > 0 ? (
                        <img
                          src={URL.createObjectURL(produto.imagens[0])}
                          alt={produto.nome}
                          className="product-image"
                        />
                      ) : (
                        <span>Sem imagem</span>
                      )}
                    </td>
                    <td>{produto.nome}</td>
                    <td>{produto.categoria}</td>
                    <td>R$ {produto.precoVenda}</td>
                    <td>{produto.estoqueAtual}</td>
                    <td>
                      <button className="product-action-button">Editar</button>
                      <button className="product-action-button product-delete-button">Excluir</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cardapio;
