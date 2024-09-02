import React from "react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  it("renders", () => {
    cy.mount(<TodoList />);
    cy.contains("To-Do List");
    cy.get("ul[data-id='todo-list'] li").should("have.length", 0);
    cy.contains("Buy milk").should("not.exist");
    cy.get("input").type("Buy milk");
    cy.get("button").click();
    cy.get("[data-id='todo-list'] li").should("have.length", 1);
    cy.contains("Buy milk");

    // remove the task
    cy.get("[data-id='remove-task-0']").click();
    cy.get("[data-id='todo-list'] li").should("have.length", 0);
    cy.contains("Buy milk").should("not.exist");
  });
});
