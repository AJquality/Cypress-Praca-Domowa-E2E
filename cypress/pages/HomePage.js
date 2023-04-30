class HomePage {
  visitHomePage() {
    return cy.visit("https://www.edu.goit.global/account/login");
  }
  getUserEmail() {
    return cy.get("#user_email");
  }
  getUserPassword() {
    return cy.get("#user_password");
  }
  getLoginButton() {
    return cy.get(".css-1jphuq5");
  }
}

export default HomePage;
