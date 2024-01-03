
const mobileNumber = '8898782353';

describe('POST API End to End Scripting', () => {

    it('Get API with Positive Case', () => {

        cy.api({

            url: `${Cypress.env('baseUrl')}api/v2/onboarding/request-for-otp`,
            method: 'POST',
            body: {

                "mobile_number": mobileNumber,
                "otp_autoread_string": 'QAAutomation',
                "app_version": "1.0.0",
                "device_platform": "Windows",
                "device_model": "iPhone20"
            }


        }).then((res) => {

            expect(res.status).to.be.eq(200);

        });

    });

});