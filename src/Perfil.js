import React, { useState } from 'react';
import './Perfil.css';
import SidebarMenu from './SidebarMenu';

const Perfil = () => {
  const [logo, setLogo] = useState(null);

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(URL.createObjectURL(file));
    }
  };

  return (
    <div className="perfil-layout"> {/* Layout geral com Sidebar */}
      {/* Sidebar */}
      <SidebarMenu />

      {/* Conteúdo principal */}
      <div className="perfil-container">
        <h1>Minha Loja</h1>

        {/* Seção da Logo */}
        <div className="logo-section">
          <label htmlFor="logo-upload" className="logo-placeholder">
            {logo ? (
              <img src={logo} alt="Logo da Loja" className="logo-preview" />
            ) : (
              <span>SUA LOGO AQUI</span>
            )}
          </label>
          <input
            type="file"
            id="logo-upload"
            accept="image/*"
            onChange={handleLogoUpload}
            style={{ display: 'none' }}
          />
        </div>

        {/* Formulário */}
        <form className="perfil-form">
          <label>
            <strong>Nome da Loja</strong>
            <input type="text" placeholder="Nome da sua loja" required />
          </label>

          <label>
            <strong>E-mail</strong>
            <input type="email" placeholder="exemplo@loja.com" required />
          </label>

          <label>
            <strong>Endereço</strong>
            <input type="text" placeholder="Rua, número, bairro, cidade" required />
          </label>

          <label>
            <strong>Telefone de Contato</strong>
            <input type="tel" placeholder="(41) 99999-9999" />
          </label>


          {/* Categoria */}
        <label>
          <strong>Categoria</strong>
          <select>
            <option value="Vestuario">Vestuário</option>
            <option value="Calcados">Calçados</option>
            <option value="Presentes">Presentes</option>
            <option value="Eletronicos">Eletronicos</option>
            <option value="CamaMesaBanho">Cama, Mesa e Banho</option>
            <option value="Brinquedos">Brinquedos</option>
            <option value="Beleza e Saude">Beleza e Saúde</option>
            <option value="Outros">Outros</option>
          </select>
        </label>

        {/* Descrição */}
        <label>
          <strong>Descrição</strong>
          <textarea rows="4" placeholder="Descreva sua loja aqui"></textarea>
        </label>

          <button type="submit">Salvar Configurações</button>
        </form>
      </div>
    </div>
  );
};

export default Perfil;
