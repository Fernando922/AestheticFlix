import React, { useEffect, useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link, useHistory } from "react-router-dom";
import useForm from "../../../hooks/useForm";
import FormField from "../../../components/FormField";
import Button from "../../../components/Button";
import videosRepository from "../../../repositories/videos";
import categoriasRepository from "../../../repositories/categorias";

export default function CadastroVideo() {
  const { handleChange, values } = useForm({
    titulo: "Vídeo Padrao",
    url: "https://www.youtube.com/watch?v=oxl9UpmWYO8&feature=emb_title",
    categoria: "",
  });
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);

  function handleSubmit(e) {
    e.preventDefault();

    const categoriaEscolhida = categorias.find((categoria) => {
      return categoria.titulo === values.categoria;
    });

    if (!categoriaEscolhida) {
      return alert("Categoria não encontrada!");
    }

    console.log({
      titulo: values.titulo,
      url: values.url,
      categoriaId: categoriaEscolhida.id,
    });

    videosRepository
      .create({
        titulo: values.titulo,
        url: values.url,
        categoriaId: categoriaEscolhida.id,
      })
      .then(() => {
        history.push("/");
      });
  }

  useEffect(() => {
    categoriasRepository.getAll().then(setCategorias);
  }, []);

  return (
    <PageDefault>
      <h1>Novo vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}
