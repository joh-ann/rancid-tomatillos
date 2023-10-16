describe('should open to home page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'moviedata',
      }
    ).visit('http://localhost:3000');
  });

  it('should display the home page elements', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
      .get('.card')
      .should('have.length', 14)
      .get('.card-title')
      .first()
      .contains('h2', 'Black Adam')
      .get('.card-title')
      .last()
      .contains('The Soccer Football Movie')
      .get('.subtitle')
      .contains('Rancid Tomatillos');
  });

  it('should open the modal and display one movie', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies/724495',
      {
        statusCode: 200,
        fixture: 'singlemovie',
      }
    );

    cy.get('.card').contains('.card-title', 'The Woman King').click();

    cy.get('.selected-movie')
      .get('.selected-movie-img')
      .should(
        'have.attr',
        'src',
        'https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg'
      );
  });
});
