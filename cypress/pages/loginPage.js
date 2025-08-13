class LoginPage {
    selectorList () {
        return {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: ".oxd-alert-content"
        };
    } 

    
    accessLoginPage() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    loginWithAnyUser (username, password) {
        const selectors = this.selectorList();
        cy.get(selectors.usernameField, { timeout: 10000 }).type(username);
        cy.get(selectors.passwordField, { timeout: 10000 }).type(password);
        cy.get(selectors.loginButton).click();
    }
}

export default LoginPage;