export function getAllMovies() {
  fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then(
    response => {
      if (!response.ok) {
        // console.log(`Error code: ${response.status}`);
        throw new Error(`Sorry the Movies are not available`);
      } else {
        return response.json();
      }
    }
  );
}
