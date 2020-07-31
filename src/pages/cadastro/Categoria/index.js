import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    cor: "#000000",
  };

  const [categorias, setCategorias] = useState([]);
  const [novaCategoria, setNovaCategoria] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setNovaCategoria({ ...novaCategoria, [chave]: valor });
  }

  function handleChange({ target }) {
    setValue(target.getAttribute("name"), target.value);
  }

  function handleSubmit(e) {
    console.log(novaCategoria);
    e.preventDefault();
    if (!novaCategoria.nome || !novaCategoria.descricao) {
      return alert("Preencha todos os campos!");
    }

    setCategorias([...categorias, novaCategoria]);
    setNovaCategoria(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {novaCategoria["nome"]}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="nome"
          label="Nome da Categoria:"
          value={novaCategoria.nome}
          onChange={handleChange}
        />

        <div>
          <label>Descrição</label>
          <textarea
            type="text"
            name="descricao"
            onChange={handleChange}
            value={novaCategoria["descricao"]}
          />
        </div>

        <FormField
          type="color"
          name="cor"
          label="Cor:"
          value={novaCategoria.cor}
          onChange={handleChange}
        />

        <button>Cadastrar</button>

        <ul>
          {categorias.map((categoria, index) => (
            <li
              key={index}
            >{`${categoria.nome} - ${categoria.descricao} - ${categoria.cor}`}</li>
          ))}
        </ul>
      </form>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
