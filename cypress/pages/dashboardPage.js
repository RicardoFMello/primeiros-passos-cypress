class DashboardPage {

    selectorsList() {
        const selectors = {
              dashboardGrid: ".oxd-text--h6",
           
        }

        return selectors
    }
    
    checkDashboardPage() {
        cy.location('pathname', { timeout: 10000 }).should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashboardGrid, { timeout: 10000 }).should('be.visible')
    
    }


}


export default DashboardPage;