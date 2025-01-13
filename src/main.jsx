import "modern-normalize";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.jsx";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./components/AuthProvider/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
