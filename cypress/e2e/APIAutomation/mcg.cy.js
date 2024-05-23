const url = 'https://boffice.marwadionline.com/MSFLThirdPartyAPI/OneFinance/CheckPANExist';
const userPan = 'CHIPB2816E';

describe('MCG Check', () => {

    it('Check PAN', () => {

        cy.api({

            url: url,
            qs: {
                pan: userPan
            },
            headers: {

                'Authorization': 'Basic T25lRmluYW5jZTpNc2ZsMSRGaW5hbmNlQDEyMw=='
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

});