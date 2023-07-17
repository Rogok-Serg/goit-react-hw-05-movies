import PropTypes from 'prop-types';
const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(el => {
        const { id, name, profile_path } = el;
        return (
          <li key={id}>
            {' '}
            <img
              src={`https://image.tmdb.org/t/p/w300${profile_path}`}
              alt={name}
              width={200}
            />
            <p>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};
CastList.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default CastList;
