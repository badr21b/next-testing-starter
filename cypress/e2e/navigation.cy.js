describe("navigation test", () => {
  it("Test opening and closing sidebar", () => {
    cy.visit("/");
    cy.get("[data-id='open-sidebar']").should("not.be.exist");
    cy.get("[data-id='open-sidebar-btn']").click();
    cy.get("[data-id='open-sidebar']").should("be.visible");
    cy.get("[data-id='close-sidebar-btn']").click();
    cy.get("[data-id='open-sidebar']").should("not.be.exist");
  });

  it.only("Test navigation", () => {
    cy.visit("/");
    cy.get("[data-id='open-sidebar-btn']").click();
    cy.contains("/About Me/i").should("not.exist");
    cy.get("[data-id='about-link']").click();
    cy.url().should("include", "/about");
    cy.get("[data-id='open-sidebar']").should("not.be.exist");
    cy.contains("About Me");
  });
});
