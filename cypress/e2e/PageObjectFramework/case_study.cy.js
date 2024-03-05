import links from "../../pages/webpage_links";
let subMenu = [];
let languages = ['Node.js', 'Python', 'Java', '.NET']
describe('Case Study : Atrina Technologies', () => {

    beforeEach('Open the BaseUrl and Get the Expections', () => {

        cy.log(Cypress.version);

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });

        // cy.visit('/');

    })

    describe('Case study on 1 Finance', () => {


        // beforeEach(() => {

        //     cy.visit(links.caseStudyUrl)

        // });

        it('Verify the Atrina X 1Finance', () => {

            cy.get('h1.elementor-heading-title').should('be.visible').invoke('text').then((text) => {

                expect(text).to.be.eq(' Transformative Case StudiesAtrina\'s Digital Journey');
            });
            cy.get('a.lqd-pf-overlay-link').siblings('[href*="onefinance"]').click();

        });

        it.only('Dropdown Test', () => {

            cy.visit('https://playwright.dev/');

            languages.forEach(ele => {

                cy.get('.dropdown--hoverable').realHover().find('ul').should('be.visible');
                cy.get('.dropdown__link').contains(ele).click();

            })

        });

    });

});