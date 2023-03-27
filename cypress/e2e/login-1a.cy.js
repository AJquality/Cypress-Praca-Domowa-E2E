/// <reference types="cypress" />

describe("login", () => {
  it("passes", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get("#user_email").type("user888@gmail.com");
    cy.get("#user_password").type("1234567890");
    cy.get(".css-1jphuq5").click();
    cy.get(".css-7afvtf").click();
  });
});
