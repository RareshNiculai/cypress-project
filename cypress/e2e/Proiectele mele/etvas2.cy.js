context('Etvas marketing campaigns', () => {
  beforeEach(() => {
    cy.fixture('marketingCampaigns').as('config')
  })

  it("should be able to see the marketing campaigns tab if it's a cashback/product advertiser", function () {
    const { email, password } = this.config.partners.advertiser
    const portalURL = Cypress.env('partnersBaseURL')

    cy.loginPartner(email, password)
    cy.visit(portalURL)

    cy.expandSidebar()
    cy.get('#sidebar-menu').contains('Campaigns v2')
  })

  it("should not be able to see the marketing campaigns tab if it's a bank", function () {
    const { email, password } = this.config.partners.publisher
    const portalURL = Cypress.env('partnersBaseURL')

    cy.loginPartner(email, password)
    cy.visit(portalURL)

    cy.expandSidebar()
    cy.get('#sidebar-menu').should('not.contain', 'Campaigns v2')
  })

  it('should be able to create a cashback campaign', function () {
    cy.createMarketingCampaign(
      this.config.partners.advertiser,
      this.config.cashback
    )
  })

  it('should be able to create a product campaign', function () {
    cy.createMarketingCampaign(
      this.config.partners.advertiser,
      this.config.product
    )
  })
})