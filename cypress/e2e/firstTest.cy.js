/// <reference types="cypress" />

//Try not to use beforeandafterEach together.
beforeEach('Open test application', () => {
    cy.visit('https://playground.bondaracademy.com') //or if called prior: cy.visit(./)
    it('Hello world 1', () => {

    })
})
// it('Hello world 2', () => {

// })

// describe('Test Suite 1', () => {
//     afterEach()
//     })
//     it('Hello world 1', () => {

//     })

//     it('Hello world 2', () => {
//     })
// })

// describe('Test Suite 2', () => {
//     it('Hello world 1', () => {

//     })

//     it('Hello world 2', () => {
//     })
// })
