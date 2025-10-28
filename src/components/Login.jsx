import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("token", "usuario-falso-123");
    navigate("/meuapp/usuarios");
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
