import './App.css';
import { useState } from 'react';
import Header from '../Header/Header';
import AllMovies from '../AllMovies/AllMovies';
import Footer from '../Footer/Footer';
import movieData from '../../movieData';

function App() {
  const [allMovies, setMovies] = useState(movieData.movies);

  return (
    <main className="App">
      <Header />
      <AllMovies allMovies={allMovies}/>
      <Footer />
    </main>
  );
}

export default App;
