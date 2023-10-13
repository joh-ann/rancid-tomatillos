import './Card.css';

function Card({
  id,
  poster_path,
  title,
  average_rating,
  release_date,
  showFocusMovie,
}) {
  return (
    <div className="card">
      <img src={poster_path} className="movie-card-img" />
      <h2>{title}</h2>
      <p>{average_rating.toFixed(2)}</p>
      {/* <p>{release_date}</p> */}
      <button onClick={() => showFocusMovie(id)}>Show Movie Details</button>
    </div>
  );
}

export default Card;
