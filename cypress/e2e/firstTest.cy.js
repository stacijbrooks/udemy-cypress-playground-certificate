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

it.only('Child Elements', () => {
    cy.contains('nb-card', 'Using the Grid').find('.row').find('button')
    cy.get('nb-card').find('nb-radio-group').contains('Option 1')
    cy.get('nb-card').find('nb-card-body [placeholder="Jane Doe"]')
})

it.only('Parent Elements', () => {
    cy.get('#inputEmail1').parents('form').find('button')
    cy.contains('nb-card', 'Using the Grid').parent().find('button')
    //stopped before the form so does not find button
    //cy.get('#inputEmail1').parentsUntil('form').find('button')
})

it.only('Cypress Chains', () => {
    cy.get('#inputEmail1')
        .parents('form')
        .find('button')
        .click()

    cy.get('#inputEmail1')
        .parents('form')
        .find('nb-radio')
        .first()
        .should('have.text', 'Option 1')
})

it.only('Reusing Locators', () => {
    // THIS WILL NOT WORK!!! DON'T DO LIKE THIS!!!
    // const inputEmail1 = cy.get('#inputEmail1')
    // inputEmail1.parents('form').find('button')
    // inputEmail1.parents('form').find('nb-radio')


    //Cypress Alias
    cy.get('#inputEmail1').as('inputEmail1')
    cy.get('@inputEmail1').parents('form').find('button')
    cy.get('@inputEmail1').parents('form').find('nb-radio')

    //Using Cypress then() method
    cy.get('#inputEmail1').then(inputEmail => {
        cy.wrap(inputEmail).parents('form').find('button')
        cy.wrap(inputEmail).parents('form').find('nb-radio')
    })
})
it.only('Extracting Values', () => {
    //using a JQuery Method
    cy.get('[for=exampleInputEmail1]').then(label => {
        let emailLabel = label.text()
        console.log(emailLabel)
    })

    //Using invoke command
    cy.get('[for=exampleInputEmail1]').invoke('text').then(emailLabel => {
        console.log(emailLabel)
    })
    cy.get('[for="exampleInputEmail1"]').invoke('text').as('emailLabel')

    //Invoke attribute value
    cy.get('#exampleInputEmail1').invoke('attr', 'class').then(classValue => {
        console.log(classValue)
    })

    //Invoke input field value
    cy.get('#exampleInputEmail1').type('hello@test.com')
    cy.get('#exampleInputEmail1').invoke('prop', 'value').then(value => {
        console.log(value)
    })
})

it.only('Assertions', () => {

    // Cypress assertion
    // Verify that the label's text is exactly "Email address"
    cy.get('[for="exampleInputEmail1"]')
        .should('have.text', 'Email address')

    // Use the jQuery element returned by .then()
    // and make an assertion with Chai's expect()
    cy.get('[for="exampleInputEmail1"]').then(label => {
        expect(label).to.have.text('Email address')
    })

    // Extract only the text from the label
    // invoke('text') returns the string "Email address"
    cy.get('[for="exampleInputEmail1"]')
        .invoke('text')
        .then(emailLabel => {

            // Assert that the extracted text is exactly "Email address"
            expect(emailLabel).to.equal('Email address')

            // Wrap the plain JavaScript string back into a Cypress object
            // so we can continue using Cypress commands like .should()
            cy.wrap(emailLabel).should('equal', 'Email address')
        })
})

it.only('Timeouts', () => {

    // Open the "Modal & Overlays" section from the sidebar
    cy.contains('Modal & Overlays').click();

    // Click the "Dialog" page
    cy.contains('Dialog').click();

    // Click the button that waits 3 seconds before opening the dialog
    cy.contains('Open with delay 3 seconds').click();

    // Find the dialog header after it appears
    // Cypress will automatically wait for the element to exist
    cy.get('nb-card-header')

        // Verify the header contains the expected text
        .should('contain', 'Friendly reminder');

});


