Para Bank UI Automation Test

Test Scenario : Register & Login
[TC001] Register - Negative Case
Given a user visits https://parabank.parasoft.com/parabank/index.htm
When user click the linked text “Register”
And user type "admin" into the field with id = customer.firstName
And user type "12345" into the field with id = customer.lastName
And user type "jakarta" into the field with id = customer.address.street
And user type "jakarta" into the field with id = customer.address.city
And user type "indonesia" into the field with id = customer.address.state
And user type "12345" into the field with id = customer.address.zipCode
And user type "12345" into the field with id = customer.phoneNumber
And user type "12345" into the field with id = customer.ssn
And user type "admin12345" into the field with id = customer.username
And user type "admin12345" into the field with id = customer.password
And user type "admin12345" into the field with id = repeatedPassword
And user click button “Register”
Then the field with id = customer.username.errors has value 'This username already exists.'

[TC002] Login with invalid credentials - Negative Case
Given a user visits https://parabank.parasoft.com/parabank/index.htm
When user type "admin12345" into the field with id = loginPanel and name = username
And user type "x" into the field with id = loginPanel and name = password
And user click button “Login”
Then the text with class = title has assertion value 'Error!'

[TC003] Login with valid credentials - Positive Case
Given a user visits https://parabank.parasoft.com/parabank/index.htm
When user type "admin12345" as the registered username into the field with id = loginPanel and name = username
And user type "admin12345" as the valid password into the field with id = loginPanel and name = password
And user click button “Login”
Then the text with class = title has assertion value 'Accounts Overview'
