import { auth } from "../../config/firebase.js";
import { signOut } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import css from "./Logout.module.css";

export default function Logout({ onLogout }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await signOut(auth);
      toast.success("User logged out!");
      setTimeout(() => {
        onLogout();
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error("ERROR:" + err.message);
    }
  };
  return (
    <div className={css.wrapper}>
      <Toaster position="top-center" reverseOrder={false} />
      <button type="submit" className={css.btnLogout} onClick={handleClick}>
        LogOut
      </button>
    </div>
  );
}
