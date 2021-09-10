import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Home} from'./pages/Home/';
import {VisualizarCliente} from'./pages/Cliente/VisualizarCliente';
import {VisualizarServico} from'./pages/Servico/VisualizarServico';
import {VisualizarPedido} from'./pages/Pedido/VisualizarPedido';
import { Menu } from './components/Menu';
import { Servico } from './pages/Servico/Servico';
import { Cadastrar } from './pages/Servico/Cadastrar';
import { CadastrarCliente } from './pages/Cliente/Cadastrar';
import { CadastrarPedido } from './pages/Pedido/Cadastrar';
import { EditarServico } from './pages/Servico/Editar';
import { Pedido } from './pages/Pedido/Pedido';
import { Cliente } from './pages/Cliente/Cliente';
import { EditarPedido } from './pages/Pedido/Editar';
import { EditarCliente } from './pages/Cliente/Editar';

function App() {
  return (
    <div>
      <Menu/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/visualizarcliente" component={VisualizarCliente}/>
          <Route path="/visualizarservico" component={VisualizarServico}/>
          <Route path="/visualizarpedido" component={VisualizarPedido}/>
          <Route path="/servico/:id" component={Servico}/>
          <Route path="/pedido/:id" component={Pedido}/>
          <Route path="/cliente/:id" component={Cliente}/>
          <Route path="/cadastrarservico" component={Cadastrar}/>
          <Route path="/cadastrarcliente" component={CadastrarCliente}/>
          <Route path="/cadastrarpedido" component={CadastrarPedido}/>
          <Route path="/editarservico/:id" component={EditarServico}/>
          <Route path="/editarpedido/:id" component={EditarPedido}/>
          <Route path="/editarcliente/:id" component={EditarCliente}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
