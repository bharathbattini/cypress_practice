describe.only('Trigger usage', () => {

    beforeEach(() => {

        Cypress.on('uncaught:exception', (err) => {
            // returning false here prevents Cypress from failing the test
            console.log('Cypress detected uncaught exception: ', err);
            return false;
        });


    });

    it('Drag and Drop', () => {

        cy.visit('https://demoqa.com/droppable/');
        cy.get('#draggable').drag('#droppable', { force: true });
        cy.wait(2000);
        cy.get('.ui-state-highlight').invoke('text').then((text) => {

            expect(text).to.equal('Dropped!');

        });

    });

});