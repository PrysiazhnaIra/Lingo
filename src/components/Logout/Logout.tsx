import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import css from "./Logout.module.css";

type LogoutProps = {
  onLogout: () => void;
};
export default function Logout({ onLogout }: LogoutProps) {
  const navigate = useNavigate();
  const handleClick = async () => {
    try {
      await signOut(auth);
      toast.success("User logged out!");
      setTimeout(() => {
        onLogout();
        navigate("/");
      }, 2000);
    } catch (err: any) {
      toast.error("ERROR:" + err.message);
      console.log("my error logout", err);
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
