import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import useForm from "../../../hooks/useForm";

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: "",
    descricao: "",
    cor: "#000000",
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.titulo || !values.descricao) {
      return alert("Preencha todos os campos!");
    }

    setCategorias([...categorias, values]);
    clearForm();
  }

  useEffect(() => {
    const URL = window.location.hostname.includes("localhost")
      ? "http://localhost:4000/categorias"
      : "https://aesthetic-flix.herokuapp.com/categorias";
    fetch(URL)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => setCategorias([...res]));
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.titulo}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="titulo"
          label="Nome da Categoria"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="descrição"
          type="textarea"
          name="descricao"
          onChange={handleChange}
          value={values.descricao}
        />

        <FormField
          type="color"
          name="cor"
          label="Cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>

        {!categorias.length && <div>Loading...</div>}

        <ul>
          {categorias.map((categoria, index) => (
            <li key={index}>{`${categoria.titulo}`}</li>
          ))}
        </ul>
      </form>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
