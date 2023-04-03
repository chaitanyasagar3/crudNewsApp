Test Report Client Side:

| **Test Suite**  | **Test Type**          | **Total Tests** | **Passed** | **Failed** |
| --------------------- | ---------------------------- | --------------------- | ---------------- | ---------------- |
| SignInPage.test.js    | Unit and Integration Testing | 11                    | 11               | 0                |
| GuestLanding.test.js  | Unit and Integration Testing | 6                     | 6                | 0                |
| UserLanding.test.js   | Unit and Integration Testing | 6                     | 6                | 0                |
| SignUpPage.test.js    | Unit and Integration Testing | 5                     | 5                | 0                |
| SettingsModal.test.js | Unit and Integration Testing | 4                     | 4                | 0                |
| LandingPage.test.js   | Unit and Integration Test    | 2                     | 2                | 0                |
| auth.js               | Unit Test                    | 3                     | 3                | 0                |
| news.js               | Unit  Test                   | 3                     | 3                | 0                |
| Header.js             | Unit and Integration Testing | 4                     | 4                | 0                |



Overall Test Summary:

Test Suites: 5, Passed: 5, Failed: 0, Total Tests: 44,
Passed: 32, Failed: 0

**Suits:**

**SignInPage.test.js: Test Suites: 1, Passed: 1, Total Tests:11, Passed: 11 **

Details:

* renders the form and its elements
* shows an error when login fails
* calls the login function with the correct arguments when the sign-in button is clicked
* the sign in page is working properly
* password input field changes its value correctly
* username input field changes its value correctly
* shows an error when server does not respond
* shows an error when server returns status 400
* shows an error when server returns status 500
* does not submit form when other keys are pressed
* navigates to sign up page when the sign up button is clicked

**GuestLanding.test.js: Test Suites: 1, Passed: 1, Total Tests: 6, Passed: 6 **

Details:

* renders the form and its elements
* refresh button works
* sign up button works
* getGeneralNews is called on mount
* displays news articles
* onError function is called when image fails to load (failed)

UserLanding.test.js: Test Suites: 1, Passed: 1, Total Tests:
6, Passed: 6 Details:

* getGeneralNews. is called on mount
* refreshes news articles on click of refresh button
* displays welcome message with username
* refresh button works
* displays settings button
* clicking settings button opens settings modal

**SignUpPage.test.js: Test Suites: 1, Passed: 1, Total Tests:
5, Passed: 5 **

Details:

* rendersthe form and its elements
* submits the form successfully
* shows an error when passwords do not match
* username input field changes its value correctly
* password input field changes its value correctly

**SettingsModal.test.js: Test Suites: 1, Passed: 1, Total Tests: 4, Passed: 4 **

Details:

* renders the modal and its elements
* closes the modal when close button is clicked
* calls the logout function when logout button is clicked
* updates the user's preferences when form is submitted

**Header.test.js  Test Suites: 2, Passed: 2, Total Tests: 4, Passed: 4 **

Details:

* renders the logo and app name
* displays Sign Up and Sign In buttons if user is not authenticated
* displays username and Logout button if user is authenticated
* calls signOut function when Logout button is clicked


**LandingPage.test.js  Test Suites: 1, Passed: 1, Total Tests: 2, Passed: 2 **

Details:

* should render GuestLanding when user is not authenticatedrenders the logo and app nam
* should render UserLanding when user is authenticated


**auth.test.js  Test Suites: 1, Passed: 1, Total Tests: 3, Passed: 3 **

Details:

* should make a POST request to /login with the correct data
* should make a POST request to /add-user with the correct data
* should make a POST request to /update-preferences with the correct data

**news.test.js  Test Suites: 1, Passed: 3, Total Tests: 3, Passed: 3 **

Details:

* should call axios.get with correct params
* should return articles on success
* should log error on failure


Test Report Server Side:

| **Test Suite**   | **Test Type**          | **Total Tests** | **Passed** | **Failed** |
| ---------------------- | ---------------------------- | --------------------- | ---------------- | ---------------- |
| newsController.test.js | Unit and Integration Testing | 12                    | 12               | 0                |
| userController.test.js | Unit and Integration Testing | 7                     | 7                | 0                |

**Suits:**

**newsController.test.js: Test Suites: 1, Passed: 1, Total Tests: 12, Passed: 12 **

Details:

* Check if the endpoint returns a 200 status code
* Checking if params are missing
* Check if multiple params are passed
* Check if the path is wrong
* Check if we make a post request
* Check if we make a put request
* Check if the articles are returned
* Check if the returned articles content is not empty
* Check if the returned articles url is valid
* Check if the returned articles urlToImage is valid
* Check if the returned articles publishedAt is valid
* Check if the returned articles source has name and id

**userController.test.js:
Test Suites: 1, Passed: 1, Total Tests: 7, Passed: 7**

**Details:**

* should add a new user to the database
* should return a 400 status code when no user is found
* should return a 400 status code when an incorrect password is provided
* should return a 200 status code and an access token when a valid login is provided
* should update user preferences
* should return a 400 status code when user ID is not provided
* should return a 400 status code when user ID is invalid
