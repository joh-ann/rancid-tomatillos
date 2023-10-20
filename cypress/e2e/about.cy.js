describe('About page elements', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      {
        statusCode: 200,
        fixture: 'moviedata',
      }
    ).visit('http://localhost:3000/about');
  });

  it('should display the about bios and images', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
      .get('h2')
      .contains('Johann Dee')
      .get('p')
      .contains('Ann')
      .get("div[class='about-us-member']")
      .find('img')
      .should('be.visible')
      .get('.subtitle')
      .contains('Rancid Tomatillos');
  });

  it('should display the home page elements', () => {
    cy.get('.home')
      .click()
      .get('h1')
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
