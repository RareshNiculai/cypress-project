import "cypress-wait-until";
import "cypress-file-upload";

describe("Etvas Test", () => {
  it("Campaign", () => {
    cy.visit("https://partners.helloetvas-dev.xyz/");
    cy.get('input[name="email"]').first().type("rares.niculai+first@etvas.com");
    cy.get("button").click();
    cy.get('input[name="password"]').first().type("Secret12345");
    cy.get("button[type='submit']").first().click();

    cy.waitUntil(() =>
      cy.url().should("eq", "https://partners.helloetvas-dev.xyz/")
    );

    cy.get('[href="/campaigns"]').click();
    cy.contains("button", "Cashbacks").should("not.be.disabled").click();
    cy.contains("button", "Create Campaign", { matchCase: false })
      .first()
      .click();
    cy.get('input[name="name"]').type("pending campaign", { force: true });
    cy.get("#cashback-campaign-type").click({ force: true });
    cy.contains("button", "Next").should("not.be.disabled").click();

    cy.get('input[name="offerSets[0].name"]').type("pending campaign", {
      force: true,
    });
    cy.contains("button", "Create New Cashback")
      .should("not.be.disabled")
      .click({ force: true });
    cy.get(".iRbyaZ > .cOJcwF").click({ force: true });
    cy.get('input[name="name"]').type("pending campaign", { force: true });
    cy.contains("button", "Select")
      .should("not.be.disabled")
      .click({ force: true });
    cy.contains("Percentage").click({ force: true });
    cy.get('div[name="discount"]').type("90", { force: true });
    cy.get("input[placeholder='e.g. Adidas']").type("Etvas", { force: true });
    cy.get(".jVQZUH > .ddGzGN > .sc-dAbbOL > .sc-aXZVg").click({ force: true });
    cy.contains("button", "Next").should("not.be.disabled").click();

    cy.contains("button", "Create New Offer")
      .should("not.be.disabled")
      .click({ force: true });
    cy.get('input[name="name"]').type("pending campaign", { force: true });
    cy.get("input[placeholder='Title']").type("pending campaign", {
      force: true,
    });
    cy.get("textarea").first().type("pending campaign", { force: true });
    cy.get('textarea[name="description[en]"]').type("pending campaign", {
      force: true,
    });
    cy.get("input[type=File]").each((el) =>
      cy.wrap(el).attachFile("logo-small.jpg")
    );
    cy.get("#actionText").type("pending campaign", { force: true });
    cy.get(".hreHyB > .ddGzGN > .clpler > .sc-aXZVg").click({ force: true });
    cy.waitUntil(() => cy.get("#campaign-item-offer"));
    cy.contains("button", "Publish").click();
  });
});
