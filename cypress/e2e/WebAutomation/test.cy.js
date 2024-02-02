
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

    it('Atriina Landing Page - Header - About Us', () => {

        cy.get('#primary-nav').contains('About Us').click().url().should('contain', 'about-us');
        cy.get('[alt="Atriina"]').eq(0).click({ force: true }).url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Business Solutions', () => {

        cy.get('#primary-nav').contains('Business Solutions').click().url().should('contain', '#');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Services', () => {

        cy.get('#primary-nav').contains('Services').click().url().should('contain', 'services');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Case Study', () => {

        cy.get('#primary-nav').contains('Case Study').click().url().should('contain', 'case-study');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Blog', () => {

        cy.get('#primary-nav').contains('Blog').click().url().should('contain', 'blogs');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Contact Us', () => {

        cy.get('#primary-nav').contains('Contact Us').click().url().should('contain', 'contact-us');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Get Quote', () => {

        cy.get('#modal-btn > .elementor-widget-container > .elementor-button')
            .click().url().should('eq', 'https://atriina.com/');
        cy.reload().url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Header - Contact Us', () => {

        cy.get('div > button').eq(0).click().url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Footer - About Us', () => {

        cy.get('.elementor-icon-list-text').contains('About Us').click();

    });

    it('Atriina Landing Page - Footer - Portfolio', () => {

        cy.get('.elementor-icon-list-text').contains('Portfolio')
            .click().url().should('contain', 'case-study');
        cy.title().should('contain', "Atrina's Transformative Case Studies");
    });
    it.only('Atriina Landing Page - Footer - Portfolio', () => {

        cy.get('.elementor-element-373364a[data-id= "373364a"]')
            .contains('About Us').click().url().should('contain', 'about-us')
        cy.wait(2000);

    });




});