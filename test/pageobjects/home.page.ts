import Page from './page';

class HomePage extends Page {

    get flashAlert () { return $('#flash') }

    async checkHomePage () {
        //console.log(await this.flashAlert.isDisplayed());
        console.log(await this.flashAlert.getText());
        await expect(this.flashAlert).toBeExisting();
        await expect(this.flashAlert).toHaveTextContaining('You logged into a secure area!');
    }
}

export default new HomePage();
