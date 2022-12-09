export const VALID_USER_DATA = {
    firstName : 'admin',
    lastName : '12345',
    address : 'jakarta',
    city : 'jakarta',
    state : 'indonesia',
    zipcode : '12345',
    phone : '12345',
    ssn : '12345',
    username : 'admin12345',
    password : 'admin12345',
    assertion : 'Accounts Overview'
}

export const INVALID_USER_DATA = {
    username : 'admin12345',
    password : '', //or we can use Math.random(1000)*1000
    assertion : 'Error!'
}