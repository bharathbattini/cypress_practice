// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import 'cypress-plugin-api';
import 'cypress-iframe';
import 'cypress-mochawesome-reporter/register';
import "cypress-real-events";
import 'image-to-base64'
// import 'neat-csv';

Cypress.Commands.add('login', (username, password) => {


    cy.visit('https://ucl-uat.switchmyloan.in');
    cy.get('#login_email').type(username);
    cy.get('#login_password').type(password);
    cy.get('button.btn').contains(' Login').click();



});


