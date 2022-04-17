import { baseUrl, credentials } from "../helpers/utils";

describe('Login', () => {
    before(() => {
        cy.clearCookies()
        cy.visit(baseUrl)
    })

    it('Login', () => {
        cy.login(credentials.username, credentials.password)
        cy.contains('Plans').should('be.visible');
    })
})
