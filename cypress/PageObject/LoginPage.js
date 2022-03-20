class LoginPage {



navigateContact() {
    cy.visit('http://localhost:8080/contact.html')
}

navigatePricing() {
    cy.visit('http://localhost:8080/pricing.html')
}

}
export default LoginPage