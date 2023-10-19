import "cypress-wait-until";
describe("Etvas Test", () => {
  it("Campaign", () => {
    cy.visit("https://partners.helloetvas-dev.xyz/");
    cy.get('input[name="email"]').type("rares.niculai+test@etvas.com");
    cy.get("button").click();
    cy.get('input[name="password"]').type("Secret12345");
    cy.get("button[type='submit']").click();

    cy.waitUntil(() =>
      cy.url().should("eq", "https://partners.helloetvas-dev.xyz/")
    );

    cy.get('[href="/campaigns"]').click();
    cy.contains("button", "Cashbacks").should("not.be.disabled").click();

    testCampaignNameAgainstName("draft campaign", "Draft");
    testCampaignNameAgainstName("pending campaign", "Pending");
    testCampaignNameAgainstName("suspended campaign", "Suspended");
    testCampaignNameAgainstName("running campaign", "Running");
    testCampaignNameAgainstName("rejected campaign", "Rejected");
    testCampaignNameAgainstName("stopped campaign", "Stopped");
    testCampaignNameAgainstName("expired campaign", "Expired");
  });
});

function testCampaignNameAgainstName(name, status) {
  cy.contains(name)
    .parent()
    .parent()
    .parent()
    .parent()
    .find('> [data-testid="campaigns-list-status"]')
    .first()
    .should("have.text", status);
}
