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
    <div className="card" onClick={() => showFocusMovie(id)} tabIndex={0}>
      <img src={poster_path} className="movie-card-img" alt={title} tabIndex={0}/>
      <div className="card-rating" tabIndex={0}>
        {ratingIcon} {average_rating * 10}%
      </div>
      <div className="card-description">
        <h2 className="card-title" tabIndex={0}>{title}</h2>
        <p className="card-year" tabIndex={0}>{release_date}</p>
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
