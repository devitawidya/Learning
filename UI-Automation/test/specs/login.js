import { userLogin } from '../test/pageobjects/indexPage.js'
import { overview } from '../test/pageobjects/overviewPage.js'
import * as data from '../test/data/userData.js'

describe('Login Scenario', () => {
    it('[TC002] Login with invalid credentials - Negative case', async () => {
        await browser.url(`https://parabank.parasoft.com/parabank/index.htm`);
    
        await $(userLogin.field.username).setValue(data.INVALID_USER_DATA.username)
        await $(userLogin.field.password).setValue(data.INVALID_USER_DATA.password)
        await $(userLogin.buttonLogin).click()
        await expect($(userLogin.errorLogin)).toHaveTextContaining(data.INVALID_USER_DATA.assertion)
    });

    it('[TC003] Login with valid credentials - Positive case', async () => {
        await browser.url(`https://parabank.parasoft.com/parabank/index.htm`);

        await $(userLogin.field.username).setValue(data.VALID_USER_DATA.username)
        await $(userLogin.field.password).setValue(data.VALID_USER_DATA.password)
        await $(userLogin.buttonLogin).click()

        await expect($(overview.title)).toBeExisting()
        await expect($(overview.title)).toHaveTextContaining(data.VALID_USER_DATA.assertion)
    });
});