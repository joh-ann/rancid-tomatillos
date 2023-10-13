import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import AllMovies from '../AllMovies/AllMovies';
import FocusMovie from '../FocusMovie/FocusMovie';
import Footer from '../Footer/Footer';
import movieData from '../../movieData';

function App() {
  const [allMovies, setMovies] = useState(movieData.movies);
  const [focusMovie, setFocusMovie] = useState([]);

  function showFocusMovie(id) {
    const clickedMovie = allMovies.filter(movie => {
      return movie.id === id;
    });
    setFocusMovie(clickedMovie);
    return clickedMovie;
  }
  console.log('state', focusMovie);

  return (
    <main className="App">
      <Header />
      <AllMovies allMovies={allMovies} showFocusMovie={showFocusMovie} />
      <FocusMovie focusMovie={focusMovie} />
      {/* //if modal keep here set new state: const [isOpen setisOpen] = useState(false)? isOpen && render focusMovie Modal otherwise null->  If as a link, the link would be  */}
      <Footer />
    </main>
  );
}

export default App;
