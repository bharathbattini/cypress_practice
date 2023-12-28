/// <reference types="cypress" />

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
        cy.title('eq', '1 Finance');

        // Unique attribute can be fetched by using . && 
        // multiple attribute with same name use first and last method or eq with index

        cy.get('.download_download-btn__ebsp4').first().click();
        cy.get('#DownloadAppModal_close__GJWVt').click();
        cy.get('a[href="/calculator"]').eq(0).click();
        cy.go('back');
        cy.title('eq', '1 Finance');

        //Attribute which starts with, end with and contains with can write in the below syntax 
        //tagname[att^="attval"] replace ^ with $ or *
        cy.get('a[href^="/product"]').eq(0).click();
        cy.get('a[href$="guide"]').eq(0).click();
        cy.get('a[href*="magazine"]').eq(0).click();

    });

    it('Selectors using ID', () => {

        //selectors using ID, using # we can perform the action on ID
        cy.visit('https://cypress.io');
        cy.get('#dropdownProduct').click();

    });

    it.only('Selectors using Contains and Mouseover', () => {

        cy.visit('https://1finance.co.in');
        //selectors using contains, using invoke method we can hover the mouse
        cy.contains('About').invoke('show').click();
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

    it('File Upload in Cypress', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        //attachFile will attach the file in fixtures
        cy.get('#file-upload').attachFile('1financelogo.png');
        cy.get
    });

});