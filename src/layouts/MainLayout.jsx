import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar/>
      <main>
        <Outlet />
      </main>
    </>
  )
}