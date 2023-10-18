
describe('My Second Test', () => {
    it('Does not do much!', () => {
        cy.visit('https://dngss.ro')
        cy.wait(5000)
        cy.contains('Contact').click()
        cy.wait(5000)
        cy.get('#wpforms-64-field_0').type('Rares Niculai', {force: true})
        cy.wait(5000)
        cy.get('#wpforms-64-field_1').type('niculairares@gmail.com',{force: true})
        cy.wait(5000)
        cy.get('#wpforms-64-field_3').type('dng smart security',{force: true})
        cy.wait(5000)
        cy.get('#wpforms-64-field_2').type('As dorii oferta pentru un sistem de supraveghere',{force: true})
        cy.wait(5000)
        cy.get('#wpforms-submit-64').click({force: true})

       
    })
  })