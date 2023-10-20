import './App.css';
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import About from '../About/About';
import Search from '../Search/Search';
import AllMovies from '../AllMovies/AllMovies';
import FocusMovie from '../FocusMovie/FocusMovie';
import Footer from '../Footer/Footer';
import ReactBuilt from '../ReactBuilt/ReactBuilt';

// modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 'none',
    height: '80%',
    width: '80%',
    overflow: 'hidden',
    transform: 'translate(-50%, -50%)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function App() {
  const [allMovies, setMovies] = useState([]);
  const [focusMovie, setFocusMovie] = useState([]);
  const [trailerKey, setTrailerKey] = useState('');
  const [search, setSearch] = useState(null);
  // modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error, setError] = useState('');

  function getAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
          // console.log(`Error code: ${response.status}`);
          throw new Error(`Sorry the Movies are not available`);
        } else {
          return response.json();
        }
      })
      .then(data => {
        setMovies([...allMovies, ...data.movies]);
      })
      .catch(error => setError(error.message));
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  function errorMessage() {
    return (
      <div>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  // //   Function that will be run after the modal has opened
  // }

  function closeModal() {
    setIsOpen(false);
  }

  function showFocusMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setFocusMovie([data.movie]);
        getMovieTrailer(id);
        openModal();
      })
      .catch(error => console.log(error));
  }

  function getMovieTrailer(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error code: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const foundTrailer = data.videos.find(el => el.type === 'Trailer').key;
        setTrailerKey(foundTrailer);
      })
      .catch(error => console.log(error));
  }

  return (
    <main className="app">
      <Header allMovies={allMovies} setSearch={setSearch} />
      <Routes>
        <Route
          path="/"
          element={
            error.length ? (
              errorMessage()
            ) : (
              <div className="app-content-container">
                <AllMovies
                  allMovies={allMovies}
                  showFocusMovie={showFocusMovie}
                />
              </div>
            )
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/search"
          element={
            <Search
              allMovies={allMovies}
              showFocusMovie={showFocusMovie}
              search={search}
            />
          }
        />
      </Routes>
      <Footer />
      <ReactBuilt />
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Selected Movie Modal"
      >
        <FocusMovie
          focusMovie={focusMovie}
          customStyles={customStyles}
          key={focusMovie.id}
          trailerKey={trailerKey}
        />
        <button className="close-modal-btn" onClick={closeModal}>
          ×
        </button>
      </Modal>
    </main>
  );
}

export default App;
