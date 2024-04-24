const username = 'administrator';
const password = 'Admin@#4321';
describe('Cypress Session', () => {

    beforeEach(('Login with Sessions'), () => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });

        cy.session('login', () => {

            cy.login(username, password);
            cy.document()
                .its('cookie')
                .should('exist');

            let ls = cy.getAllLocalStorage();
            cy.log(ls);
        });

    });

    it.skip('Login with Credentials', () => {
        cy.visit('/app');
        cy.get('#navbar-search').type('User Token List');

    });

    it.skip('Login with Credentials', () => {

        cy.get('#navbar-search').type('User Token');

    });
})