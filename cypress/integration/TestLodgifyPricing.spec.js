import { url } from "../plugins/url";


describe('Lodgify Pricing page', () => {

  var pricing = "http://localhost:8080/pricing.html";

  context('Pricing - Yearly plan - 50 rentals ', () => {
    it('Log into Pricing page', () => {

      cy.visit(pricing);
      cy.get('#cn-accept-cookie', { timeout: 8000 }).click();
      cy.wait(2000);
    });


    it('Select Yearly plan ', () => {

      cy.get('#scroll-prop-plan', { timeout: 8000 }).click().clear().type('50');
      cy.get('.nav-magic-line', { timeout: 8000 }).click();

    });


    it('Verify that the yearly plan have the correct prices for the Starter Plan', () => {
      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').contains('$64');

    });

    it('Verify that the yearly plan have the correct prices for the Professional Plan', () => {
      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').contains('$375');

    });

    it('Verify that the yearly plan have the correct prices for the Ultimate Plan', () => {
      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').contains('$525');

    });

    it('Change the currency prices and verify that the value change', () => {

      let starterE = '';
      let professionalE = '';
      let ultimateE = '';
      let starterU = '';
      let professionalU = '';
      let ultimateU = '';

      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').then(($starterUSD) => {
        starterE = $starterUSD.text();
        cy.log(starterE);
      });

      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').then(($professionalUSD) => {
        professionalE = $professionalUSD.text();
        cy.log(professionalE);
      });

      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').then(($ultimateUSD) => {
        ultimateE = $ultimateUSD.text();
        cy.log(ultimateE);

      });

      cy.get('div.row.row-sm.valign-center select', { timeout: 8000 }).select(1);
      cy.wait(2000);
      cy.scrollTo('bottom');

      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').then(($starterU) => {
        starterU = $starterU.text();
        cy.log(starterU);
        expect(starterE).to.not.eq(starterU);
      });

      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').then(($professionalU) => {
        professionalU = $professionalU.text();
        cy.log(professionalU);
        expect(professionalE).to.not.eq(professionalU);
      });

      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').then(($ultimateU) => {
        ultimateU = $ultimateU.text();
        cy.log(ultimateU);
        expect(ultimateE).to.not.eq(ultimateU);

      });

    });

    it('Change the currency prices and verify that the value change', () => {

      let starterU = '';
      let professionalU = '';
      let ultimateU = '';
      let starterLE = '';
      let professionalLE = '';
      let ultimateLE = '';

      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').then(($starterU) => {
        starterU = $starterU.text();
        cy.log(starterU);
      });

      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').then(($professionalU) => {
        professionalU = $professionalU.text();
        cy.log(professionalU);
      });

      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').then(($ultimateU) => {
        ultimateU = $ultimateU.text();
        cy.log(ultimateU);
      });

      cy.scrollTo('bottom');
      cy.get('div.row.row-sm.valign-center select', { timeout: 8000 }).select(2);

      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').then(($starterLE) => {
        starterLE = $starterLE.text();
        cy.log(starterLE);
        expect(starterU).to.not.eq(starterLE);
      });

      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').then(($professionalLE) => {
        professionalLE = $professionalLE.text();
        cy.log(professionalLE);
        expect(professionalU).to.not.eq(professionalLE);
      });

      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').then(($ultimateLE) => {
        ultimateLE = $ultimateLE.text();
        cy.log(ultimateLE);
        expect(ultimateU).to.not.eq(ultimateLE);

      });
    });
  })
})