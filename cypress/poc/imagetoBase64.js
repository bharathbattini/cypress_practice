const fs = require('fs');

const base64pdf = fs.readFileSync('/Users/bharath/Documents/SML-UCL/cypress/fixtures/AadhaarV2.pdf', { encoding: 'base64' });
console.log(base64pdf);