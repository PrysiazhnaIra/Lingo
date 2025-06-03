import "./App.css";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader.js";
import PrivateRoute from "../../routes/PrivateRoute.js";
import { useAuth } from "../AuthProvider/AuthProvider.js";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.js"));
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage.js")
);
const TeachersPage = lazy(
  () => import("../../pages/TeachersPage/TeachersPage.js")
);
const FavoritesPage = lazy(
  () => import("../../pages/FavoritesPage/FavoritesPage.js")
);

function App() {
  const { isAuthenticated } = useAuth();
  return (
    <Suspense fallback={<Loader width="200" height="200" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
