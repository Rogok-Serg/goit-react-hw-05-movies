import CastList from 'components/CastList/CastList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchMoviesDetalis } from 'service/api';

const Cast = () => {
  const { movieId } = useParams();
  const apiCredits = `/movie/${movieId}/credits`;

  // const apiDataMovie = `/movie/${movieId}`;
  const [movieCredits, setMovieCredits] = useState([]);

  const [errorMes, setError] = useState(null);
  // const [page, setPage] = 1;

  useEffect(() => {
    if (!movieId) return;
    const dataMovies = async () => {
      try {
        const data = await onFetchMoviesDetalis(apiCredits);
        const { cast } = data;
        setMovieCredits(cast);
        console.log(movieCredits);
      } catch (error) {
        setError(error.message);
        alert('ERROR:', errorMes);
      }
    };
    dataMovies();
  }, []);
  return (
    <div>
      {!movieCredits ? (
        <div>
          <p>Not Movies</p>
        </div>
      ) : (
        <CastList cast={movieCredits} />
      )}
    </div>
  );
};

export default Cast;
