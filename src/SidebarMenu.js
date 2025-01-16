import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação
import {
  FaHome,
  FaFileInvoiceDollar,
  FaBox,
  FaClock,
  FaTruck,
  FaCreditCard,
  FaPercent,
  FaTools,
  FaUser,
  FaChartLine,
  FaMedal,
  FaShoppingCart,
  FaQuestionCircle,
  FaGavel,
  FaCheckCircle, // Novo ícone importado
} from 'react-icons/fa';
import './SidebarMenu.css'; // Importa o CSS do menu

const SidebarMenu = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h3>Minha Loja</h3>
        <p className="status">Loja aberta</p>
        <p className="status-desc">Dentro do horário programado</p>
      </div>
      <nav className="menu">
        <ul>
          <li onClick={() => navigate('/produto')} className="menu-item">
            <FaHome className="icon" /> Início
          </li>
          
          <li onClick={() => navigate('/financeiro')} className="menu-item">
            <FaFileInvoiceDollar className="icon" /> Financeiro
          </li>
          <li onClick={() => navigate('/cardapio')} className="menu-item">
            <FaBox className="icon" /> Produtos
          </li>
          <li onClick={() => navigate('/horarios')} className="menu-item">
            <FaClock className="icon" /> Horários
          </li>
          <li onClick={() => navigate('/entrega')} className="menu-item">
            <FaTruck className="icon" /> Áreas de entrega
          </li>
          <li onClick={() => navigate('/pagamento')} className="menu-item">
            <FaCreditCard className="icon" /> Formas de pagamento
          </li>
          <li onClick={() => navigate('/promocoes')} className="menu-item">
            <FaPercent className="icon" /> Promoções
          </li>
          <li onClick={() => navigate('/servicos')} className="menu-item">
            <FaTools className="icon" /> Serviços
          </li>
          <li onClick={() => navigate('/perfil')} className="menu-item">
            <FaUser className="icon" /> Perfil
          </li>
          <li onClick={() => navigate('/desempenho')} className="menu-item">
            <FaChartLine className="icon" /> Desempenho
          </li>
         
          
          <li onClick={() => navigate('/ajuda')} className="menu-item">
            <FaQuestionCircle className="icon" /> ChamadoseAjuda
          </li>
          <li onClick={() => navigate('/politicas')} className="menu-item">
            <FaGavel className="icon" /> Políticas
          </li>
        </ul>
      </nav>
      <div className="footer">
        <p>minhaloja@gmail.com</p>
      </div>
    </aside>
  );
};

export default SidebarMenu;
