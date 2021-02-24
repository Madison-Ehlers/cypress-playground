<reference type="Cypress" />

describe('UI Elements', function()
{
    it('Verify Inputbox & Radio buttons', function()
    {
        // Inputbox
        cy.visit("http://newtours.demoaut.com/") // visit url
        cy.url().should('include','newtours') // verify url should include keyword 'newtours'

        cy.get('[name="username"]').should('be.visible').should('be.enabled').type("mercury") // should be visible and enabled
        cy.get('[name="password"]').should('be.visible').should('be.enabled').type("mercury") // should be visible and enabled

        cy.get('input[name=login]').should('be.visible').click() // sign-in

        cy.title().should('eq', 'Find a Flight: Mercury Tours:')  //Title verification

        // Radio buttons
        cy.get('input[value="roundtrip"]').should('be.visible').should('be.checked') //visibility checked status
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //expecting not checked 

        cy.get('[name=findFlights]').should('be.visible').click() //click on "continue" button

        cy.title().should('eq', 'Select a Flight: Mercury Tours:')  //Title verification of "continue" page

    }

)
}
)