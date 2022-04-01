let { remote } = require('webdriverio');
let browser3;

before(async () => {
    browser3 = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })
});

after(async () => {
    await browser3.deleteSession();
});


describe('Describe 1', () => {
    it('test 1', async () => {
        
        await browser3.url('https://the-internet.herokuapp.com/login')

        const apiLink = await browser3.$('button[type="submit"]')
        await apiLink.click()

        await browser3.saveScreenshot('./screenshot3.png')
    });
});
