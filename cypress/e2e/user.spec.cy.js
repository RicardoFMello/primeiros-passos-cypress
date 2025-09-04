import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const Chance = require('chance');

const chance = new Chance();

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillEmployeeDetails('EmployeeId', 'OtherIdTest', 'DriverLicenseNumberTest', '2025-06-08')
    myInfoPage.fillStatus()
    cy.contains('button', 'Save').click() // Adicione esta linha
    cy.get('.oxd-toast', { timeout: 10000 }).should('be.visible')
  })


})