class Login {
  getMenuButton() {
    return cy.get(".css-7afvtf");
  }
  getLogoutButton() {
    return cy.get(":nth-child(9) > .css-bve2vl");
  }

  getLogoutButton2() {
    return cy.get(":nth-child(7) > .css-bve2vl");
  }
}

export default Login;
