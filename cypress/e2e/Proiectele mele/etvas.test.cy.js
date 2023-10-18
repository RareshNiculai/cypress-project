import "cypress-wait-until"
describe('Etvas Test', () => {
    it('Campaign', () =>{
        cy.visit('https://partners-e2e.helloetvas-dev.xyz/')
        cy.get('input[name="email"]').first().type('partner.e2e@gmail.com')
        cy.get('button').click()
        cy.get('input[name="password"]').first().type('Secret!1234')
        cy.get("button[type='submit']").first().click()

        cy.waitUntil(() => cy.url().should('eq','https://partners-e2e.helloetvas-dev.xyz/'))
        
        cy.get('[href="/campaigns"]').click()
        cy.contains('button', 'Cashbacks').should('not.be.disabled').click()
        cy.contains('button','Create Campaign',{matchCase: false}).first().click()
        cy.get('[name="name"]').type('my first campaign in cypress',{force: true})
        cy.contains('button', 'Next').should('not.be.disabled').click()
        
        cy.get('input[name="offerSets[0].name"]').type('my first campaign in cypress',{force: true})
        cy.get(':nth-child(2) > .eQHTJH > .eBOXzY > .sc-dAbbOL > .sc-aXZVg').click({force: true})
        cy.get('.iRbyaZ > .cOJcwF').click({force: true})
        cy.get('input[name="name"]').type('bla bla',{force: true})
        cy.get('.cXIvfl > .sc-dhKdcB > .sc-jlZhew > .sc-kpDqfm').click({force: true})
        cy.contains('Percentage').click({force: true})
        cy.get('div[name="discount"]').type('90',{force: true})
        cy.get("input[placeholder='e.g. Adidas']").type('Adidas',{force: true})
        cy.get('.insAPs > .clpler > .sc-aXZVg').click({force: true})
        cy.contains('button', 'Next').should('not.be.disabled').click()
        

    })   
})
    