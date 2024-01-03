import HomePageHeader from "../../pages/homepage_header";
import HomePage from "../../pages/homepage";
const hp = new HomePageHeader();
const homepage = new HomePage();
describe('Page Object Model Practice', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    });

    it('Home Page Header Functionality', () => {

        cy.visit('https://atriina.com');
        // hp.hoverAboutUs();
        hp.headerAboutUs();
        hp.headerLogoClick();
        cy.wait(5000);
        hp.element.businessSolutionElement();
        hp.headerLogoClick();
        hp.element.servicesElement();
        hp.headerLogoClick();
        hp.element.caseStudyElement();
        hp.headerLogoClick();
        hp.element.blogElement();
        hp.headerLogoClick();
        hp.element.contactUsElement();
        hp.headerLogoClick();

    });

});

describe.only('HomePage e2e Testscript', () => {

    beforeEach(() => {
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    });
    it('HomePage with Get Quote', () => {

        cy.visit('https://atriina.com');
        homepage.getQuoteButton();


    });

});