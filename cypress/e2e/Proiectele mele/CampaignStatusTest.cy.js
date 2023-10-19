import "cypress-wait-until";
import { email, password } from "../../fixtures/configs.js";

describe("Campaign Status Test", () => {
  it("check if the campaigns has the correct status", () => {
    const campaignsURL =
      "https://partners-e2e.helloetvas-dev.xyz/campaigns?organization=o-647d3670-3c49-4ed2-beca-6c6dc8bb9f9a";

    cy.visit(campaignsURL);
    cy.get('input[name="email"]').type(email);
    cy.get("button").click();
    cy.get('input[name="password"]').type(password);
    cy.get("button[type='submit']").click();

    cy.waitUntil(() => cy.url().should("eq", campaignsURL));

    cy.get('[href="/campaigns"]').click({ multiple: true });
    cy.contains("button", "Cashbacks").should("not.be.disabled").click();

    checkCampaignNameAndName("draft campaign", "Draft");
    checkCampaignNameAndName("pending campaign", "Pending");
    checkCampaignNameAndName("suspended campaign", "Suspended");
    checkCampaignNameAndName("running campaign", "Running");
    checkCampaignNameAndName("rejected campaign", "Rejected");
    checkCampaignNameAndName("stopped campaign", "Stopped");
    checkCampaignNameAndName("expired campaign", "Expired");
    checkCampaignNameAndName("not started campaign", "Not Started");
    checkCampaignNameAndName("restricted campaign", "Restricted");
  });
});

function checkCampaignNameAndName(name, status) {
  cy.contains(name)
    .parent()
    .parent()
    .parent()
    .parent()
    .find('> [data-testid="campaigns-list-status"]')
    .first()
    .should("have.text", status);
}
