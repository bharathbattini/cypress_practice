import HomePageHeader from "../../pages/homepage_header";
import HomePage from "../../pages/homepage";
const hp = new HomePageHeader();
const homepage = new HomePage();
describe('Page Object Model Practice', () => {

    beforeEach(() => {

        cy
            .visit('/');
        Cypress
            .on('uncaught:exception', (err) => {
                // returning false here prevents Cypress from failing the test
                console
                    .log('Cypress detected uncaught exception: ', err);
                return false;
            });
    });

    it('Home Page Header Functionality', () => {

        // hp.hoverAboutUs();
        hp
            .headerAboutUs();
        hp
            .headerLogoClick();
        cy
            .wait(5000);
        hp
            .element.businessSolutionElement();
        hp
            .headerLogoClick();
        hp
            .element.servicesElement();
        hp
            .headerLogoClick();
        hp
            .element.caseStudyElement();
        hp
            .headerLogoClick();
        hp
            .element.blogElement();
        hp
            .headerLogoClick();
        hp
            .element.contactUsElement();
        hp
            .headerLogoClick();
        cy
            .scrollTo('bottom');

    });

});

describe('HomePage e2e Testscript', () => {

    beforeEach(() => {

        cy
            .visit('/');
        Cypress
            .on('uncaught:exception', (err) => {
                // returning false here prevents Cypress from failing the test
                console
                    .log('Cypress detected uncaught exception: ', err);
                return false;
            });

    });
    it('HomePage with Get Quote', () => {

        cy
            .intercept({
                method: 'POST',
                url: 'https://va.tawk.to/v1/session/start',
            }).as('failedApi');
            
        cy
            .wait('@failedApi')
            .its('response.StatusCode')
            .should('eq', undefined);
        /* ==== Generated with Cypress Studio ==== */
        cy
            .get('#menu-item-5062 > a').click({ force: true });
        cy
            .get('#menu-item-16332 > a').click({ force: true });
        /* ==== End Cypress Studio ==== */
    });

});