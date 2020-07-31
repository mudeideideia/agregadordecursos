import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresInciais = {
    nome: '', // 'nome',
    descricao: '', // 'descrição',
    cor: '#000000',
  };

  const [values, setValues] = useState(valoresInciais);

  function UpdateValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleInputEvent(event) {
    // const { getAttribute, value } = event.target;
    const { value } = event.target;
    // UpdateValue(getAttribute('name'), value)
    UpdateValue(event.target.getAttribute('name'), value);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(event) {
        event.preventDefault();
        setCategorias([...categorias, values]);
        setValues(valoresInciais);
      }}
      >
        <FormField
          label="Nome da Categoria:"
          value={values.nome}
          name="nome"
          onChange={handleInputEvent}
        />
        <FormField
          label="Descrição:"
          type="textarea"
          value={values.descricao}
          name="descricao"
          onChange={handleInputEvent}
        />
        <FormField
          label="Cor:"
          type="color"
          value={values.cor}
          name="cor"
          onChange={handleInputEvent}
        />

        <button type="submit"> Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
            ,
            {categoria.descricao}
            {' '}
            e
            {categoria.cor}
          </li>
        ))}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
