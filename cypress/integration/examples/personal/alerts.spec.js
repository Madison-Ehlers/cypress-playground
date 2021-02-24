/// <reference types="Cypress" />

describe('Suite name', function(){

    it('Alerts', function(){

        // cy.visit('testsite')

        // cy.get('input[type=submit]').click()

        // cy.on('window:alert', (str) => 
        // {
        //     expect(str).to.equal('Please enter a valid user name')
        // })
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get('#HTML10 > div.widget-content > button').click()

    cy.on('window:confirm', (str) => 
        {
            expect(str).to.equal('Press a button!')
        })
        
    })
})