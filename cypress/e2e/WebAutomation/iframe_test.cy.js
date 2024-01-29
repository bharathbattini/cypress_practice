describe('Iframe Test', () => {

    it.skip('IFrame Test on 1 Finance Our Story', () => {

        cy.visit('https://1finance.co.in/story');
        cy.frameLoaded('[class="osp-youtube-video-gtm"]').scrollIntoView().should('be.visible');
        cy.iframe().get('[title="Play"]').click();
        cy.wait(10000);
    });

});