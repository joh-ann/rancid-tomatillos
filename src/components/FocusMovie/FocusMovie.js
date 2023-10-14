import './FocusMovie.css';

function FocusMovie({ focusMovie, customStyles, trailerKey }) {
  const movieDetails = focusMovie.map(movie => {
    console.log('focusMovie', focusMovie);
    customStyles.content.backgroundImage = `url(${movie.backdrop_path})`;
    return (
      <div className="selected-movie">
          <img src={movie.poster_path} className="selected-movie-img" />
        <div className="selected-movie-header">
          <h2>{movie.title}</h2>
          <p>Release date: {movie.release_date}</p>
          <p>{movie.overview}</p>
        </div>
        <div className="selected-movie-trailer">
          <iframe width="420" height="315"
            src={`https://www.youtube.com/embed/${trailerKey}`}>
          </iframe>
        </div>
      </div>
    );
  });

  return <div className="modal">{movieDetails}</div>;
}

export default FocusMovie;
