describe('Trigger usage', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
        cy.visit('https://demoqa.com/droppable/');

    });

    it('Mouseover', () => {
        cy.visit('https://1finance.co.in/calculator/hra-exemption');

        cy.get('span.calculators_hra-form-question-icon__f_ReO').trigger('mouseover');


    });

    it('Mousedown', () => {

        cy.get('h1').contains('1 Finance Approach').trigger('mousedown');

    });


   
});