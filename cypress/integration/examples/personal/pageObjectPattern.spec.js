/// <reference types="cypress" />

import LoginPage from '../../pageObjecs/loginPage'

describe('MyTestSuite', function(){

    it('Valid Login Test', function(){
        
        const lp = new LoginPage()
        lp.visit()
        lp.fillEmail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()

        cy.title().should('include', 'Dashboard')

    })
})