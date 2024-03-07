

describe("Add Employee", () => {
  it("addEmployeeValidation", () => {
    cy.login();
    cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").click();
    cy.get(".oxd-topbar-body-nav > ul :nth-child(3)").click();
    cy.get("input[name='firstName']").type('steve');
    cy.get("input[name='lastName']").type('young');
    cy.get('div:nth-child(2) > div:nth-child(1) > div > div:nth-child(2) > input').type('112233');
    cy.get("button[type='submit']").click();
    cy.contains("Successfully Saved").should("be.visible");

    cy.get('div:nth-child(2) > div > div:nth-child(2) > div > div > input').click();
    
   

   
  });

  
});
