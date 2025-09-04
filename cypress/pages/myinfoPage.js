class MyInfoPage {

    selectorsList() {
        return {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            secondItemCombobox: ":nth-child(6) > span",
            thirdItemCombobox: ":nth-child(3) > span",
            dateCloseButton: ".--close",
            submitButton: "[type='submit']"
        };
    }
    
    
    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField, { timeout: 10000 }).clear().type(firstName);
        cy.get(this.selectorsList().lastNameField, { timeout: 10000 }).clear().type(lastName);
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, date) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId);
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId);
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber);
        cy.get(this.selectorsList().genericField).eq(6).clear().type(date);
        cy.get(this.selectorsList().dateCloseButton).click();
    }

    fillStatus() { 
        cy.get(this.selectorsList().genericCombobox).eq(0).click();
        cy.get(this.selectorsList().secondItemCombobox).click();
        cy.get(this.selectorsList().genericCombobox).eq(1).click();
        cy.get(this.selectorsList().thirdItemCombobox).click();
    }

}

export default MyInfoPage;