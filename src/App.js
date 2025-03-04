import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProdutoProvider } from './ProdutoContext'; // Importa o contexto Produto
import { PromocoesProvider } from './PromocoesContext'; // Importa o contexto Promoções
import CadastroLoja from './CadastroLoja'; // Tela CadastroLoja
import CadastroDetalhes from './CadastroDetalhes'; // Tela CadastroDetalhes
import CadastroFinal from './CadastroFinal'; // Tela CadastroFinal
import CadastroProduto from './CadastroProduto'; // Tela CadastroProduto
import Cardapio from './Cardapio'; // Tela Cardapio
import NovoProduto from './NovoProduto'; // Tela NovoProduto
import Horarios from './Horarios'; // Tela Horários
import AreasEntrega from './AreasEntrega'; // Tela Áreas de Entrega
import FormaPagamento from './FormaPagamento'; // Tela Formas de Pagamento
import Promocoes from './Promocoes'; // Tela Promoções
import NovaPromocao from './NovaPromocao'; // Tela Nova Promoção
import Perfil from './Perfil'; // Tela Perfil
import Desempenho from './Desempenho';
import Financeiro from './Financeiro';
import ChamadoseAjuda from './ChamadoseAjuda';
import Servicos from './Servicos';

function App() {
  return (
    <ProdutoProvider>
      <PromocoesProvider>
        <Router>
          <Routes>
            {/* Rotas principais */}
            <Route path="/" element={<CadastroLoja />} />
            <Route path="/detalhes" element={<CadastroDetalhes />} />
            <Route path="/final" element={<CadastroFinal />} />
            <Route path="/cadastro-produto" element={<CadastroProduto />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/novoproduto" element={<NovoProduto />} />
            <Route path="/horarios" element={<Horarios />} />
            <Route path="/entrega" element={<AreasEntrega />} />
            <Route path="/pagamento" element={<FormaPagamento />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/nova-promocao" element={<NovaPromocao />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/desempenho" element={<Desempenho />} />
            <Route path="/produto" element={<CadastroProduto />} />
            <Route path="/financeiro" element={<Financeiro />} />
            <Route path="/ajuda" element={<ChamadoseAjuda />} />
            <Route path="/servicos" element={<Servicos />} />


            {/* Rotas adicionais */}
            <Route path="/financeiro" element={<div>Financeiro</div>} />
            
            
            <Route path="/conquistas" element={<div>Conquistas</div>} />
            <Route path="/ifoodshop" element={<div>JA Shop</div>} />
            
            <Route path="/politicas" element={<div>Políticas</div>} />
          </Routes>
        </Router>
      </PromocoesProvider>
    </ProdutoProvider>
  );
}

export default App;
