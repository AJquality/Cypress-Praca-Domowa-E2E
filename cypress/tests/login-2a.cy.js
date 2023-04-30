/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

describe("login", () => {
  it("passes", () => {
    const homePage = new HomePage();
    const login = new Login();

    homePage.visitHomePage().visit;
    homePage.getUserEmail().type("testowyqa@qa.team");
    homePage.getUserPassword().type("QA!automation-1");
    homePage.getLoginButton().click();
    login.getMenuButton().click();
    login.getLogoutButton2().click();
  });
});
