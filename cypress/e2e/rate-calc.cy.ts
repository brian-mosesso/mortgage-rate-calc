// tests for the interest rate input box on the zillow mortgage rate calculator
describe('mortgage rate calculator', () => {

  beforeEach(() => {
    cy.visit('/mortgage-calculator/')
    cy.fixture('inputs').then(function(data) {
        this.input = data
    })
    // alias the input boxes in rate calculator
    cy.get('#breakdown-panel > div > div > div.pie-chart > svg > g > g:nth-child(1) > g > text.arc-label-value').as('principalAndInterest')
    cy.get('#homePrice').as('homePrice')
    cy.get('#form-1_downPayment').as('downPayment')
    cy.get('#rate').as('interestRate')
    cy.get('#zmm-calc-payment').as('errorMessage')
  })

  it('interest rate input exists', function() {
    // gets the label id and checks the interest rate title
    cy.get('#label_4').as('interestRateLabel').should('have.text', 'Interest rate')
    // clicks on the interest rate input and checks focus
    cy.get('@interestRate')
      .click()
      .should('have.focus')
  })

  it('principal and interest calculates correctly', function() {
    // types in data using the enterValue function
    cy.enterValue('@homePrice', this.input.homePrice)
    cy.enterValue('@downPayment', this.input.downPayment)
    cy.enterValue('@interestRate', this.input.newRate)
    // checks the principal and interest from the payment breakdown
    cy.get('@principalAndInterest')
      .click()
      .should('have.text', '$843')
  })

  it('correct error shows for invalid number', function() {
    // clicks on the interest rate input and types in new rate using enterValue function
    cy.enterValue('@interestRate', this.input.invalidString)
    // checks the error message, it should error because text was entered and only numbers are accepted
    cy.get('@principalAndInterest').click()
    cy.get('@errorMessage')
      .contains(`'${this.input.invalidString}' is not a valid number`)
  })

  it('correct error shows for no value', function() {
    // clears out the interest rate field
    cy.get('@interestRate').clear()
    // checks the error message, it should error because no value was entered
    cy.get('@principalAndInterest').click()
    cy.get('@errorMessage')
      .contains('Invalid value')
  })

  it('correct error shows for max value', function() {
    // clicks on the interest rate input and types in new rate using enterValue function
    cy.enterValue('@interestRate', this.input.maxValue)
    // checks the error message, it should error because only numbers equal or less than 100 are valid
    cy.get('@principalAndInterest').click()
    cy.get('@errorMessage')
      .contains('Rate must be less than or equal to 100')
  })

  it('correct error shows for min value', function() {
    // clicks on the interest rate input and types in new rate using enterValue function
    cy.enterValue('@interestRate', this.input.minValue)
    // checks the error message, it should error because only numbers equal or greater than 0 are valid
    cy.get('@principalAndInterest').click()
    cy.get('@errorMessage')
      .contains('Rate must be greater than or equal to 0')
  })

  it('correct error shows for special character', function() {
    // clicks on the interest rate input and types in new rate using enterValue function
    cy.enterValue('@interestRate', this.input.specialChar)
    // checks the error message, it should error because special char was entered and only numbers are accepted
    cy.get('@principalAndInterest').click()
    cy.get('@errorMessage')
      .contains(`'${this.input.specialChar}' is not a valid number`)
  })
})