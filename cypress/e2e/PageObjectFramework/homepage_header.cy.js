import links from "../../pages/webpage_links";

describe('Atriina Landing Page - Header section', () => {


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

        cy.get('#primary-nav').contains('About Us').click().url().should('eq', links.aboutUsUrl);
    });

    it('Atriina Landing Page - Header - Business Solutions', () => {

        cy.get('#primary-nav').contains('Business Solutions').click().url().should('eq', links.footerLogoUrl);


    });

    it('Atriina Landing Page - Header - Services', () => {

        cy.get('#primary-nav').contains('Services').click().url().should('eq', links.servicesUrl);


    });

    it('Atriina Landing Page - Header - Case Study', () => {

        cy.get('#primary-nav').contains('Case Study').click().url().should('eq', links.caseStudyUrl);

    });

    it('Atriina Landing Page - Header - Blog', () => {

        cy.get('#primary-nav').contains('Blog').click().url().should('eq', links.blogUrl);

    });

    it('Atriina Landing Page - Header - Contact Us', () => {

        cy.get('#primary-nav').contains('Contact Us')
            .click().url().should('eq', links.contactUsUrl);

    });

    it('Atriina Landing Page - Header - Get Quote', () => {

        cy.get('#modal-btn > .elementor-widget-container > .elementor-button')
            .click().url().should('eq', links.url);

    });

    it('Atriina Landing Page - Header - Contact Us', () => {

        cy.get('div > button').eq(0).click().url().should('eq', links.url);

    });

    describe.only(('Sub Menus of About Us'), () => {

        it('Our Team', () => {

            cy.get('#primary-nav').contains('About Us', { timeout: 2000 }).realHover();
            cy.get('li#menu-item-5063').contains('Our Team').click({ force: true });
            cy.url().should('eq', links.ourTeamUrl);

        });

        it('Life At Atrina', () => {

            cy.get('#primary-nav').contains('About Us', { timeout: 2000 }).realHover();
            cy.get('#menu-item-5062').contains('Life at Atrina').click({ force: true });
            cy.url().should('eq', links.lifeAtAtrinaUrl);

        });

        it('Careers', () => {

            cy.get('#primary-nav').contains('About Us', { timeout: 2000 }).realHover();
            cy.get('#menu-item-6522').contains('Careers').click({ force: true });
            cy.url().should('eq', links.careerUrl);

        });

    });



});