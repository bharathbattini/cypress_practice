
describe('', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    });

    it('MoveHover on About Us', () => {

        cy.visit('https://atriina.com');
        cy.contains('About Us').invoke('show').realHover();

    });


});