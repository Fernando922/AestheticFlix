import React from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

export default function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Nova Categoria</h1>

      <Link to="/">
        Ir para a home
      </Link>
    </PageDefault>
  );
}
