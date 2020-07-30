import React, {useState} from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([])

  const valoresInciais = {
    nome: '', //'nome',
    descricao: '', //'descrição',
    cor: '#000000'
  }

  const [values, setValues] = useState(valoresInciais)
 
  function UpdateValue(chave, valor){
    setValues({
      ...values,
      [chave]: valor
    })
  }

  function handleInputEvent(event) {
    // const { getAttribute, value } = event.target;
    const { value } = event.target;
    // UpdateValue(getAttribute('name'), value)
    UpdateValue(event.target.getAttribute('name'), value)
  }


  return (
    <PageDefault>
        <h1>Cadastro de Categoria</h1>

        <form onSubmit = { function handleSubmit(event){
          event.preventDefault();
          setCategorias([...categorias, values])
          setValues(valoresInciais)
        }}>
          {/* <label> Nome da Categoria: {values.nome}<br/></label>
          <input 
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleInputEvent}
          />
          <label> Descrição:</label>
          <br/>
          <textarea
            type="text" 
            name="descricao"
            value={values.descricao}
            onChange={handleInputEvent}
          />
          <br/>
          <input 
            type="color" 
            name="cor"
            value={values.cor}
            onChange={handleInputEvent}
          />
          <br/> */}
          <FormField 
            label="Nome da Categoria:"
            value={values.cor}
            onChange={handleInputEvent}
          />
          <FormField 
            label="Descrição:"
            type="textarea"
            value={values.descricao}
            onChange={handleInputEvent}
          />
          <FormField 
            label="Cor:"
            type="color"
            value={values.cor}
            onChange={handleInputEvent}
          />

          <button> Cadastrar</button>
        </form>

        <ul>
          {categorias.map((categoria, index) => (
            <li key={`${categoria.nome}-${index}`}>
              {categoria.nome}, {categoria.descricao} e {categoria.cor}
            </li>
          ))}
        </ul>

        <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;