/// <reference types="Cypress" />

describe('mytestSuite', function(){

    before(function(){
        cy.fixture('example').then(function(data){

            this.data=data
            
        })
        
    })

    it('FixtureDemoTest', function(){

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').type(this.data.email)
        cy.get('input[name=Password]').type(this.data.password)
        cy.get('input[type=submit').click()

    })
})