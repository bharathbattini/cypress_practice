let stateUrl = 'https://dev.myhector.com/api_dev/master/excel/upload/state';
const tokenCode = 'ee093ab4-e916-4a94-8ed2-63e9fc1c9fbc';
const appInstanceToken = '7af21cd1-5b89-7b86-53b8-7713a129df33';

describe.skip('File Upload - State', () => {


    it('Successful File Upload with Valid Inputs', () => {
        const filePath = '/Users/bharath/Downloads/State.xlsx';

        let formData = {
            user_code: 'b04e3bba-3e32-48d5-ab6e-bcf5ead6183d',
            N: filePath
        }
        const fileName = 'State.xlsx';
        const fileMimeType = 'text/plain';


        cy.api({
            method: 'POST',
            url: stateUrl,
            failOnStatusCode: false,
            body: formData,
            headers: {
                token: tokenCode,
                Appinstancecode: appInstanceToken
            }
        }).then((response) => {

            expect(response.status).to.be.eq(200);

        });

    });

});

describe('Testing the API', function () {

    it('Receives valid FormData and proccesses the information correctly',
        function () {

            /*
            The reason why this test may look a bit tricky is because the backend endpoint is expecting the 
            submission of a web Form (multipart/form-data), not just data within a POST. The "cy.request()" 
            command doesn't support sending a web Form as a body in a POST request, so the test uses a support 
            command that has been created to perform a genuine XMLHttpRequest where a web Form can be placed.
            */

            //Declarations
            const fileName = 'State.xlsx';
            const method = 'POST';
            const url = 'https://dev.myhector.com/api_dev/master/excel/upload/state';
            const headers = {

                token: tokenCode,
                Appinstancecode: appInstanceToken

            }

            const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
            const inputContent2 = 'b04e3bba-3e32-48d5-ab6e-bcf5ead6183d';

            // Get file from fixtures as binary
            cy.fixture(fileName, 'binary').then((excelBin) => {

                // File in binary format gets converted to blob so it can be sent as Form data
                Cypress.Blob.binaryStringToBlob(excelBin, fileType).then((blob) => {

                    // Build up the form
                    const formData = new FormData();
                    formData.set('file', blob, fileName); //adding a file to the form
                    formData.set('input2', inputContent2); //adding a plain input to the form

                    // Perform the request
                    cy.form_request(method, url, headers, formData, function (response) {
                        expect(response.status).to.eq(200);
                    });

                })

            })

        });
});
