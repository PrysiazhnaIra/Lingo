import "./App.css";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader.jsx";
import PrivateRoute from "../../routes/PrivateRoute.jsx";
import { useAuth } from "../AuthProvider/AuthProvider.jsx";

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
