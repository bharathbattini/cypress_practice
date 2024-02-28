
describe.only('Atriina Landing Page - Header section', () => {


    beforeEach(() => {

        cy.log(Cypress.version);

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
        cy.visit('/')
    });

    it('test', () => {

        cy.get('.elementor-social-icons-wrapper > .elementor-grid-item > a.elementor-social-icon-instagram').last().invoke('removeAttr', 'target').click();

    })
});

