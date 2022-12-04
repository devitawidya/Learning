//Open browser and direct to specific URL
describe('[Test Scenario] Login', () => {
    it('[TC001] Input valid username and password - Positive Case', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('.login')
          .find('[name="username"]').type(`${Cypress.env('username')}`)
        cy.get('.login')
          .find('[name="password"]').type(`${Cypress.env('password')}`)
        cy.get('.login')
          .find('[type="submit"]').click()
        cy.url().should('include', '/overview')
          
    })

    it('[TC002] Input valid username and password - Negative Case', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get('.login')
          .find('[name="username"]').type('invalid')
        cy.get('.login')
          .find('[name="password"]').type('invalid')
        cy.get('.login')
          .find('[type="submit"]').click()
        cy.url().should('include', '/login')
        cy.contains('Error!')
          
    })

    it('[TC003] Try forgot password - Negative Case', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.contains('Forgot login info?') .click()
        cy.url().should('include', '/lookup')
        cy.get('#lookupForm').find('[type="submit"]').click()
        cy.contains('is required.')
    })

    it('[TC004] Try forgot password - Positive Case', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.contains('Forgot login info?') .click()
        cy.url().should('include', '/lookup')
        cy.get('#lookupForm').find('[id="firstName"]').type('admin')
        cy.get('#lookupForm').find('[id="lastName"]').type('12345')
        cy.get('#lookupForm').find('[id="address.street"]').type('jakarta')
        cy.get('#lookupForm').find('[id="address.city"]').type('jakarta')
        cy.get('#lookupForm').find('[id="address.state"]').type('indonesia')
        cy.get('#lookupForm').find('[id="address.zipCode"]').type('12345')
        cy.get('#lookupForm').find('[id="ssn"]').type('12345')
        cy.get('#lookupForm').find('[type="submit"]').click()
        cy.contains(`${Cypress.env('username')}`)
        cy.contains(`${Cypress.env('username')}`)
        
    })
})