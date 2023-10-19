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
});
