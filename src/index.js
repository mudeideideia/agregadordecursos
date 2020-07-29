import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import CadastroVideos from './pages/Cadastro/Videos'
import CadastroCategoria from './pages/Cadastro/Categoria'

const rota = () => {
  return (
    <h1> Rota alternativa</h1>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/rota" component={rota} />
    <Route path="/cadastro/videos" component={CadastroVideos} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route  component={() => <h1>Page 404</h1>} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
