context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    // find the search bar
    it('should find the input and click on it', () => {
    cy.get('.gLFyf').click( {multiple: true} );
    });
    // enter text into search bar
    it('should enter text into search bar', () => {
        cy.get('.gLFyf').type('planning center online');
    
    // click enter
    cy.get('div.a4bIc > input').type('{enter}');
    // click 1st link
      cy.get('h3:first').click( {multiple: true} );
      // go back in browser
      // cy.go('back');
  });
  })
  