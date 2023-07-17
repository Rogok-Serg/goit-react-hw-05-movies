import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>
            <Route path="/movies/:movieId/*" element={<MovieDetails />}></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
