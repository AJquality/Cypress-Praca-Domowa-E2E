/// <reference types="cypress" />

import HomePage from "../pages/HomePage";
import Login from "../pages/Login";

describe("login", () => {
  it("passes", () => {
    const homePage = new HomePage();
    const login = new Login();

    homePage.visitHomePage().visit;
    login.getUserEmail().type("user888@gmail.com");
    login.getUserPassword().type("1234567890");
    login.getLoginButton().click();
    login.getMenuButton().click();
    login.getLogoutButton().click();
  });
});
