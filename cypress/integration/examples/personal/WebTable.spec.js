/// <reference types="cypress" />

describe('MyTestSuite', function(){

    it('Table Test', function()
    {
        cy.visit('http://testautomationpractice.blogspot.com/')

        // 1) check value property within table

        cy.get('div.widget-content > table').contains('td', 'Learn Selenium').should('be.visible') // select whole table

        // 2) Check value presence in specific row and column
        cy.get('#HTML1 > div.widget-content > table > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium')

        //3) Check value presence based on condition by iterating rows 
        // (book name - Master in Java)

        cy.get('div.widget-content > table > tbody > tr td:nth-child(1)').each(($e,index,$list) => {

            const text = $e.text()
            if(text.includes('Master In Java'))
            {
                cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)').eq(index).then(function(bname)
                {
                    const bookName = bname.text()
                    expect(bookName).to.equal('Amod')
                })
            }
        })
    })
})
