/// <reference type="Cypress" />
it('is doing something very important', () => {

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    expect(err.message).to.include('bootstrapValidator')
    // done()
    return false
  })
  cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html")
  it('Hobbies check boxes', function(){

  cy.get('#contact_form > fieldset > div:nth-child(11) > div > div:nth-child(1) > label > input[type=radio]').check().should('be.checked').and('have.value', 'yes')

  cy.get('input[value=no]').should('not.be.checked')

  // select dropdown
  cy.get('select[name=state').select('Iowa').should('have.value',"Iowa")
})
})

// describe('Suit Name', function(){

    it('Hobbies check boxes', function(){
    cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html")

    cy.get('#contact_form > fieldset > div:nth-child(11) > div > div:nth-child(1) > label > input[type=radio]').check().should('be.checked').and('have.value', 'yes')
  
    cy.get('input[value=no]').should('not.be.checked')
  
    // select dropdown
    cy.get('select[name=state').select('Iowa').should('have.value',"Iowa")
  })

   
   
