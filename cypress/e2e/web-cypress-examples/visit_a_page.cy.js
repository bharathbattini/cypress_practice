describe('Open a website and perform click operations', () => {

    beforeEach('Open the BaseUrl and Get the Expections', () => {
        cy.log(Cypress.version);
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
        cy.visit('https://docflix-internal.web.app/home');
        cy.clearAllCookies();

    });
    it('Visit a page', () => {

        cy.contains('ENTER NOW').first().click();
        cy.get('#phone').type('8898782353');
        cy.contains('Submit').click();



    });

});
