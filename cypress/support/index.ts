declare namespace Cypress {
    interface Chainable {
      enterValue(selector: string, fieldValue: string): Chainable<Element>;
    }
  }