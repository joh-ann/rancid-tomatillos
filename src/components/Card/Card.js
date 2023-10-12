import './Card.css';

function Card({ id, poster_path, title, average_rating, release_date }) {
  return (
    <div className="card">
      <img src={poster_path} className="movie-card-img"/>
      <h2>{title}</h2>
      <p>{average_rating.toFixed(2)}</p>
      <p>{release_date}</p>
    </div>
  )
}

export default Card;