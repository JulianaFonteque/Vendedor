// PromocoesContext.js
import React, { createContext, useState, useContext } from "react";

export const PromocoesContext = createContext();

export const PromocoesProvider = ({ children }) => {
  const [promocoes, setPromocoes] = useState([]);

  const adicionarPromocao = (novaPromocao) => {
    setPromocoes((prevPromocoes) => [...prevPromocoes, novaPromocao]);
  };

  return (
    <PromocoesContext.Provider value={{ promocoes, adicionarPromocao }}>
      {children}
    </PromocoesContext.Provider>
  );
};

export const usePromocoes = () => useContext(PromocoesContext);
