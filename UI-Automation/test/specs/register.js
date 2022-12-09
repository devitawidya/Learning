import { userLogin } from '../test/pageobjects/indexPage.js'
import { userRegister } from '../test/pageobjects/registerPage.js'
import * as data from '../test/data/userData.js'

describe('Register Scenario', () => {
    it('[TC001] Register - Negative case', async () => {
        await browser.url(`https://parabank.parasoft.com/parabank/index.htm`);
        await $(userLogin.CTA_Register).click()
        await expect($(userRegister.title)).toBeExisting()

        await $(userRegister.field.firstName).setValue(data.VALID_USER_DATA.firstName)
        await $(userRegister.field.lastName).setValue(data.VALID_USER_DATA.lastName)
        await $(userRegister.field.address).setValue(data.VALID_USER_DATA.address)
        await $(userRegister.field.city).setValue(data.VALID_USER_DATA.city)
        await $(userRegister.field.state).setValue(data.VALID_USER_DATA.state)
        await $(userRegister.field.zipcode).setValue(data.VALID_USER_DATA.zipcode)
        await $(userRegister.field.phone).setValue(data.VALID_USER_DATA.phone)
        await $(userRegister.field.ssn).setValue(data.VALID_USER_DATA.ssn)
        await $(userRegister.field.username).setValue(data.VALID_USER_DATA.username)
        await $(userRegister.field.password).setValue(data.VALID_USER_DATA.password)
        await $(userRegister.field.confirmPassword).setValue(data.VALID_USER_DATA.password)
        await $(userRegister.buttonRegister).click()
        
        await expect($('//*[@id="customer.username.errors"]')).toHaveTextContaining('This username already exists.')
    });
});