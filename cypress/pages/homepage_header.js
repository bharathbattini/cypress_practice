class HomePageHeader {

    element = {

        headerLogoElement: () => cy.get('[alt = "Atriina"]'),
        aboutUsElement: () => cy.contains('About Us'),
        businessSolutionElement: () => cy.contains('Business Solutions').click(),
        servicesElement: () => cy.contains('Services').click(),
        caseStudyElement: () => cy.contains('Case Study').click(),
        blogElement: () => cy.contains('Blog').click(),
        contactUsElement: () => cy.contains('Contact Us').click(),
        
    }

    headerAboutUs() {

        this.element.aboutUsElement().click();
    }

    hoverAboutUs() {

        this.element.aboutUsElement().invoke('show').realHover();

    }

    headerLogoClick() {

        this.element.headerLogoElement().eq(0).click({ force: true });
    }

}

export default HomePageHeader;

