const { Builder, By, Capabilities, until, Key } = require('selenium-webdriver');
const { assert } = require('chai');
const colors = require('colors');

const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

const options = new chrome.Options();
options.addArguments(
    'headless',
    '--disable-dev-shm-usage'
);

const service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

describe('User Authentication',async function(){
    this.timeout(15000)
    before(async function(){
        driver = await new Builder()
            .withCapabilities(Capabilities.chrome())
            .setChromeOptions(options)
            //.forBrowser('chrome')
            // .usingServer('http://localhost:4445/wd/hub')
            .build();
    })
    beforeEach(async function(){
        //await driver.get('https://devsecopswebapp.z23.web.core.windows.net/login');
        await driver.get('http://localhost:4200/');
    })
    
    after(async function(){
        await driver.quit()
    })
    it('Should go to the dashboard without error',async function(){
        await driver.findElement(By.id('loginEmail')).sendKeys('admin@dxc.com');
        await driver.findElement(By.id('loginPassword')).sendKeys('adminpassword', Key.RETURN);
        let url = await driver.wait(until.urlContains('dashboard'), 1000)  
        assert.deepEqual(url, true, 'Im now inside the dashboard')
    })
    it('Should give an alert if incorrect username/password', async function(){
        await driver.findElement(By.id('loginEmail')).sendKeys('');
        await driver.findElement(By.id('loginPassword')).sendKeys('', Key.RETURN);
            let message = await driver.switchTo().alert().getText();
            assert.deepEqual(message, 'Invalid Username/Password')
    })
})
