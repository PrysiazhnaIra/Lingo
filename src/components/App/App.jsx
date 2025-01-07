import "./App.css";
import { Route, Routes } from "react-router";
import { lazy, Suspense, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import { Analytics } from "@vercel/analytics/react";
import { analytics } from "../../config/firebase";
import { logEvent } from "firebase/analytics";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);
const TeachersPage = lazy(() =>
  import("../../pages/TeachersPage/TeachersPage.jsx")
);
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage.jsx")
);

function App() {
  useEffect(() => {
    logEvent(analytics, "page_view");
  }, []);

  return (
    <Suspense fallback={<Loader width="200" height="200" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <Analytics />
    </Suspense>
  );
}

export default App;
