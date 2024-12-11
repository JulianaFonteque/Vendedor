import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SidebarMenu from "./SidebarMenu"; // Menu lateral
import "./NovaPromocao.css"; // Estilos personalizados

const NovaPromocao = () => {
  const navigate = useNavigate();
  const [promocao, setPromocao] = useState({
    nome: "",
    dataInicio: "",
    dataFim: "",
  });

  const [produtos, setProdutos] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPromocao({ ...promocao, [name]: value });
  };

  const handleAddProduto = () => {
    setProdutos([...produtos, { nome: "", imagem: null, preview: null }]);
  };

  const handleProdutoChange = (index, field, value) => {
    const novosProdutos = [...produtos];
    if (field === "imagem") {
      const file = value.target.files[0];
      novosProdutos[index][field] = file;
      novosProdutos[index].preview = URL.createObjectURL(file); // Gera a URL de visualização
    } else {
      novosProdutos[index][field] = value;
    }
    setProdutos(novosProdutos);
  };

  const handleRemoveProduto = (index) => {
    const novosProdutos = produtos.filter((_, i) => i !== index);
    setProdutos(novosProdutos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promocao.nome || !promocao.dataInicio || !promocao.dataFim) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
    alert("Promoção criada com sucesso!");
    navigate("/promocoes"); // Voltar para a tela de promoções
  };

  return (
    <div className="nova-promocao-container">
      <SidebarMenu />

      <div className="nova-promocao-main">
        <h1>Criar nova Promoção</h1>
        <p>
          Preencha os detalhes da promoção e adicione os produtos para criar uma nova promoção.
        </p>

        <form onSubmit={handleSubmit} className="form-promocao">
          <div className="form-group">
            <label htmlFor="nome">Nome da promoção</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={promocao.nome}
              onChange={handleInputChange}
              placeholder="Ex: Promoção de Verão"
              required
            />
          </div>

          <div className="form-group">
            <label>Período da promoção</label>
            <div className="periodo">
              <input
                type="datetime-local"
                name="dataInicio"
                value={promocao.dataInicio}
                onChange={handleInputChange}
                required
              />
              <span> - </span>
              <input
                type="datetime-local"
                name="dataFim"
                value={promocao.dataFim}
                onChange={handleInputChange}
                required
              />
            </div>
            <p className="periodo-info">
              O horário de término deve ser maior que o horário de início em pelo menos uma hora.
            </p>
          </div>

          {/* Produtos */}
          <div className="produtos">
            <h2></h2>
            {produtos.map((produto, index) => (
              <div key={index} className="produto-item">
                <input
                  type="text"
                  placeholder="Nome do produto"
                  value={produto.nome}
                  onChange={(e) =>
                    handleProdutoChange(index, "nome", e.target.value)
                  }
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) =>
                    handleProdutoChange(index, "imagem", e)
                  }
                />
                {produto.preview && (
                  <img
                    src={produto.preview}
                    alt="Pré-visualização do Produto"
                    className="produto-imagem-preview"
                  />
                )}
                <button
                  type="button"
                  className="remove-produto"
                  onClick={() => handleRemoveProduto(index)}
                >
                  Remover
                </button>
              </div>
            ))}
            <button
              type="button"
              className="add-produto"
              onClick={handleAddProduto}
            >
              + Adicionar Produto
            </button>
          </div>

          <button type="submit" className="salvar-button">
            Salvar e Continuar
          </button>
        </form>
      </div>
    </div>
  );
};

export default NovaPromocao;
