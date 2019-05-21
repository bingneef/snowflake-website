Cypress.Commands.add("isInViewport", element => {
  cy.get(element).then($el => {
    const height = Cypress.$(cy.state("window")).height();
    const width = Cypress.$(cy.state("window")).width();
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).to.be.greaterThan(0);
    expect(rect.bottom).to.be.lessThan(height);
    expect(rect.left).to.be.greaterThan(0);
    expect(rect.right).to.be.lessThan(width);
  });
});

Cypress.Commands.add("isAtTopOfViewport", element => {
  cy.get(element).then($el => {
    const rect = $el[0].getBoundingClientRect();

    expect(rect.top).to.equal(0);
  });
});
