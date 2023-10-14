import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { useState } from 'react';
import Header from '../Header/Header';
import AllMovies from '../AllMovies/AllMovies';
import FocusMovie from '../FocusMovie/FocusMovie';
import Footer from '../Footer/Footer';
import movieData from '../../movieData';

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
    backgroundRepeat: 'no-repeat'
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.5)'
  }
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function App() {
  const [allMovies, setMovies] = useState(movieData.movies);
  const [focusMovie, setFocusMovie] = useState([]);
  // modal
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
    const clickedMovie = allMovies.filter(movie => {
      return movie.id === id;
    });
    setFocusMovie(clickedMovie);
    openModal();
    return clickedMovie;
  }
  console.log('state', focusMovie);

  return (
    <main className='app'>
      <Header />
      <div className='app-content-container'>
        <AllMovies allMovies={allMovies} showFocusMovie={showFocusMovie} />
      </div>
      <Footer />
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Selected Movie Modal"
        >
        <FocusMovie focusMovie={focusMovie} customStyles={customStyles}/>
        <button className='close-modal-btn' onClick={closeModal}>×</button>
      </Modal>

    </main>
  );
}

export default App;
