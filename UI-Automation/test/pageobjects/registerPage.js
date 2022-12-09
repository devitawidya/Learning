export const userRegister = {
    title : '#rightPanel > h1',
    field: {
        firstName : '//*[@id="customer.firstName"]',
        lastName : '//*[@id="customer.lastName"]',
        address : '//*[@id="customer.address.street"]',
        city : '//*[@id="customer.address.city"]',
        state : '//*[@id="customer.address.state"]',
        zipcode : '//*[@id="customer.address.zipCode"]',
        phone : '//*[@id="customer.phoneNumber"]',
        ssn : '//*[@id="customer.ssn"]',
        username : '//*[@id="customer.username"]',
        password : '//*[@id="customer.password"]',
        confirmPassword : '//*[@id="repeatedPassword"]'
    },
    buttonRegister : '#customerForm > table > tbody > tr:nth-child(13) > td:nth-child(2) > input'
}