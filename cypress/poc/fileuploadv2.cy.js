const tokenCode = 'ee093ab4-e916-4a94-8ed2-63e9fc1c9fbc';
const appInstanceToken = '7af21cd1-5b89-7b86-53b8-7713a129df33';
let stateUrl = 'https://dev.myhector.com/api_dev/master/excel/upload/state';
const user_code = 'b04e3bba-3e32-48d5-ab6e-bcf5ead6183d';

describe('File Upload API using Form-data', () => {
  it('State API', () => {

    cy.fixture('State.xlsx', 'binary').then(file => {
      const blob = Cypress.Blob.binaryStringToBlob(file, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      const formData = new FormData();
      formData.append(file, blob, 'State.xlsx');
      // formData.push(user_code);

      cy.api({
        method: 'POST',
        url: stateUrl,
        failOnStatusCode: false,
        body: formData,
        headers: {
          'content-type': 'multipart/form-data',
          Token: tokenCode,
          Appinstancecode: appInstanceToken

        },
      }).then((response) => {
        expect(response.status).to.be.eq(200);
      });
    });
  });
});

