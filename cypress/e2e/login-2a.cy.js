/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

describe("login", () => {
  it("passes", () => {
    const homePage = new HomePage();
    const login = new Login();

    homePage.visitHomePage().visit;
    login.getUserEmail().type("testowyqa@qa.team");
    login.getUserPassword().type("QA!automation-1");
    login.getLoginButton().click();
    login.getMenuButton().click();
    login.getLogoutButton2().click();
  });
});
