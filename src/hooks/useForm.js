import { useState } from "react";

function useForm(valoresIniciais) {
  //pode ser reutilizado em outro formulario
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({ ...values, [chave]: valor });
  }

  function handleChange({ target }) {
    setValue(target.getAttribute("name"), target.value);
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    clearForm,
    handleChange,
    values,
  };
}

export default useForm;
