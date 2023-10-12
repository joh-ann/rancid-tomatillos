import Card from '../Card/Card';
import './AllMovies.css';

function AllMovies({ allMovies }) {
  const movieCards = allMovies.map(movie => {
    return (
    <Card 
    id={movie.id}
    key={movie.id}
    poster_path={movie.poster_path}
    title={movie.title}
    average_rating={movie.average_rating}
    />
    )
  })
  return (
    <div className='all-movies-container'>
      {movieCards}
    </div>
  )
}

export default AllMovies;