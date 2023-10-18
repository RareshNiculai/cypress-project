

describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://dngss.ro', { timeout: 30000 })
        cy.contains('Produse').click()
        cy.contains('Sisteme de supraveghere').click({force: true})
       
    })
  })