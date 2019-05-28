/*global cy*/

const BASE_URL = "http://localhost:8010";

describe("Navigation", function() {
  beforeEach(function() {
    cy.visit(BASE_URL);
  });

  it("scrolls to the sections on click", function() {
    const items = ["about", "portfolio", "landing"];

    function generateTestIdQuery(testId) {
      return `[data-testid='navbar-${testId}']`;
    }

    // All items of the navbar are in the viewport
    for (let item of items) {
      cy.isInViewport(generateTestIdQuery(item));
    }

    function doCheck(testId) {
      cy.get(generateTestIdQuery(testId)).click();
      cy.wait(1500);
      cy.isAtTopOfViewport(`#${testId}`);
      cy.get(generateTestIdQuery(testId))
        .invoke("attr", "class")
        .should("contain", "isActive___");
    }

    // Click and validate
    for (let item of items) {
      doCheck(item);
    }
  });
});
