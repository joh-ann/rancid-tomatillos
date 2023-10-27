export function getAllMovies() {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    response => {
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Sorry, no movies were found.');
        } else if (response.status === 500) {
          throw new Error(
            'Oops! Something went wrong on our server. Please try again later.'
          );
        } else {
          throw new Error('An error occurred while fetching movies.');
        }
      } else {
        return response.json();
      }
    }
  );
}

export function getFocusMovie(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(`Error code: ${response.status}`);
    }
    return response.json();
  });
}

export function getTrailer(id) {
  return fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`
  ).then(response => {
    if (!response.ok) {
      throw new Error(`Error code: ${response.status}`);
    }
    return response.json();
  });
}
