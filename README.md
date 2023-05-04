# Testing for Zillow mortgage rate calculator

This repo contains cypress automation and xlsx test cases for the interest rate input on the Zillow mortgage rate calculator.

## Steps to run

- Clone the `mortgage-rate-calc` repo
- Verify you have cypress and npm installed
- In terminal, cd into the projects root folder and run `npx cypress open`
- A cypress browser window should open up
- Click E2E Testing
- Select Chrome and click 'Start E2E Testing in Chrome'
- Click `Specs` in the nav menu of the cypress browser window
- Click on the `rate-calc.cy.ts` file in `cypress/e2e`
- The tests should kick off and can monitored in the cypress browser window

## Running the tests headless

- Follow the above steps to clone the repo
- In terminal, cd into the projects root folder and run `npx cypress run`
- The tests should run headless in terminal