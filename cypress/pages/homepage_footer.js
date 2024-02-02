class HomePageFooter {

    element = {

        //Footer Section - Services Section - Sub Links

        footerServicesDT: () => cy.get('div[data-id="d8ee192"]').contains('Digital Transformation'),
        footerServicesPD: () => cy.get('div[data-id="d8ee192"]').contains('Product Development'),
        footerServicesMobility: () => cy.get('div[data-id="d8ee192"]').contains('Mobility'),
        footerServicesCS: () => cy.get('div[data-id="d8ee192"]').contains('Cloud Services'),
        footerServicesEI: () => cy.get('div[data-id="d8ee192"]').contains('ERP Implementation'),
        footerServicesLM: () => cy.get('div[data-id="d8ee192"]').contains('Legacy Modernization'),
        footerServicesSD: () => cy.get('div[data-id="d8ee192"]').contains('Software Development'),

        footerAboutUs: () => cy.get('.elementor-element-373364a[data-id= "373364a"]')
            .contains('About Us'),
        footerPortfolio: () => cy.get('.elementor-element-373364a[data-id= "373364a"]')
            .contains('Portfolio'),
    }

}

export default HomePageFooter