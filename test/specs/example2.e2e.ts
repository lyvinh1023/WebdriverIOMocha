export {};
let { remote } = require('webdriverio');

;(async () => {
    const browser2 = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser2.url('https://webdriver.io')

    const apiLink = await browser2.$('=API')
    await apiLink.click()

    await browser2.saveScreenshot('./screenshot2.png')
    await browser2.deleteSession()
})()