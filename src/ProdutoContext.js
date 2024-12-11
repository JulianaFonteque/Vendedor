import React, { createContext, useState } from 'react';

export const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [produtos, setProdutos] = useState([]);

  const adicionarProduto = (novoProduto) => {
    setProdutos((prevProdutos) => [...prevProdutos, novoProduto]);
  };

  return (
    <ProdutoContext.Provider value={{ produtos, adicionarProduto }}>
      {children}
    </ProdutoContext.Provider>
  );
};
