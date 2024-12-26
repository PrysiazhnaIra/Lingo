import { useParams } from "react-router";
import Registration from "../../components/Home/Header/Registration/Registration.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import Login from "../../components/Home/Header/Login/Login.jsx";

export default function AuthPage() {
  const { id } = useParams();
  return (
    <>
      {id === "login" ? (
        <Login />
      ) : id === "register" ? (
        <Registration />
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
