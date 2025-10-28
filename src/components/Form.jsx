import { useState, useEffect } from "react";
import { createPost, updatePost } from "../api/services/postService";
import "../css/Form.css";

export default function Form({ onPostCreated, postToEdit, onCancelEdit }) {

  const [form, setForm] = useState({
    title: "",
    body: "",
    id: null
  });

  const [erros, setErros] = useState({});

  useEffect(() => {
    if (postToEdit) {
      setForm({
        title: postToEdit.title,
        body: postToEdit.body,
        id: postToEdit.id
      });
    } else {
      setForm({
        title: "",
        body: "",
        id: null
      });
      setErros({});
    }
  }, [postToEdit]);

  function validar(dados) {
    const novosErros = {};
    if (!dados.title) novosErros.title = "Título é obrigatório";
    if (!dados.body) novosErros.body = "Conteúdo é obrigatório";
    return novosErros;
  }

  function handleChange(e) {
    const novoForm = { 
      ...form, 
      [e.target.name]: e.target.value
    };
    setForm(novoForm);
    
    if (!e.target.value) {
      const errosValidacao = validar(novoForm);
      setErros(errosAntigos => ({
        ...errosAntigos,
        [e.target.name]: errosValidacao[e.target.name]
      }));
    } else {
      setErros(errosAntigos => ({
        ...errosAntigos,
        [e.target.name]: undefined
      }));
    }
  }

  async function handleSubmit(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const errosValidacao = validar(form);
    setErros(errosValidacao);
    
    if (Object.keys(errosValidacao).length > 0) {
      return;
    }

    try {
      const dadosPost = {
        title: form.title,
        body: form.body,
        userid: 1
      };

      let resultado;
      if (form.id) {
        resultado = await updatePost(form.id, dadosPost);
      } else {
        resultado = await createPost(dadosPost);
      }
      
      if (resultado) {
        setForm({ title: "", body: "", id: null });
        setErros({});
        onPostCreated && onPostCreated();
        if (form.id && onCancelEdit) {
          onCancelEdit();
        }
      }
    } catch (error) {
      console.error('Erro ao salvar post:', error);
      setErros(errosAntigos => ({
        ...errosAntigos,
        submit: `Erro ao ${form.id ? 'atualizar' : 'criar'} post. Tente novamente.`
      }));
    }
  }

  return (
    <div className="form-container">
      <div>
        <input 
          type="text"
          name="title"
          placeholder="Título do post"
          value={form.title}
          onChange={handleChange}
        />
        {erros.title && <p className="erro">{erros.title}</p>}
      </div>

      <div>
        <textarea
          name="body"
          placeholder="Conteúdo do post"
          value={form.body}
          onChange={handleChange}
          rows={4}
        />
        {erros.body && <p className="erro">{erros.body}</p>}
      </div>

      {erros.submit && <p className="erro">{erros.submit}</p>}
      
      <div className="form-buttons">
        <button 
          type="button"
          onClick={handleSubmit}
          disabled={!form.title || !form.body}
        >
          {form.id ? 'Atualizar Post' : 'Criar Post'}
        </button>
        {form.id && (
          <button 
            type="button"
            onClick={onCancelEdit}
            className="cancel-button"
          >
            Cancelar
          </button>
        )}
      </div>
    </div>
  )
}