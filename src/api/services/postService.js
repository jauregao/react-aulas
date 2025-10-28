import { apiRequest } from "../apiRequest";

// Lista todos os posts
export function getPosts() {
  return apiRequest({ 
    method: "GET", 
    url: "/posts" 
  });
}

// Busca um post pelo ID
export function getPostById(id) {
  return apiRequest({
    method: "GET",
    url: `/posts/${id}`
  });
}

// Cria um novo post
export function createPost(postData) {
  const dados = {
    title: postData.title,
    body: postData.body,
    userid: postData.userid
  };

  return apiRequest({
    method: "POST",
    url: "/posts",
    body: dados,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

// Atualiza um post existente
export function updatePost(id, postData) {
  return apiRequest({
    method: "PUT",
    url: `/posts/${id}`,
    body: postData
  });
}

// Remove um post
export function deletePost(id) {
  return apiRequest({
    method: "DELETE",
    url: `/posts/${id}`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {} // Enviando um objeto vazio para evitar o erro de parsing
  })
}
