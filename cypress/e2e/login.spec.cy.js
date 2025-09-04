import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();

describe('Login Orange HRM Tests', () => {
  
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    cy.location('pathname', { timeout: 10000 }).should('eq', '/web/index.php/dashboard/index') // CORRIGIDO: Validação correta para login com sucesso
    // loginPage.checkAccessInvalid() // CORRIGIDO: Removido, pois não faz sentido para login bem-sucedido
    dashboardPage.checkDashboardPage()
  })
})