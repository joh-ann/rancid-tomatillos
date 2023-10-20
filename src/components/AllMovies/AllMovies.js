import Card from '../Card/Card';
import './AllMovies.css';
import PropTypes from 'prop-types';

function AllMovies({ allMovies, showFocusMovie }) {
  const movieCards = allMovies.map(movie => {
    const year = movie.release_date.slice(0, 4); // get year only

    return (
      <Card
        id={movie.id}
        key={movie.id}
        poster_path={movie.poster_path}
        title={movie.title}
        release_date={year}
        average_rating={movie.average_rating}
        showFocusMovie={showFocusMovie}
      />
    );
  });
  return <div className="all-movies-container">{movieCards}</div>;
}

export default AllMovies;

AllMovies.propTypes = {
  allMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ),
  showFocusMovie: PropTypes.func,
};
