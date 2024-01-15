describe('Cypress Practice and Implementation', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });
    });

    it('Selectors using Attributes', () => {

        cy.visit('https://1finance.co.in');

        //Title 
        cy.title('eq', '1 Finance');

        // Unique attribute can be fetched by using . && 
        // multiple attribute with same name use first and last method or eq with index
        cy.get('.download_download-btn__ebsp4').first().should('be.visible').click();
        cy.get('#DownloadAppModal_close__GJWVt').should('be.visible').click();
        cy.get('a[href="/calculator"]').eq(0).click();
        cy.go('back');

        //Attribute which starts with, end with and contains with can write in the below syntax 
        //tagname[att^="attval"] replace ^ with $ or *
        cy.get('a[href^="/product-scoring"]').eq(0).click();
        cy.get('a[href$="guide"]').eq(0).click();
        cy.get('a[href*="magazine"]').eq(0).click();

    });

    it('Selectors using ID', () => {

        //selectors using ID, using # we can perform the action on ID
        cy.visit('https://cypress.io');
        cy.get('#dropdownProduct').click();

    });

    it('Selectors using Contains and Mouseover', () => {

        cy.visit('https://1finance.co.in');
        // selectors using contains, using invoke method we can hover the mouse
        cy.contains('About').invoke('show').click();
        cy.wait(2000);
        cy.contains('Our story').click();
        cy.wait(2000);
        cy.go('back');

    });

    it('ScrollTo && ScrollIntoView', () => {

        cy.visit('https://1finance.co.in');

        // Scroll to a specific position
        cy.scrollTo('bottom');
        cy.scrollTo('center');
        cy.scrollTo('top');

        //Scroll an element into view.
        cy.get('.download_download-btn__ebsp4').eq(1).scrollIntoView();
        cy.wait(2000);

    });

    it('Navigate Back and Forward in Cypress', () => {

        cy.visit('https://1finance.co.in');
        cy.title('eq', '1 Finance');
        cy.get('#header > div > div > div > a:nth-child(1)').click();
        cy.wait(2000);
        cy.go('back');
        cy.title('eq', '1 Finance');
        cy.go('forward');

    });

    it('Type in a Textbox', () => {

        cy.visit('https://1finance.co.in/product-scoring');
        cy.get('#searchContainer').type('Bharath');

    });

    it('File Upload in Cypress', { timeout: 5000 }, () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('h3').should('have.text', 'File Uploader');

        //attachFile will attach the file in fixtures
        cy.get('#file-upload').attachFile('1financelogo.png');

        cy.get('#file-submit').click({ timeout: 5000 });
        cy.get('h3').should('have.text', 'File Uploaded!');
        cy.get('.large-4 > div > a').click();
    });

    it('How to open a link in a same browser', () => {

        cy.visit('/');
        cy.wait(2000);
        cy.scrollTo('bottomLeft');
        // by using in invoke method we can remove attribute target
        cy.get('div>div>span>a.elementor-icon.elementor-social-icon.elementor-social-icon-linkedin-in.elementor-repeater-item-5cbbc40').eq(1).invoke('removeAttr', 'target').click();
        cy.go('back');
        cy.url().should('include', 'atriina');
        //by changing/modifying the target attribute to _self
        cy.get('div>div>span>a.elementor-icon.elementor-social-icon.elementor-social-icon-linkedin-in.elementor-repeater-item-5cbbc40').eq(1).invoke('attr', 'target', '_self').click();
        cy.wait(2000);

    });


});