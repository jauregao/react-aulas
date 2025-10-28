import { Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import Home from "../pages/Home";
import UserCard from "../pages/User";
import Users from "../pages/Users";
import MainLayout from "../layouts/MainLayout";
import { PublicRoute } from "./PublicRoute";

export function AppRoutes() {
  return (
        <Routes>
          <Route path="/meuapp">

          <Route element={             
            <PublicRoute>
              <MainLayout/>
            </PublicRoute>
          }>
              <Route path="home" element={<Home/>} />
          </Route>

          <Route element={
            <PrivateRoutes>
              <MainLayout/>
            </PrivateRoutes>
          }>
              <Route path="usuario/:id" element={<UserCard/>} />
              <Route path="usuarios" element={<Users/>} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to='/meuapp/home'/>} />
      </Routes>
  );
}
