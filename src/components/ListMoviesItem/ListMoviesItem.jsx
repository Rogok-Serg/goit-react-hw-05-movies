import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './ListMoviesItem.module.css';

const ListMoviesItem = ({ movie }) => {
  const location = useLocation();

  const { id, poster_path, title } = movie;
  return (
    <Link
      state={{ from: location }}
      className={css.itemMovie}
      to={`/movies/${id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
        width="360"
      />
      <h4 className={css.title}> {title}</h4>
    </Link>
  );
};
ListMoviesItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default ListMoviesItem;
