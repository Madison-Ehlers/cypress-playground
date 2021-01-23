context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    // find the search bar
    it('should find the input and click on it', () => {
    cy.get('.gLFyf').click();
    });
    // enter text into search bar
    it('should enter text into search bar', () => {
        cy.get('.gLFyf').type('planning center online');
        cy.get('.gLFyf').type('{enter}');
        });
    // click enter

    // click 1st link

    // it('should be on google\'s home page and contain a link to Gmail', () => {
    //   cy.contains('Gmail');
    // })
  })
  