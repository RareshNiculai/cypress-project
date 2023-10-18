describe('Etvas Test', () => {
    it('Campaign', () =>{
        cy.visit('https://partners.helloetvas-dev.xyz/cashback')
        cy.get('input[name="email"]').first().type('rares.niculai@etvas.com')
        cy.get('button').click()
        cy.get('input[name="password"]').first().type('Okelari1!')
        cy.get("button[type='submit']").first().click()
    })
})