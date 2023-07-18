import { Suspense, lazy } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
// import HomePage from 'pages/HomePage/HomePage';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import MoviesPage from 'pages/MoviesPage/MoviesPage';
import Loader from './Loader/Loader';
import css from '../pages/HomePage/HomePage.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));

export const App = () => {
  return (
    <div>
      <header className={css.header}>
        <nav className={css.headerContainer}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main className={css.mainContainer}>
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
