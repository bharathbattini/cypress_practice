
describe('Checkboxes using Cypress', () => {

    beforeEach('Go to website', () => {
        cy.visit('https://total-qa.com/checkbox-example/');
    })
    it('Check the first Option', () => {

        cy.get('[type="checkbox"]')
            .first().check();

    });

    it('Check the last Option', () => {

        let lastOpt = cy.get('[type="checkbox"]')
            .last().check();

        expect(lastOpt).to.be.checked;

    });

    it('Check the All Option', () => {

        cy.get('[type=checkbox]')
            .check();
    });

    it('Check the option using word', () => {

        cy.get('[type="checkbox"]')
            .invoke('text').contains('JMETER').check();

    });

    it('Check the Second last Option', () => {

        cy.get('[type=checkbox]')
            .eq(-2).check();


    });
});