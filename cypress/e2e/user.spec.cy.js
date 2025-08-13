import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});


const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();


describe('Orange HRM Tests', () => {
  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
  
    wrongCredentialAlert: ".oxd-alert-content",
    
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericCombobox: ".oxd-select-text--arrow",
    secondItemCombobox: ":nth-child(6) > span",
    thirdItemCombobox: ":nth-child(3) > span",
    dateCloseButton: ".--close",
    submitButton: "[type='submit']"
  }

  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage() // Corrigido para usar o objeto
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password) // Corrigido para usar o objeto

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo() // Corrigido para usar o objeto
  
    
    
    cy.get(selectorsList.firstNameField, { timeout: 10000 }).clear().type('firstNameTest')
    cy.get(selectorsList.lastNameField, { timeout: 10000 }).clear().type('lastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseNumberTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-06-08')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible')
    cy.get(selectorsList.genericCombobox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericCombobox).eq(1).click()
    cy.get(selectorsList.thirdItemCombobox).click()
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField, { timeout: 10000 }).type(userData.userFail.username)
    cy.get(selectorsList.passwordField, { timeout: 10000 }).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert, { timeout: 10000 }).should('be.visible')
  })
})