/// <reference types="cypress" />

beforeEach(() => {
    cy.visit('https://playground.bondaracademy.com');
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
});

it('Hello world 1', () => {

    // by Tag
    cy.get('input');

    // by ID
    cy.get('#inputEmail1');

    // by Class
    cy.get('.input-full-width');

    // by Attribute
    cy.get('[fullwidth]');

    // by Attribute with value
    cy.get('[placeholder="Email"]');

    // by entire class value
    cy.get('.input-full-width.size-medium.status-basic.shape-rectangle.nb-transition');

    // combine multiple attributes.
    cy.get('[placeholder="Email"][fullwidth]'); //No spaace between
    cy.get('input[placeholder="Email"]');

    //find by data-cy attribue
    cy.get('[data-cy="inputEmail1"]')
});

it.only('Cypress Locator Methods', () => {
    //get() - to find elements on the page
    //find() - to find ONLY child elements
    //contains() - to find web elements by text

    cy.contains('Sign in') //method "contains" is case sensitive from the DOM. Can disable with {matchCase: false}
    cy.contains('[status="warning"]', 'Sign in')
    cy.contains('nb-card', 'Horizontal form').find('button')
     cy.contains('nb-card', 'Horizontal form').contains('Sign in')
})