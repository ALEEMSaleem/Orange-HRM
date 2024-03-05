

describe("Add Employee", () => {
  it("addEmployee", () => {
    cy.login();
    cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(".oxd-topbar-body-nav > ul :nth-child(3)").click();
    cy.get("input[name='firstName']").type('Mian');
    cy.get("input[name='lastName']").type('Aleem');
    cy.get("button[type='submit']").click();
   
  });

  
});
