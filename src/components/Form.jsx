import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    email: ""
  });
  const [erros, setErros] = useState({});

  function validar() {
    const novosErros = {};
    if (!form.nome) novosErros.nome = "Nome obrigatório";
    if (!form.email.includes("@")) novosErros.email = "Email inválido";
    setErros(novosErros);
  }

  function handleChange(e) {
    validar()
    setForm({ 
      ...form, 
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input 
        type="text"
        name="nome"
        placeholder="Digite seu nome"
        value={ form.nome }
        onChange={handleChange}
      />

      <input
        className={erros.email ? "input-erro" : ""}
        type="email" 
        name="email"
        placeholder="Digite seu email"
        value={ form.email }
        onChange={handleChange}
      />
        { erros.nome && (
            <p>{erros.nome}</p>
          )
        }
        {
          erros.email && 
          <p>{erros.email}</p>
        }
      <button disabled={erros.email || erros.nome} type="submit">Enviar</button>
    </form>
  )
}