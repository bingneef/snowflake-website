const BASE_URL = "http://localhost:8010";

describe("The Home Page", function() {
  it("successfully loads", function() {
    cy.visit("http://localhost:8010");
  });

  it("scrolls to the next section on CTA", function() {
    cy.visit("http://localhost:8010");
    cy.get("[test-id='cta']").click();

    cy.wait(1500);

    cy.isAtTopOfViewport("#portfolio");
  });
});
