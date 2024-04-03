describe('Web App Open', () => {

    beforeEach('Open the BaseUrl and Get the Expections', () => {
        cy.log(Cypress.version);

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    });

    it('Login', () => {

        cy.visit('https://auth.abtasty.com/login');
        cy.get('#email').click().type('youremail@gmail.com');

    });
});