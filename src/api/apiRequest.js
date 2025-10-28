import api from "./api";

export async function apiRequest({ method, url, body = null, headers = {} }) {
  try {
    const response = await api.request({
      method,
      url,
      data: body,
      headers,
    });

    return response.data;
  } catch (error) {
    console.error("Erro na requisição:", error);
    throw error;
  }
}
