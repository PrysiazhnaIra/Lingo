import "modern-normalize";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App.js";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./components/AuthProvider/AuthProvider.js";

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);
