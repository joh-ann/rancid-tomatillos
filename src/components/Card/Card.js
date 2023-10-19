import './Card.css';
import PropTypes from 'prop-types';
function Card({
  id,
  poster_path,
  title,
  average_rating,
  release_date,
  showFocusMovie,
}) {
  return (
    <div className="card" onClick={() => showFocusMovie(id)}>
      <img src={poster_path} className="movie-card-img" />
      <div className="card-rating">🍿 {average_rating * 10}%</div>
      <div className="card-description">
        <h2 className="card-title">{title}</h2>
        <p className="card-year">{release_date}</p>
      </div>
    </div>
  );
}

export default Card;
Card.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  average_rating: PropTypes.number,
  release_date: PropTypes.string,
};
