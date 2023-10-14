import './App.css';
import React from 'react';
import Modal from 'react-modal';

import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import AllMovies from '../AllMovies/AllMovies';
import FocusMovie from '../FocusMovie/FocusMovie';
import Footer from '../Footer/Footer';

// modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    border: 'none',
    height: '80vh',
    width: '80vw',
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
  // modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [error, setError] = useState('');

  function getAllMovies() {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => {
        if (!response.ok) {
          console.log(`Error code: ${response.status}`);
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
    console.log('effect ran');
    getAllMovies();
  }, []);

  function errorMessage(message) {
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
      .then(response => response.json())
      .then(data => {
        setFocusMovie([data.movie]);
        openModal();
      })
      .catch(error => console.log(error));
  }
  console.log('state', focusMovie);

  return (
    <main className="app">
      <Header />
      <div className="app-content-container">
        {error.length ? (
          errorMessage()
        ) : (
          <AllMovies allMovies={allMovies} showFocusMovie={showFocusMovie} />
        )}
      </div>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Selected Movie Modal"
      >
        <FocusMovie focusMovie={focusMovie} customStyles={customStyles} />
        <button className="close-modal-btn" onClick={closeModal}>
          ×
        </button>
      </Modal>
    </main>
  );
}

export default App;
