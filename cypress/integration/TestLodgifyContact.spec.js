import { ElementsFromContact } from "../plugins/elements";

describe('Lodgify Contact page', () => {

    var contact = "http://localhost:8080/contact.html";

    context('Contact - Validate all fields in the  page ', () => {
        it('Log into Contact page', () => {

            cy.visit(contact);
            cy.wait(2000);
        });


        it('Verify the mandatory fileds ', () => {
            //Click on Name field
            cy.get(':nth-child(1) > :nth-child(1) > .input > input').click();
            //Click on Phone field
            cy.get('.PhoneInput').click();
            // Click on Email field
            cy.get('.eight > .input > input').click();
            // Click on Comment field
            cy.get('.input > textarea').click();
            // click on Arrival field
            cy.get('.DateRangePickerInput_calendarIcon > .icon > svg').click();
            //Click for close the Arrival panel
            cy.get('.five > .header').click();

        });

        it('Verify that (Name) is a Mandatory field', () => {
            cy.get(':nth-child(1) > :nth-child(1) > .input > .ui').contains('Name is mandatory');

        });

        it('Verify that (Phone) is a Mandatory field', () => {
            cy.get('.PhoneInput > .ui').contains('Phone is mandatory');

        });

        it('Verify that (Email) is a Mandatory field', () => {
            cy.get('.eight > .input > .ui').contains('Email is mandatory');

        });

        it('Verify that (Comment) is a Mandatory field', () => {
            cy.get(':nth-child(4) > .input > .ui').contains('Comment is mandatory');

        });

        it('Verify that (Arrival) is a Mandatory field', () => {
            cy.get('.DateRangePickerInput > .ui').contains('Arrival is mandatory');

        });

        it('Complete all the fields and try to send the message without selecting the arrival option ', () => {
            //Click on Name field
            cy.get(':nth-child(1) > :nth-child(1) > .input > input').clear().type('Juan Gomez');

            //Select Argentina country
            cy.get('.PhoneInputCountrySelect').select(9);

            //Click on Phone field
            cy.get('.PhoneInput').clear().type('1158996545');

            // Click on Email field
            cy.get('.eight > .input > input').clear().type('juangomez@gmail.com');

            //Click Guest field
            cy.get('.four > .ui > input').clear().type('2');

            // Click on Comment field
            ElementsFromContact.LoremIpsum();

        });

        it('Check if Send is disabled', () => {
            //Click on (Send)
            let Visible = "";

            if (Visible) {
                cy.get('[data-testid=form] > [data-testid=button]').should('not.be.visible');
                cy.log('is work correctly');

            } else {
                cy.get('[data-testid=form] > [data-testid=button]').click();
                cy.get('[data-testid=form] > [data-testid=button]').contains('Fail');
                cy.log("Is not work property")

            }
        });

        it('Complete all the fields and try to send the message', () => {

            //Click Guest field
            cy.get('.four > .ui > input').clear().type('2');

            //click on arrival and select round trip dates
            cy.get('.DateRangePickerInput_calendarIcon > .icon > svg').click();
            cy.get('[aria-label="Tuesday, March 15, 2022"]').click();
            cy.get('[aria-label="Wednesday, April 13, 2022"]').click();

            //Click on Send
            cy.get('[data-testid=form] > [data-testid=button]').click();
        });

        it('Valid labels and functions from Contact page', () => {

            // Check Contact label from principal panel
            cy.get('.fluid > :nth-child(1) > .ui').should('be.visible').contains('Contact');

            // Check Logo
            cy.get('[data-testid=logo]').should('be.visible').contains('Logo');

            // Check Home
            cy.get('[href = "/"]').should('be.visible').contains('Home');

            // Check Overview
            cy.get('[href="/en/overview"]').should('be.visible').contains('Overview');

            // Check Map
            cy.get('[href="/en/map"]').should('be.visible').contains('Map');

            // Check Gallery
            cy.get('[href="/en/gallery"]').should('be.visible').contains('Gallery');

            // Check Rates
            cy.get('[href="/en/rates"]').should('be.visible').contains('Rates');

            // Check Availability
            cy.get('[href="/en/availability"]').should('be.visible').contains('Availability');

            // Check Reviews
            cy.get('[href="/en/reviews"]').should('be.visible').contains('Reviews');

            // Check Contact
            cy.get('[href="/en/contact"]').should('be.visible').contains('Contact');

            // Check Book Now
            cy.get('.no-underline > [data-testid=button]').should('be.visible').contains('Book Now');

            // Check About host
            cy.get('.grid > :nth-child(1) > .top > .ui').should('be.visible').contains('About host');

        });

        it('verify contact information support', () => {
            // Verify Contact us
            cy.get('.five > .header').should('be.visible').contains('Contact us');

            // Verify Email Contact
            cy.get('.medium > :nth-child(1)').should('be.visible').contains('Email: nicolas@lodgify.com');

            // Verify Email Contact
            cy.get('.medium > :nth-child(2)').should('be.visible').contains('Phone: +34555278878278878');
        });

        it('Verify if the Privacy policy and the Terms of Service is available', () => {
            // Check if is visible
            cy.get('.light').should('be.visible');

            //Check if contain all text
            cy.get('.light').contains('This site is protected by reCAPTCHA and the Google privacy policy and Terms of Service apply.');

            // Check if Privacy policy is a clickable element
            cy.get('[href="https://policies.google.com/privacy"]').should('have.attr', 'href');

            // Check if Terms of Service is a clickable element
            cy.get('[href="https://policies.google.com/terms"]').should('have.attr', 'href');

        });
    });
});

