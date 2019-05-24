/*global cy*/

const BASE_URL = "http://localhost:8010";

describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("http://localhost:8010");
  });

  it("scrolls to the next section on CTA", function() {
    cy.visit("http://localhost:8010");

    // CTA is in viewport
    cy.isInViewport("[data-testid='landing-cta']");
    cy.get("[data-testid='landing-cta']").click();

    // Wait for scroll
    cy.wait(1500);

    // Scrolled to #portfolio
    cy.isAtTopOfViewport("#portfolio");
  });
});
