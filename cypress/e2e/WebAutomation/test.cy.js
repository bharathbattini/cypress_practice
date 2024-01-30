
describe('Atriina Landing Page - Header section', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
        cy.visit('/')
    });

    it('Atriina Landing Page - About Us', () => {

        cy.get('#menu-item-5061').click().url().should('contain', 'about-us');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Business Solutions', () => {

        cy.get('#menu-item-16331').click().url().should('contain', '#');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Services', () => {

        cy.get('#menu-item-5064').click().url().should('contain', 'services');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Case Study', () => {

        cy.get('#menu-item-5065').click().url().should('contain', 'case-study');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Blog', () => {

        cy.get('#menu-item-12910').click().url().should('contain', 'blogs');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Contact Us', () => {

        cy.get('#menu-item-5068').click().url().should('contain', 'contact-us');
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Get Quote', () => {

        cy.get('div > a').parents('.elementor-widget-container').eq(1).click();
        cy.go('back').url().should('eq', 'https://atriina.com/');

    });

    it('Atriina Landing Page - Contact Us', () => {

        cy.get('div > button').eq(0).click().url().should('eq', 'https://atriina.com/');

    });

});