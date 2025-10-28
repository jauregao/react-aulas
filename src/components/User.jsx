import { useEffect, useState } from "react"
import api from "../api/api";

export default function User() {

    const [usuario, setUsuario] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
      carregarUsuarios();
    }, [ ] );

    async function carregarUsuarios() {
      try {
        const response = await api('/posts');
        console.log(response.data)
        setUsuario(response.data);
      } catch (error) {
        setError("Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    }

  return (
    <>
      {error && <p>{error}</p>}
      
      {loading && <p>Carregando...</p>}

      {!loading && !error && (
        <div key={usuario.name}>
          <p>Id: {usuario.id}</p>
          <p>Nome: {usuario.name}</p>
        </div>
      )}
    </>
  )
}
