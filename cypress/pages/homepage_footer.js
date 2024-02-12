import links from '../pages/webpage_links'

class HomePageFooter {

    atrinaGoal = ' ATRINA is united by a common goal:\nTo simplify business through technology which helps our customers achieve exponential growth in the industry';
    actualAddress = 'P3, C Wing, Kailash Business Park, Park Site Rd, HMPL Surya Nagar, Vikhroli West, Mumbai, Maharashtra 400079';
    actualContactEmail = 'contact@atriina.com';
    actualContactNumber = '+91 89765 75888';
    

    element = {

        //Footer Section - Logo, Goal and Social Links
        footerAtrinaGoal: () => cy.get('#ld-fancy-heading-65bbe0f297397 > .ld-fh-element'),

        //Footer Section - Services Section - Sub Links
        footerServicesDT: () => cy.get('div[data-id="d8ee192"]').contains('Digital Transformation'),
        footerServicesPD: () => cy.get('div[data-id="d8ee192"]').contains('Product Development'),
        footerServicesMobility: () => cy.get('div[data-id="d8ee192"]').contains('Mobility'),
        footerServicesCS: () => cy.get('div[data-id="d8ee192"]').contains('Cloud Services'),
        footerServicesEI: () => cy.get('div[data-id="d8ee192"]').contains('ERP Implementation'),
        footerServicesLM: () => cy.get('div[data-id="d8ee192"]').contains('Legacy Modernization'),
        footerServicesSD: () => cy.get('div[data-id="d8ee192"]').contains('Software Development'),

        //Footer Section - Company - Sub Links
        footerAboutUs: () => cy.get('[data-id= "373364a"]').contains('About Us'),
        footerPortfolio: () => cy.get('[data-id= "373364a"]').contains('Portfolio'),
        footerCareers: () => cy.get('[data-id= "373364a"]').contains('Careers'),
        footerContactUs: () => cy.get('[data-id= "373364a"]').contains('Contact us'),
        footerBlogs: () => cy.get('[data-id= "373364a"]').contains('Blogs'),

    }

    clickOnAboutUs() {

        this.element.footerAboutUs().click().url().should('eq', links.aboutUsUrl);

    }

}

export default HomePageFooter