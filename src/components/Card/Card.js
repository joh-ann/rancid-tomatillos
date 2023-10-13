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
    <button className='card' onClick={() => showFocusMovie(id)}>
      <img src={poster_path} className='movie-card-img'/>
      <div className='card-description'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-year'>{release_date}</p>
      </div>
      {/* <p>{release_date}</p> */}
      {/* <button onClick={() => showFocusMovie(id)}>Show Movie Details</button> */}
    </button>
  );
}

export default Card;
