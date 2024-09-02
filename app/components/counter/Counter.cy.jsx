import React from "react";
import Counter from "./Counter";

describe("<Counter />", () => {
  it("renders", () => {
    cy.mount(<Counter />);
    cy.contains("Counter");
    cy.get("[data-id='counter-value']").should("have.text", "0");
    cy.get("[data-id='increment-btn']").click();
    cy.get("[data-id='counter-value']").should("have.text", "1");
    cy.get("[data-id='decrement-btn']").click();
    cy.get("[data-id='counter-value']").should("have.text", "0");

    // if we want to get withing and ID we use "#"
    // if we want to get withing a class we use "."
  });
});
