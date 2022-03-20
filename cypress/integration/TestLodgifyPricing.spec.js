import LoginPage from "../PageObject/LoginPage"


describe('Lodgify Pricing page', () => {

  var pricing = "http://localhost:8080/pricing.html";

  context('Pricing - Yearly plan - 50 rentals ', () => {
    it('Log into Pricing page', () => {
      const login = new LoginPage();
      login.navigatePricing();
      cy.get('#cn-accept-cookie', { timeout: 8000 }).click();
    });


    it('Select Yearly plan ', () => {

      cy.get('#scroll-prop-plan', { timeout: 8000 }).click().clear().type('50');
      cy.get('.nav-magic-line', { timeout: 8000 }).click();

    });

    it('Verify the actual currency (EUR)', () => {
      let starterE = '';

      cy.get('div.col-auto.price-card-starter > div > div:nth-child(1) > div.plan-price.plan-price-2.text-dark > span.currency.currency-symbol.currency-symbol-pre').then(($starterUSD) => {
        starterE = $starterUSD.text();
        expect(starterE).be.eq('€');
        cy.log(starterE);
      });
    });


    it('Verify that the yearly plan have the correct prices for the Starter Plan', () => {
      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').should('have.text','$64');

    });

    it('Verify that the yearly plan have the correct prices for the Professional Plan', () => {
      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').should('have.text','$375');

    });

    it('Verify that the yearly plan have the correct prices for the Ultimate Plan', () => {
      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').should('have.text','$525');

    });

    it('Change the currency prices and verify that the value change(EUR - DOLLAR)', () => {

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

    it('Verify the actual currency (DOLLAR)', () => {
      let starterUSD = '';

      cy.get('div.col-auto.price-card-starter > div > div:nth-child(1) > div.plan-price.plan-price-2.text-dark > span.currency.currency-symbol.currency-symbol-pre').then(($starterUSD) => {
        starterUSD = $starterUSD.text();
        expect(starterUSD).be.eq('$')
        cy.log(starterUSD);
      });
    });

    it('Change the currency prices and verify that the value change (DOLLAR - POUND STERLING)', () => {

      let starterU = '';
      let professionalU = '';
      let ultimateU = '';
      let starterPS = '';
      let professionalPS = '';
      let ultimatePS = '';

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

      cy.get(':nth-child(1) > .price-item > :nth-child(1) > .plan-price').then(($starterPS) => {
        starterPS = $starterPS.text();
        cy.log(starterPS);
        expect(starterU).to.not.eq(starterPS);
      });

      cy.get(':nth-child(2) > .price-item > :nth-child(1) > .plan-price').then(($professionalPS) => {
        professionalPS = $professionalPS.text();
        cy.log(professionalPS);
        expect(professionalU).to.not.eq(professionalPS);
      });

      cy.get(':nth-child(3) > .price-item > :nth-child(1) > .plan-price').then(($ultimatePS) => {
        ultimatePS = $ultimatePS.text();
        cy.log(ultimatePS);
        expect(ultimateU).to.not.eq(ultimatePS);

      });
    });

    it('Verify the actual currency (POUND STERLING)', () => {
      let starterPS = '';

      cy.get('div.col-auto.price-card-starter > div > div:nth-child(1) > div.plan-price.plan-price-2.text-dark > span.currency.currency-symbol.currency-symbol-pre').then(($starterPS) => {
        starterPS = $starterPS.text();
        expect(starterPS).be.eq('£')
        cy.log(starterPS);
      });
    });

    it('Verifi labels into Pricing page', () => {
      cy.scrollTo('top');
      //Verify LODGIFY logo
      cy.get('.head-logo').should('be.visible');

      //Verify Features label
      cy.get('#menu-item-15007 > .dropdown-toggle > .span-text').should('have.text','Features');

      //Verify Pricing label
      cy.get('#menu-item-1057 > a > .span-text').should('have.text','Pricing');

      //Verify Resources label
      cy.get('#menu-item-8806 > .dropdown-toggle > .span-text').should('have.text','Resources');

      //Verify Login label
      cy.get('#menu-item-31 > a > .span-text').should('have.text','Login');

      //Verify Start Free Trial label
      cy.get('#menu-item-32 > a').contains('Start Free Trial');
    });

    it('Verify central messages on the Pricing page', () => {

      cy.get('.h1-lg').contains('Vacation rental software pricing that scales as you grow.');

      cy.get('.text-xl').contains('7-day free trial. No set-up fees. No credit card details. No obligations.');

    });
  });
});