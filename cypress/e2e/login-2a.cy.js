/// <reference types="cypress" />

describe("login", () => {
  it("passes", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("testowyqa@qa.team");
    cy.get("#user_password").type("QA!automation-1");
    cy.get(".eckniwg2").click();
    cy.get(".css-7afvtf").click();
    cy.get(":nth-child(7) > .css-bve2vl").click();
  });
});
