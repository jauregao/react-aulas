import { useLocation } from "react-router-dom";
import User from "../components/User"

export default function UserCard() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <User/>
    </>
  )
}
