/// <reference types="cypress" />
beforeEach(function(){
    cy.login('admin@yourstore.com', 'admin')

})

describe('customSuite', function(){

   

    it('LoginTest', function(){

        // cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com', 'admin12') // invalid login
        cy.title().should('be.equal', 'Your store. Login')

        cy.login('admin@yourstore123.com', 'admin')
        cy.title().should('not.be.equal', 'Dashboard / nopCommerce administration')
    })

    it('AddCustomer', function(){
        // Login script
        // cy.login('admin@yourstore.com', 'admin')
        cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

        // Script for Adding new customer
        cy.log('Adding customer.............')
    })

    it('EditCustomer', function(){

        cy.login('admin@yourstore.com', 'admin')

        

        // Script for Editing Customer
        cy.log('Editing customer.............')

    })
})