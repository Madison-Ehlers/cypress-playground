context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })

    it('should be on google\'s home page and contain a link to Gmail', () => {
      cy.contains('Gmail');
    })
  })
  