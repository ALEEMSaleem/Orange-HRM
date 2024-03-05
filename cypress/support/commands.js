// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import logInData from'../fixtures/logincreds.json';

Cypress.Commands.add("login", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("input[name='username']").type(logInData.username);
  cy.get("input[name='password']").type(logInData.password);
  cy.get("button[type='submit']").click();

  cy.url().should(
    "eq",
    "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  );
  cy.url().should("include", "/web/index.php/dashboard/index");
  cy.contains("Dashboard").should("be.visible");
});

Cypress.Commands.add("invalidUserName",()=>{
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("input[name='username']").type(logInData.invalidUsername);
  cy.get("input[name='password']").type(logInData.password);
  cy.get("button[type='submit']").click();
  cy.contains("Invalid credentials").should("be.visible");

});

Cypress.Commands.add("InvalidPassword",()=>{
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("input[name='username']").type(logInData.username);
  cy.get("input[name='password']").type(logInData.invalidPassword);
  cy.get("button[type='submit']").click();
  cy.contains("Invalid credentials").should("be.visible");

});

Cypress.Commands.add("InvalidUsernamePassword",()=>{
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  cy.get("input[name='username']").type(logInData.invalidUsername);
  cy.get("input[name='password']").type(logInData.invalidPassword);
  cy.get("button[type='submit']").click();
  cy.contains("Invalid credentials").should("be.visible");

});
