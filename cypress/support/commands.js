Cypress.Commands.add("isAtTopOfViewport", element => {
  cy.get(element).then($el => {
    const rect = $el[0].getBoundingClientRect();
    expect(rect.top).to.equal(0);
  });
});
