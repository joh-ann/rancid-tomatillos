import './FocusMovie.css';

function FocusMovie({ focusMovie, customStyles }) {

  const movieDetails = focusMovie.map(movie => {
    console.log('focusMovie', focusMovie);
    customStyles.content.backgroundImage = `url(${movie.backdrop_path})`
    return (
      <div className="selected-movie">
        <img src={movie.poster_path} className="selected-movie-img" />
        <div className='selected-movie-info'>
          <h2>{movie.title}</h2>
          <p>{movie.release_date}</p>
        </div>
      </div>
    );
  });

  return <div className='modal'>{movieDetails}</div>;
}

export default FocusMovie;
