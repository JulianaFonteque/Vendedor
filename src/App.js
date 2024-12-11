import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProdutoProvider } from './ProdutoContext'; // Importa o contexto
import CadastroLoja from './CadastroLoja'; // Tela CadastroLoja
import CadastroDetalhes from './CadastroDetalhes'; // Tela CadastroDetalhes
import CadastroFinal from './CadastroFinal'; // Tela CadastroFinal
import CadastroProduto from './CadastroProduto'; // Tela CadastroProduto
import Cardapio from './Cardapio'; // Tela Cardapio
import NovoProduto from './NovoProduto'; // Tela NovoProduto
import Horarios from './Horarios';
import AreasEntrega from './AreasEntrega'; // Importa o componente
import FormaPagamento from './FormaPagamento'; // Importa o componente
import Promocoes from './Promocoes'; // Tela Promoções
import NovaPromocao from './NovaPromocao'; // Substitua pelo caminho correto
import { PromocoesProvider } from "./PromocoesContext"; // Importa o contexto

function App() {
  return (
    <ProdutoProvider>
      <Router>
        <Routes>
          {/* Rotas Configuradas */}
          <Route path="/" element={<CadastroLoja />} />
          <Route path="/detalhes" element={<CadastroDetalhes />} />
          <Route path="/final" element={<CadastroFinal />} />
          <Route path="/produto" element={<CadastroProduto />} />
          <Route path="/cardapio" element={<Cardapio />} />
          <Route path="/novoproduto" element={<NovoProduto />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/entrega" element={<AreasEntrega />} />
          <Route path="/pagamento" element={<FormaPagamento />} />
          <Route path="/promocoes" element={<Promocoes />} />
          <Route path="/nova-promocao" element={<NovaPromocao />} />

          

          {/* Exemplos de Rotas Adicionais */}
          <Route path="/financeiro" element={<div>Financeiro</div>} />
          
          <Route path="/pagamento" element={<div>Formas de pagamento</div>} />
          
          <Route path="/servicos" element={<div>Serviços</div>} />
          <Route path="/perfil" element={<div>Perfil</div>} />
          <Route path="/desempenho" element={<div>Desempenho</div>} />
          <Route path="/conquistas" element={<div>Conquistas</div>} />
          <Route path="/ifoodshop" element={<div>JA Shop</div>} />
          <Route path="/ajuda" element={<div>Chamados e ajuda</div>} />
          <Route path="/politicas" element={<div>Políticas</div>} />
        </Routes>
      </Router>
    </ProdutoProvider>
  );
}



export default App;
