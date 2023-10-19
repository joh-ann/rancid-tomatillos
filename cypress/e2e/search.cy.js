describe('Search page elements', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'moviedata',
      }
    ).visit('http://localhost:3000/search');
  });

  it('should display the search message', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
      .get('.subtitle')
      .contains('Rancid Tomatillos')
      .get("p[class='empty-search-text']")
      .contains('No Movies Found')
      .get("input[name='input']")
      .type('Black');
  });
});
