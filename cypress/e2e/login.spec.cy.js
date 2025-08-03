import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".oxd-text--h6",
    wrongCredentialAlert: ".oxd-alert-content"
  }

  const userDataLocal = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'Test',
      password: 'Test'
    }
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField, { timeout: 7000 }).type(userDataLocal.userSuccess.username)
    cy.get(selectorList.passwordField, { timeout: 7000 }).type(userDataLocal.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid, { timeout: 7000 })
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userDataLocal.userFail.username)
    cy.get(selectorList.passwordField).type(userDataLocal.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })
})