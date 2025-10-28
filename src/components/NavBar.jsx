import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/"
        className={({ isActive }) => isActive ? "ativo" : ""}
      >Início</NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "ativo" : ""}
      to="/usuarios">Usuarios</NavLink>
    </nav>

  )
}