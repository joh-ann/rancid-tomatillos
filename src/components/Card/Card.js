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
  let ratingIcon;
  if (average_rating >= 5) {
    ratingIcon = '🍅';
  } else {
    ratingIcon = '🦠';
  }
  return (
    <div className="card" onClick={() => showFocusMovie(id)}>
      <img src={poster_path} className="movie-card-img" alt={title} />
      <div className="card-rating">
        {ratingIcon} {average_rating * 10}%
      </div>
      <div className="card-description">
        <h2 className="card-title">{title}</h2>
        <p className="card-year">{release_date}</p>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  average_rating: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
};
