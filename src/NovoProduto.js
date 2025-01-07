import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação
import { ProdutoContext } from './ProdutoContext'; // Importa o contexto
import SidebarMenu from './SidebarMenu'; // Importa o menu lateral
import './NovoProduto.css';

const NovoProduto = () => {
  const navigate = useNavigate(); // Hook para navegação
  const { adicionarProduto } = useContext(ProdutoContext); // Usa o contexto para adicionar produtos
  const [produto, setProduto] = useState({
    nome: '',
    precoVenda: '',
    dimensoes: '', // Campo de dimensões
    categoria: '',
    etiqueta: '',
    descricao: '',
    codigoProduto: '',
    custo: '',
    unidade: '',
    estoqueAtual: '',
    estoqueMinimo: '',
    gerenciarEstoque: false,
    imagens: [],
  });

  const [fotos, setFotos] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const toggleGerenciarEstoque = () => {
    setProduto((prevState) => ({
      ...prevState,
      gerenciarEstoque: !prevState.gerenciarEstoque,
    }));
  };

  const handleFotosChange = (e) => {
    const files = Array.from(e.target.files);
    const newFotos = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFotos((prevFotos) => [...prevFotos, ...newFotos]);
  };

  const handleRemoveFoto = (index) => {
    setFotos((prevFotos) => prevFotos.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dadosProduto = {
      ...produto,
      imagens: fotos.map((foto) => foto.file), // Adiciona as imagens ao produto
    };
    adicionarProduto(dadosProduto); // Salva o produto no contexto
    alert('Produto cadastrado com sucesso!');
    navigate('/cardapio'); // Navega para a tela produto após o cadastro
  };

  const handleVoltar = () => {
    navigate('/cardapio'); // Navega para a tela ptoduto
  };

  return (
    <div className="novo-produto-container">
      {/* Sidebar Menu */}
      <SidebarMenu />

      {/* Conteúdo Principal */}
      <div className="produto-main">
        {/* Botão Voltar */}
        <div className="voltar-container">
          <button className="voltar-button" onClick={handleVoltar}>
            ← Voltar
          </button>
        </div>

        {/* Coluna Esquerda */}
        <div className="produto-detalhes">
          <div className="produto-label">
            <h3></h3>
            <p>{produto.nome || 'Nome do Produto'}</p>
            <p>R$ {produto.precoVenda || '0,00'}</p>
          </div>

          <div className="produto-opcoes">
            <button>Cor da etiqueta</button>
          </div>

          <form onSubmit={handleSubmit} className="produto-form">
            <input
              type="text"
              name="nome"
              placeholder="Nome do Produto"
              value={produto.nome}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="precoVenda"
              placeholder="Preço de Venda"
              value={produto.precoVenda}
              onChange={handleChange}
              required
            />
        
            <input
              type="text"
              name="dimensoes"
              placeholder="Dimensões (ex: 10x20x30)"
              value={produto.dimensoes}
              onChange={handleChange}
            />
            <select
              name="categoria"
              value={produto.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione uma Categoria</option>
              <option value="Eletronicos">Eletrônicos</option>
              <option value="Eletrodomésticos">Eletrodomésticos</option>
              <option value="Vestuário">Vestuário</option>
              <option value="Calçados">Calçados</option>
              <option value="Beleza e Saúde">Beleza e Saúde</option>
              <option value="Ótica">Ótica</option>
              <option value="Floricultura">Floricultura</option>
              <option value="Livraria e Papelaria">Livraria e Papelaria</option>
              <option value="Cama, Mesa e Banho">Cama, Mesa e Banho</option>
              <option value="Brinquedos">Brinquedos</option>
            </select>
            <input
              type="text"
              name="etiqueta"
              placeholder="Nome da etiqueta"
              value={produto.etiqueta}
              onChange={handleChange}
            />
            <textarea
              name="descricao"
              placeholder="Descrição"
              value={produto.descricao}
              onChange={handleChange}
            />
            <input
              type="text"
              name="codigoProduto"
              placeholder="Código do produto"
              value={produto.codigoProduto}
              onChange={handleChange}
            />
            <input
              type="number"
              name="custo"
              placeholder="Custo"
              value={produto.custo}
              onChange={handleChange}
            />
            <select
              name="unidade"
              value={produto.unidade}
              onChange={handleChange}
            >
              <option value="">Vender por</option>
              <option value="Unidade">Unidade</option>
              <option value="Peso">Peso</option>
            </select>

            {/* Upload de Fotos */}
            <div className="form-group">
              <label htmlFor="fotos">Fotos do Produto</label>
              <input
                type="file"
                id="fotos"
                accept="image/*"
                multiple
                onChange={handleFotosChange}
              />
              <div className="foto-preview-container">
                {fotos.map((foto, index) => (
                  <div key={index} className="foto-preview">
                    <img src={foto.preview} alt={`Foto ${index}`} />
                    <button
                      type="button"
                      className="remove-foto"
                      onClick={() => handleRemoveFoto(index)}
                    >
                      Remover
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit">Salvar Produto</button>
          </form>
        </div>

        {/* Coluna Direita */}
        <div className="estoque-configuracoes">
          <h3>Estoque</h3>
          <label>
            <input
              type="checkbox"
              checked={produto.gerenciarEstoque}
              onChange={toggleGerenciarEstoque}
            />
            Gerenciar estoque
          </label>
          {produto.gerenciarEstoque && (
            <>
              <input
                type="number"
                name="estoqueAtual"
                placeholder="Estoque atual"
                value={produto.estoqueAtual}
                onChange={handleChange}
              />
              <input
                type="number"
                name="estoqueMinimo"
                placeholder="Estoque mínimo"
                value={produto.estoqueMinimo}
                onChange={handleChange}
              />
            </>
          )}
          <h4>Histórico de movimentações</h4>
          <button>Exibir resultados</button>
        </div>
      </div>
    </div>
  );
};

export default NovoProduto;
