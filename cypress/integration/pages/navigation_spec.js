/*global cy*/

const BASE_URL = "http://localhost:8010";

describe("Navigation", function() {
  beforeEach(function() {
    cy.visit("http://localhost:8010");
  });

  it("scrolls to the sections on click", function() {
    function generateTestIdQuery(testId) {
      return `[data-testid='navbar-${testId}']`;
    }

    // Navbar is in viewport
    cy.isInViewport(generateTestIdQuery("landing"));
    cy.isInViewport(generateTestIdQuery("portfolio"));
    cy.isInViewport(generateTestIdQuery("about"));

    cy.get(generateTestIdQuery("portfolio")).click();
    cy.wait(1500);
    cy.isAtTopOfViewport("#portfolio");

    cy.get(generateTestIdQuery("about")).click();
    cy.wait(1500);
    cy.isAtTopOfViewport("#about");

    cy.get(generateTestIdQuery("landing")).click();
    cy.wait(1500);
    cy.isAtTopOfViewport("#landing");
  });
});
