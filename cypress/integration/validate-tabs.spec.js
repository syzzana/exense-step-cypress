import { baseUrl, credentials } from "../helpers/utils";

const tabs =[
    {
        key: 'Plans',
        value: 'New plan'
    },
    {
        key: 'Keywords',
        value: 'New keyword'
    },
    {
        key: 'Parameters',
        value: 'New parameter'
    },
    {
        key: 'Executions',
        value: 'Execution list'
    },
    {
        key: 'Scheduler',
        value: 'New task'
    },
    {
        key: 'Grid',
        value: 'Agents'
    },
    {
        key: 'Admin',
        value: 'Add user'
    }
]

describe('Login', () => {
    before(() => {
        cy.clearCookies()
        cy.visit(baseUrl)
        cy.login(credentials.username, credentials.password)
    })

    it('Validate tabs', () => {
        cy.contains('Plans').should('be.visible');
        cy.validateTabs(tabs)
    })
})
