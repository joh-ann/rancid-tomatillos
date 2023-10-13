function FocusMovie({ focusMovie }) {
  const movieDetails = focusMovie.map(movie => {
    console.log('focusMovie', focusMovie);
    return (
      <div className="card">
        <h2>{movie.title}</h2>
        <img src={movie.poster_path} className="movie-card-img" />
        {/* <p>{movieDetails.average_rating.toFixed(2)}</p> */}
        <p>{movie.release_date}</p>
      </div>
    );
  });
  return <div className="focus-movie-container">{movieDetails}</div>;
}

export default FocusMovie;
