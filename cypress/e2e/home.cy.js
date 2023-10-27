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

  it('should display an error message', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 404,
        fixture: 'moviedata',
      }
    )
      .as('getMovies')
      .visit('http://localhost:3000')
      .wait('@getMovies')
      .get('.error-message')
      .contains('Sorry, no movies were found.');
  });

  it('should display an error message', () => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 500,
        fixture: 'moviedata',
      }
    )
      .as('getMovies')
      .visit('http://localhost:3000')
      .wait('@getMovies')
      .get('.error-message')
      .contains(
        'Oops! Something went wrong on our server. Please try again later.'
      );
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

  it('should display the about page', () => {
    cy.get('.about')
      .click()
      .get('h1')
      .contains('Rancid Tomatillos')
      .get('h2')
      .contains('Johann Dee')
      .get('p')
      .contains('Ann')
      .get("div[class='about-us-member johann']")
      .find('img')
      .should('be.visible')
      .get('.subtitle')
      .contains('Rancid Tomatillos');
  });

  it('should display search results', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
      .get('.subtitle')
      .contains('Rancid Tomatillos')
      .get('form')
      .click()
      .window()
      .then(win => {
        win.document.querySelector('.search-icon').remove();
      })
      .get("input[name='input']")
      .type('Black')
      .get('.movie-card-img')
      .should('have.length', 2);
  });
});
