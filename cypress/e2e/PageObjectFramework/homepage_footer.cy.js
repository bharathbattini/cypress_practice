import HomePageFooter from "../../pages/homepage_footer";

const hpf = new HomePageFooter();
const Elements = hpf.element;

describe('Atrina Website Footer Links', () => {

    beforeEach('Open the BaseUrl and Get the Expections', () => {

        cy.log(Cypress.version);

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });

        cy.visit('/')

    })

    describe.only('Logo, Goal and Social Media Links', () => {



        it('Atrina Goals', () => {

            cy.scrollTo('bottomLeft');
            Elements.footerAtrinaGoal();

        });


    });
    describe('Services Section', () => {

        it('Digital Transformation', () => {

            hpf.element.footerServicesDT().click().url().should('contain', 'digital-transformation-agency');

        });
        it('Product Development', () => {

            hpf.element.footerServicesPD().click().url().should('contain', 'software-product-development');

        });
        it('Mobility', () => {

            hpf.element.footerServicesMobility().click().url().should('contain', 'enterprise-mobility-services');

        });

        it('Cloud Services', () => {

            hpf.element.footerServicesCS().click().url().should('contain', 'cloud-services');

        });
        it('ERP Implementation', () => {

            hpf.element.footerServicesEI().click().url().should('contain', 'erp-implementation');

        });
        it('Legacy Modernization', () => {

            hpf.element.footerServicesLM().click().url().should('contain', 'legacy-modernization-services');

        });
        it('Software Development', () => {

            hpf.element.footerServicesSD().click().url().should('contain', 'software-development');

        });

    });

    describe('Contact Us and Details', () => {

        it('About Us', () => {

            Elements.footerAboutUs().click().url().should('contain', 'about-us');

        });

        it('Our Team', () => {

            cy.get('#primary-nav').contains('About Us').realHover();
            cy.get('#menu-item-5063').contains('Our Team').click({ force: true });
            cy.url().should('contain', 'our-team');

        });


    });

})