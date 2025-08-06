import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".oxd-text--h6",
    wrongCredentialAlert: ".oxd-alert-content",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
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

  it.only('User Info Update - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userDataLocal.userSuccess.username)
    cy.get(selectorList.passwordField).type(userDataLocal.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
    cy.get(selectorList.myInfoButton).click()
    cy.get(selectorList.firstNameField).clear().type('firstNameTest')
    cy.get(selectorList.lastNameField).clear().type('lastNameTest')
    cy.get(selectorList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorList.genericField).eq(5).clear().type('DriverLicenseNumberTest')
    cy.get(selectorList.genericField).eq(6).clear().type('2025-06-08')
    cy.get(selectorList.dateCloseButton).click()
    cy.get(selectorList.submitButton).eq(1).click()
    cy.get('.oxd-toast')
    
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField, { timeout: 10000 }).type(userDataLocal.userFail.username)
    cy.get(selectorList.passwordField, { timeout: 10000 }).type(userDataLocal.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert, { timeout: 10000 }).should('be.visible')
  })
})