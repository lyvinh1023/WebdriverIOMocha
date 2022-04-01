import LoginPage from  '../pageobjects/login.page';
import HomePage from '../pageobjects/home.page';

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login2('tomsmith', 'SuperSecretPassword!');
        await HomePage.checkHomePage();
    });
});
