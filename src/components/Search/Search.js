import './Search.css';
import '../AllMovies/AllMovies.css';
import AllMovies from '../AllMovies/AllMovies';
import PropTypes from 'prop-types';

function Search({ allMovies, showFocusMovie, search }) {
  const searchString = allMovies.filter(movie => {
    if (search) {
      return movie.title.includes(search);
    }
  });

  return (
    <div className="search">
      <div className="app-content-container">
        {searchString.length > 0 ? (
          <AllMovies allMovies={searchString} showFocusMovie={showFocusMovie} />
        ) : (
          <div className="empty-search">
            <p className="empty-search-text">No Movies Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;

Search.propTypes = {
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
