describe('Dynamic Dropdown selection using Cypress', () => {

    it('Select using a unique word', () => {

        cy.visit('https://cleartrip.com', { headers: { "Accept-Encoding": "gzip,deflate" } });
        cy.get('.px-1.flex.pb-1').click();
        cy.get('[placeholder="Where from?"').click().clear().type('New').wait(2000);

        cy.get('.dropdown div.airport-code div').each(($ele, index, $list) => {

            cy.log($ele.text());
            if ($ele.text() === 'NYC') {
                cy.wrap($ele).click();
            }

        });

    });

});