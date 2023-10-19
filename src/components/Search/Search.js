import './Search.css';
import '../AllMovies/AllMovies.css';
import { useState, useEffect } from 'react';
import AllMovies from '../AllMovies/AllMovies';
import React from 'react';

function Search({ allMovies, showFocusMovie }) {
  const [search, setSearch] = useState(null);
  console.log('state', search);

  const searchString = allMovies.filter(movie => {
    if (search) {
      return movie.title.includes(search);
    }
  });
  console.log(searchString);

  //   useEffect(() => {
  //     setSearch();
  //   }, []);

  return (
    <div className="search">
      <form>
        <input
          type="text"
          placeholder="search"
          name="search"
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
      </form>
      <div className="app-content-container">
        {searchString.length > 0 ? (
          <AllMovies allMovies={searchString} showFocusMovie={showFocusMovie} />
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
