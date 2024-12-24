import "./App.css";
import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader.jsx";

const HomePage = lazy(() =>
  import("../../pages/HomePage/HomePage.jsx/HomePage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <Suspense fallback={<Loader width="200" height="200" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
