/*global cy*/

const BASE_URL = "http://localhost:8010";

describe("Portfolio", function() {
  beforeEach(function() {
    cy.visit("http://localhost:8010");
    cy.get("#portfolio").scrollIntoView();
  });

  it("Opens a modal on item click", function() {
    // Modal should not exist
    cy.get(".modal").should("not.exist");

    // Open a modal
    cy.get(".portfolio-item-container:first").click();
    cy.get(".modal").should("have.class", "is-active");

    // Close modal
    cy.get(".modal-close").click();
    cy.get(".modal").should("not.exist");

    // Open another modal
    cy.get(".portfolio-item-container:last").click();
    cy.get(".modal").should("have.class", "is-active");
  });

  it("contains tabs", function() {
    cy.get("#portfolio .tabs li")
      .its("length")
      .should("be.greaterThan", 1);
  });

  it("can switch between tabs to show different items", function() {
    cy.get("#portfolio .tabs li:first").as("FirstTab");
    cy.get("#portfolio .tabs li:last").as("LastTab");

    // Store active portfolio item
    const initialTag = cy
      .get("[data-item-tag]")
      .invoke("attr", "data-item-tag");

    // Verify first is active
    cy.get("@FirstTab").should("have.class", "is-active");

    // Verify first is active
    cy.get("#portfolio .tabs li:last").click();
    cy.get("@FirstTab").should("not.have.class", "is-active");
    cy.get("@LastTab").should("have.class", "is-active");

    // Check another portfolio item is displayed
    cy.get("[data-item-tag]")
      .invoke("attr", "data-item-tag")
      .should("not.equal", initialTag);
  });
});
