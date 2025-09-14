import "./App.css";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import PrivateRoute from "../../routes/PrivateRoute";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const TeachersPage = lazy(
  () => import("../../pages/TeachersPage/TeachersPage")
);
const FavoritesPage = lazy(
  () => import("../../pages/FavoritesPage/FavoritesPage")
);
const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

function App() {
  return (
    <Suspense fallback={<Loader width="200" height="200" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
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
