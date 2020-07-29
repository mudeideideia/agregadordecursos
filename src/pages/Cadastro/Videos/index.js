import React from 'react';
import {Link} from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
// import ButtonLink from './components/ButtonLink';

function CadastroVideos({children}) {
  return (
    <PageDefault>
        <h1>Cadastro de Vídeos</h1>
        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>

  );
}

export default CadastroVideos;