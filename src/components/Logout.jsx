import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/meuapp/home");
  }

  return (
    <div>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
