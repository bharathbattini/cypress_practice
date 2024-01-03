describe('Cypress| Repeat and Rerun the testcases', () => {

    Cypress._.times(2, (k) => {
        it('Navigate Back and Forward in Cypress with Repeat', () => {

            cy.visit('https://1finance.co.in');
            cy.title('eq', '1 Finance');
            cy.get('#header > div > div > div > a:nth-child(1)').click();
            cy.wait(2000);
            cy.go('back');
            cy.title('eq', '1 Finane');
            cy.go('forward');

        });

    });

    it('Navigate Back and Forward in Cypress with Rerun', { retries: 1 }, () => {

        cy.visit('https://1finance.co.in');
        cy.title('eq', '1 Finance');
        cy.get('#header > div > div > div > a:nth-child(1)').click();
        cy.wait(2000);
        cy.go('back');
        cy.title('eq', '1 Finane')
        cy.go('forward');

    });


});