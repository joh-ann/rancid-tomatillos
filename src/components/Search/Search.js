import './Search.css';
import '../AllMovies/AllMovies.css';
// import { useState, useEffect } from 'react';
import AllMovies from '../AllMovies/AllMovies';
import React from 'react';

function Search({ allMovies, showFocusMovie, search }) {
  const searchString = allMovies.filter(movie => {
    if (search) {
      return movie.title.includes(search);
    }
  });

  return (
    <div className="search">
      <div className="app-content-container">
        {searchString.length > 0 ? (
          <AllMovies allMovies={searchString} showFocusMovie={showFocusMovie} />
        ) : (
          <div className='empty-search'>
            <p className='empty-search-text'>No Movies Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
