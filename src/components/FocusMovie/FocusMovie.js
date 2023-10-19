import './FocusMovie.css';
import PropTypes from 'prop-types';

function FocusMovie({ focusMovie, customStyles, trailerKey }) {
  const movieDetails = focusMovie.map(movie => {
    console.log('focusMovie', focusMovie);
    customStyles.content.backgroundImage = `url(${movie.backdrop_path})`;

    const movieGenres = movie.genres.map((genre, index) => (
      <div key={index} className="genre">
        {genre}
        {index < movie.genres.length - 1 && <>,&nbsp;</>}
      </div>
    ));

    console.log(movieGenres);

    return (
      <div className="selected-movie">
        <img src={movie.poster_path} className="selected-movie-img" />
        <div className="selected-movie-content">
          <iframe
            className="selected-movie-trailer"
            width="90%"
            height="400px"
            src={`https://www.youtube.com/embed/${trailerKey}`}
          ></iframe>
          <div className="selected-movie-info">
            <div className="selected-movie-title">
              <h2>{movie.title}</h2>
              <h3>🍿 {movie.average_rating * 10}%</h3>
            </div>
            <p className="selected-movie-genres">{movieGenres}</p>
            <p className="selected-movie-stats">
              Release date: {movie.release_date}
              <>&nbsp;</>
              <>&nbsp;</>
              Budget: ${movie.budget}
              <>&nbsp;</>
              <>&nbsp;</>
              Revenue: ${movie.revenue}
            </p>
            <p className="selected-movie-overview">{movie.overview}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="modal">{movieDetails}</div>;
}

export default FocusMovie;

FocusMovie.propTypes = {
  focusMovie: PropTypes.array,
  customStyles: PropTypes.object,
  trailerKey: PropTypes.string,
};
