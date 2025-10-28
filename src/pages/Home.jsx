import { useState, useEffect } from "react";
import Form from "../components/Form";
import { getPosts, deletePost } from "../api/services/postService";
import "../css/Home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postEmEdicao, setPostEmEdicao] = useState(null);

  async function buscarPosts() {
    try {
      const data = await getPosts();
      setPosts(data);
      setPostEmEdicao(null);
    } catch (error) {
      setError('Não foi possível carregar os posts');
    } finally {
      setLoading(false);
    }
  }

  async function removerPost(id) {
    try {
      await deletePost(id);

      const postsAtualizados = posts.filter(post => post.id !== id);
      setPosts(postsAtualizados);
    } catch (error) {
      console.error('Erro ao remover post:', error);
      setError('Não foi possível remover o post');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarPosts();
  }, []);

  if(loading) {
    return <div>Carregando...</div>;
  }

  if(error) {
    return <div>Erro ao carregar posts: {error}</div>;
  }

  return (
    <>
      <div>
          <Form 
            onPostCreated={buscarPosts} 
            postToEdit={postEmEdicao}
            onCancelEdit={() => setPostEmEdicao(null)}
          />

        <div className="posts-list">
          {posts.map(post => (
            <div key={post.id} className="post-card">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <div className="post-actions">
                <button 
                  onClick={() => setPostEmEdicao(post)}
                  className="edit-button"
                >
                  Editar
                </button>
                <button 
                  onClick={() => removerPost(post.id)}
                  className="delete-button"
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}