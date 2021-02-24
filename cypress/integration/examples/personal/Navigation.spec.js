/// <reference types="cypress" />



describe('MyTestSuite', function(){
    it('Navigations Tests', function(){
        
        cy.visit('https://www.cottagegrovedsm.com/')

        cy.title().should('eq', 'Cottage Grove Church') //Home

        cy.viewport(550, 750) 
        cy.get('body > div.nav.w-nav > div.container.is-nav > div > div.nav-menu.scroll-lock.w-nav-button').click()
        cy.get('#w-dropdown-toggle-1 > div.nav-drop_main-text').click()
        cy.get('#w-dropdown-list-1 > a:nth-child(3)').contains('Foundations').click() //Foundations page

        cy.go('back')
        cy.title().should('eq', 'Cottage Grove Church') //Home

        cy.go('forward')
        cy.title().should('include', 'Foundations')

        cy.go(-1) // back
        cy.title().should('eq', 'Cottage Grove Church') //Home

        cy.go(1) // forward
        cy.title().should('include', 'Foundations')

        cy.reload() // refresh page
    })
})