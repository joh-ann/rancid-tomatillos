import './FocusMovie.css';
import PropTypes from 'prop-types';

function FocusMovie({ focusMovie, customStyles, trailerKey }) {
  const movieDetails = focusMovie.map(movie => {
    customStyles.content.backgroundImage = `url(${movie.backdrop_path})`;

    const movieGenres = movie.genres.map((genre, index) => (
      <div key={index} className="genre">
        {genre}
        {index < movie.genres.length - 1 && <>,&nbsp;</>}
      </div>
    ));

    // rating icon
    let ratingIcon;
    if (movie.average_rating >= 5) {
      ratingIcon = '🍅';
    } else {
      ratingIcon = '🦠';
    }

    // budget & revenue
    let budgetAmt;
    let revenueAmt;

    if (movie.budget === 0) {
      budgetAmt = 'N/A';
    } else {
      budgetAmt = `$${movie.budget}`;
    }
    if (movie.revenue === 0) {
      revenueAmt = 'N/A';
    } else {
      revenueAmt = `$${movie.revenue}`;
    }

    // runtime
    const totalMins = movie.runtime;
    const hours = Math.floor(totalMins / 60);
    const remainingMins = totalMins % 60;

    const runTime = `${hours}h ${remainingMins}m`;

    return (
      <div className="selected-movie">
        <img
          src={movie.poster_path}
          className="selected-movie-img"
          alt={movie.title}
        />
        <div className="selected-movie-content">
          <iframe
            title="youtube movie trailer"
            className="selected-movie-trailer"
            width="92%"
            height="400px"
            src={`https://www.youtube.com/embed/${trailerKey}`}
          ></iframe>
          <div className="selected-movie-info">
            <div className="selected-movie-title-wrapper">
              <h2 className="selected-movie-title">
                {movie.title}
              </h2>
              <h3>
              {runTime} <>&nbsp;</> {ratingIcon} {movie.average_rating * 10}%
              </h3>
            </div>
            <p className="selected-movie-genres">{movieGenres}</p>
            <p className="selected-movie-overview">{movie.overview}</p>
            <p className="selected-movie-stats">
              Release date: {movie.release_date}
              <>&nbsp;</>
              <>&nbsp;</>
              Budget: {budgetAmt}
              <>&nbsp;</>
              <>&nbsp;</>
              Revenue: {revenueAmt}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="modal">{movieDetails}</div>;
}

export default FocusMovie;

FocusMovie.propTypes = {
  focusMovie: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
      backdrop_path: PropTypes.string.isRequired,
      release_date: PropTypes.string,
      overview: PropTypes.string.isRequired,
      average_rating: PropTypes.number.isRequired,
      genres: PropTypes.array.isRequired,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      runtime: PropTypes.number,
    })
  ),
  customStyles: PropTypes.object,
  trailerKey: PropTypes.string,
};
