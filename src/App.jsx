import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./layout/Header";
import SearchPage from "@components/pages/SearchPage";
const HomePage = lazy(() => import("./components/pages/HomePage"));
const MovieDetailPage = lazy(
  () => import("./components/pages/MovieDetailPage"),
);
const PersonDetailPage = lazy(
  () => import("@components/pages/PersonDetailPage"),
);
const MoviePage = lazy(() => import("@components/pages/MoviePage"));
const TVShowPage = lazy(() => import("@components/pages/TVShowPage"));
const TvShowDetailPage = lazy(
  () => import("@components/pages/TVShowDetailPage"),
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviePage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/tv-shows" element={<TVShowPage />} />
            <Route path="/tv-shows/:id" element={<TvShowDetailPage />} />
            <Route path="/people/:id" element={<PersonDetailPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
