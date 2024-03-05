

describe("login function", () => {
  it("login with valid username and valid password", () => {
    cy.login();
  });

  it("login with invalid username and valid password", () => {
    cy.invalidUserName();
  });

  it("login with valid username and invalid password", () => {
    cy.InvalidPassword();
  });

  it("login with invalid username and invalid password", () => {
    cy.InvalidUsernamePassword();
  });
});
