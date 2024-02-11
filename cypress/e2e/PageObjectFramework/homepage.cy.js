import HomePageFooter from "../../pages/homepage_footer";
const hpf = new HomePageFooter();

describe('Validate and Verify The Landing Page with All the Headers', () => {

    beforeEach('Open the BaseUrl and Get the Expections', () => {
        cy.log(Cypress.version);
        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
        cy.visit('/');
    })

    it('Home Page - Get Quote Verification', () => {

        // cy.get('h3[class="elementor-icon-box-title"]').eq(0).scrollIntoView();
        // cy.get('h3[class="elementor-icon-box-title"]').eq(0).find('span').invoke('text').then((text) => {

        //     cy.log(text);
        // });

        // Through Cypress - #ld-fancy-heading-65c18159c1d82 > .ld-fh-element
        // Through Manual - #ld-fancy-heading-65c479a350a20 > .ld-fh-element
        cy.get('#ld-fancy-heading-65c18159c1d82 > .ld-fh-element').invoke('text').then((goal) => {

            cy.log(goal);
            expect(goal).to.equal(hpf.atrinaGoal);

        });

    });

});