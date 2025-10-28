import { Navigate } from "react-router-dom";

export function PrivateRoutes({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/meuapp/home" />;
  }

  return children;
}
