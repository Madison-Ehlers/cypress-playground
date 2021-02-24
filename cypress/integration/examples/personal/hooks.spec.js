/// <reference types="cypress" />

describe("myTestSuite", function(){

    beforeEach(function(){
        cy.log('****** THIS IS THE LOGIN BLOG *********')
    })
    it("searching", function()
    {
        cy.log('************* This is Searching Test ************')

    })

    it("advanced searching", function()
    {
        cy.log('************* This is Advanced Searching Test ************')

    })

    it("listing products", function()
    {
        cy.log('************* This is Listing Test ************')

    })
})