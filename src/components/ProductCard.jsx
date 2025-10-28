import { useEffect, useState } from "react"

export default function ProductCard() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
      carregarUsuarios();
    }, []);

    async function carregarUsuarios() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsuarios(data);
      } catch (error) {
        setError("Erro ao buscar dados");
      } finally {
        setLoading(false);
      }
    }

  return (
    <>
      {
        (!loading && !error) ? usuarios.map( (usuario) => {
          return (
            <div key={usuario.id}>
              <p>Id: {usuario.id}</p>
              <p>Nome: {usuario.name}</p>
              <p>Username: {usuario.username}</p>
              <p>Cidade: {usuario.address.city}</p>
            </div>
          )
        }) :
          <p>{error}</p>
      }
      {
        !error && loading && <p>Carregando......</p>
      }
    </>
  )
}
