// custom command that gets an input field using a selector and types in a value for that field
Cypress.Commands.add('enterValue', (selector, fieldValue) => {
  cy.get(selector)
    .click()
    .clear()
    .type(fieldValue)
})