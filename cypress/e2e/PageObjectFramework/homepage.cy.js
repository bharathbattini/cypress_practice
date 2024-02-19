import HomePage from "../../pages/homepage";
import links from "../../pages/webpage_links";
const homepage = new HomePage;
const hpElement = homepage.element;
const hpHeadings = homepage.headings;


describe.only('Validate and Verify The Landing Page with All the Headers', () => {

    beforeEach('Open the BaseUrl and Get the Expections', () => {
        cy.log(Cypress.version);
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
        cy.visit('/');
    });

    it('Home Page - Get Quote Verification', () => {
        cy.get('h2 > .txt-rotate-keywords').find('.txt-rotate-keyword',).should('have.length', '5');
        hpElement.getQuoteButtonElement().last().click().url().should('eq', links.contactUsUrl);


    });

    it('Home Page - About Us Atrina', () => {

        hpElement.getHeadingofHomePage().contains(hpHeadings.aboutUs)
            .then((text) => { expect(text).to.have.text(hpHeadings.aboutUs) });

        cy.get('#ld-fancy-heading-65cdf0a9ab781 > h2.ld-fh-element').scrollIntoView()
            .then((text) => { expect(text).to.have.text(hpHeadings.aboutUsSubHeading) })
        hpElement.getReadMoreButtonElement().click().url().should('eq', links.aboutUsUrl);
    });

});