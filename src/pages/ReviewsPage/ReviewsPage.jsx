import ReviewsList from 'components/ReviewsList/ReviewsList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { onFetchMoviesDetalis } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const apiReviews = `/movie/${movieId}/reviews`;

  // const apiDataMovie = `/movie/${movieId}`;
  const [movieReviews, setMovieReviews] = useState([]);

  const [errorMes, setError] = useState(null);
  // const [page, setPage] = 1;

  useEffect(() => {
    if (!movieId) return;
    const dataMovies = async () => {
      try {
        const data = await onFetchMoviesDetalis(apiReviews);
        // const { reviews } = data;
        setMovieReviews(data.results);
        console.log(movieReviews);
      } catch (error) {
        setError(error.message);
        alert('ERROR:', errorMes);
      }
    };
    dataMovies();
  }, []);
  return (
    <div>
      {movieReviews === [] ? (
        <div>
          <p>Not Movies</p>
        </div>
      ) : (
        <ReviewsList reviews={movieReviews} />
      )}
    </div>
  );
};

export default Reviews;
