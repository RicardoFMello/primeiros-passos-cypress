class MenuPage {

    selectorsList() {
        const selectors = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
            performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]'
              
           
        }

        return selectors
    }
    
    accessMyInfo() {
        cy.get(this.selectorsList().myInfoButton, { timeout: 10000 }).click()
   
    }

    accessPerformance() {
        cy.get(this.selectorsList().performanceButton, { timeout: 10000 }).click()
    }

}


export default MenuPage