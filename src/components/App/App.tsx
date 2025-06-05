import "./App.css";
import { Route, Routes } from "react-router";
import { Suspense } from "react";

import HomePage from "../../pages/HomePage/HomePage";
import TeachersPage from "../../pages/TeachersPage/TeachersPage";
import PrivateRoute from "../../routes/PrivateRoute";
import FavoritesPage from "../../pages/FavoritesPage/FavoritesPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import Loader from "../Loader/Loader";

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
