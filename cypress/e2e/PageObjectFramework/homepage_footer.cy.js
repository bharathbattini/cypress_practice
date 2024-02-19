import HomePageFooter from "../../pages/homepage_footer";
import links from "../../pages/webpage_links";
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

        cy.visit('/');

    })

    describe('Logo, Goal and Social Media Links', () => {

        it('Footer Logo', () => {
            cy.get('div[data-id="e2a61f9"] > .elementor-widget-container')
                .find('a').click()
                .url().should('eq', links.footerLogoUrl)

        });


        it('Atrina Goals', () => {

            cy.scrollTo('bottomLeft');
            cy.get('#ld-fancy-heading-65c64d05e0b11 > .ld-fh-element').invoke('text').then((goal) => {

                cy.log(goal);
                expect(goal).to.equal(hpf.atrinaGoal);

            });

        });
        it('Atrina at Facebook ', () => {

            // cy.get('div[data-id="f65f9b8"] > div > div > span').eq(0).find('a')
            cy.get('a.elementor-social-icon-facebook-f').eq(1)
                .invoke('removeAttr', 'target').click()
                .url().should('eq', links.facebookUrl);


        });
        it('Atrina at X ', () => {


            cy.get('a.elementor-social-icon-twitter').eq(1)
                .invoke('removeAttr', 'target').click()
                .url().should('eq', links.xUrl);

        });

        it('Atrina at Instagram ', () => {

            cy.get('a.elementor-social-icon-instagram').eq(1)
                .invoke('removeAttr', 'target').click()
                .url().should('eq', links.instagramUrl);
        });

        it('Atrina at linkedIn ', () => {

            cy.get('a.elementor-social-icon-linkedin-in').eq(1)
                .invoke('removeAttr', 'target').click()
                .url().should('eq', links.linkedInUrl);
        });


    });
    describe('Services Section', () => {

        it('Digital Transformation', () => {

            hpf.element.footerServicesDT().click().url().should('eq', `${links.digitalTransformationUrl}`);

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

    describe('Company Section', () => {

        it('About Us', () => {

            Elements.footerAboutUs().click().url().should('eq', links.aboutUsUrl);

        });

        it('Portfolio', () => {

            Elements.footerPortfolio().click().url().should('eq', links.caseStudyUrl);

        });

        it('Careers', () => {

            Elements.footerCareers().click().url().should('eq', links.careerUrl);

        });

        it('Contact Us', () => {

            Elements.footerContactUs().click().url().should('eq', links.contactUsUrl);

        });

        it('Blogs', () => {

        });

    });

    describe('Contact Us and Details', () => {

        it('Contact Us Card', () => {

            cy.get('#ld-fancy-heading-65c64d05c7093').find('h2').contains(' Contact Us');

        });

        it('Company Address', () => {

            var contactDetails = cy.get('div[data-id="6c21958"] > div > ul').children('.elementor-icon-list-item');
            contactDetails.eq(0).find('a > .elementor-icon-list-text').invoke('text').then((expectedAddress) => {

                expect(expectedAddress).to.eq(hpf.actualAddress);

            });
        });
        it('Company Email Address', () => {

            var contactDetails = cy.get('div[data-id="6c21958"] > div > ul').children('.elementor-icon-list-item');
            contactDetails.eq(1).find('a > .elementor-icon-list-text').invoke('text').then((expectedEmail) => {

                expect(expectedEmail).to.eq(hpf.actualContactEmail);

            });

        });

        it('Company Phone Number', () => {

            var contactDetails = cy.get('div[data-id="6c21958"] > div > ul').children('.elementor-icon-list-item');
            contactDetails.eq(2).find('a > .elementor-icon-list-text').invoke('text').then((expectNumber) => {

                expect(expectNumber).to.eq(hpf.actualContactNumber);

            });

        });



    });

    describe('Atrina Website License, Terms and Conditions and Privacy Policy', () => {



        it('Atrina License', () => {

            cy.get('h2.elementor-heading-title').last().invoke('text').then((license) => {

                expect(license).to.eq(' © 2023 Atrina LLP. All Rights Reserved');

            });

        });
        it('Terms and Conditions', () => {
            cy.get('a > .elementor-icon-list-text')
                .contains('Terms and Conditions').click().url().should('eq', links.termsAndConditionsUrl);

        });
        it('Privacy Policy', () => {

            cy.get('a > .elementor-icon-list-text')
                .contains('Privacy Policy').click().url().should('eq', links.privacyPolicyUrl);
            cy.get('h2').contains('Privacy Policy').should('have.class', 'elementor-heading-title');

        });

    });

});