export function url() {


    //var contact = "http://localhost:8080/contact.html";
    var pricing = "http://localhost:8080/pricing.html";

    url.Pricing = function () {
        it('Log into Pricing page', () => {

            cy.visit(pricing);
            cy.get('#cn-accept-cookie', { timeout: 8000 }).click();
            cy.wait(2000);
        });
    }

    url.Contact = function () {
       
        cy.visit("http://localhost:8080/contact.html");
        cy.get('#cn-accept-cookie', { timeout: 8000 }).click();
        cy.wait(2000);

    }

}