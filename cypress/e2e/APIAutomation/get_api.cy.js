
const mobileNumber = '8898782353';

describe('Get API End to End Scripting', () => {

    it('Get API with Positive Case', () => {

        cy.api({

            url: `${Cypress.env('baseUrl')}api/customer/customer-profile`,
            method: 'GET',
            headers: {

                authorization: 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkzMDE0MkI5RjkyRDU2NUU0MTg2OEE5MDk5M0Y4MjI2IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE3MDQxNjkwMDAsImV4cCI6MTcwNDE3MjYwMCwiaXNzIjoiaHR0cHM6Ly9uZXdxYS5hY2NvdW50Lm9uZWZpbi5hcHAiLCJjbGllbnRfaWQiOiJDdXN0b21lckFwcExvZ2luQ2xpZW50Q3JlZGVudGlhbHMiLCJzdWIiOiJhNWFkMTkxNi0xY2JmLTQ1NDQtYTMyMC0xZjZlZjJjNGQ5NmYiLCJhdXRoX3RpbWUiOjE3MDQxNjkwMDAsImlkcCI6ImxvY2FsIiwiaWF0IjoxNzA0MTY5MDAwLCJzY29wZSI6WyJjdXN0b21lci1sb2dpbiJdLCJhbXIiOlsicHdkIl19.VE175pLYtT9rtmU5kYjOWKbg9eLC61EkonA26heyfDjphVc4REm5_HkcWOR2wto09GoovrVBLCNvmm8Cy_WPH8RoXnlpRHzyDetAU_ghUfQAqSJcpR6qyKY5702WeRtq5v8vS87FI6zRQznkiccU8eQgYNvbxD_LQrjJWYdOebuErNsubQGEZAAa3puqlY0unoNRLQ2LoB9RlojayQf1f5OC2x-XzLNtb5VqM6rff0pbCwyu1Td2Aq15bLSkzSD4omLuMRMFVmesz2P-2qqqwJI2S9Je_bdmZA2Y_McM-NBdO0daqJwccV_4Od3hJINe8Kehm8wz21ia_Vo3D4klLw',

            }
        }).then((res) => {

            expect(res.status).to.be.eq(200);

        });

    });

});