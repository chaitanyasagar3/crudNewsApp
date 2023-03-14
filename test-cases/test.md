
# Test Case PM_001: Add User to Database

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass/Fail/Not Executed] |
**Prerequisites:**
1. The API is running and accessible.
2. The "add-user" endpoint is available and can receive POST requests.

## Test Scenario
To verify that a new user can be added to the database by sending a POST request to the "add-user" endpoint with the following details:

**Endpoint:** localhost:8080/add-user  
**Method:** POST  
**Headers:** Content-Type: application/json  
**Request Body:**
{
"username": "Rini",
"password": "12345"
}


## Test Steps

| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
|---|---|---|---|---|
| 1 | Send a POST request to the "add-user" endpoint from POSTMAN with the details provided in the Test Scenario section. | The POST request is successful and returns a 200 status code. |  | [ ] |
| 2 | Verify that the response body contains the success message "Accepted". | The response body contains the success message "Accepted". |  | [ ] |
| 3 | Verify that the new user was added to the database by checking the database for the user with the provided username and password. | The new user is added to the database. |  | [ ] |


# Test Case PM_002: User Authentication and Access Token Retrieval

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass/Fail/Not Executed] |

**Prerequisites:**

1. The API is running and accessible.
2. The "login" endpoint is available and can receive POST requests.
3. There is at least one user in the database with the provided username and password.

## Test Scenario
To verify that a user can be authenticated and an access token can be retrieved by sending a POST request to the "login" endpoint with the correct credentials.

### Test Steps

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not executed/Suspended |
| --- | --- | --- | --- | --- |
| 1 | Send a POST request to the "login" endpoint from POSTMAN with the following details:<br>Endpoint: localhost:8080/login<br>Method: POST<br>Headers: Content-Type: application/json<br>Request Body:{<br>&nbsp;&nbsp;""username"": ""Rini"",<br>&nbsp;&nbsp;""password"": ""12345""<br>} | POST is successful | |
| 2 | Verify that the response status code is either 200. | Credentials are correct, the API authenticates the user and returns status code 200 | |
| 3 | If the response status code is 200, verify that the response body contains an access token | The response body contains an access token | |




# Test Case: PM_003 - User Authentication Failure and Error Message Retrieval

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass/Fail/Not Executed] |

**Prerequisites:**

1. The API is running and accessible.
2. The "login" endpoint is available and can receive POST requests.
3. There is at least one user in the database with the provided username and password.

## Test Scenario
To verify that user authentication failure is handled correctly by sending a POST request to the "login" endpoint with incorrect credentials.


### Test Steps:

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not executed/Suspended |
| ----- | ------------ | ---------------- | -------------- | -------------------------------- |
| 1 | Send a POST request to the "add-user" endpoint from POSTMAN with the following details:<br>Endpoint: localhost:8080/login<br>Method: POST<br>Headers: Content-Type: application/json<br>Request Body: {<br>&nbsp;&nbsp;&nbsp;&nbsp;""username"": ""Rini"",<br>&nbsp;&nbsp;&nbsp;&nbsp;""password"": ""19345""<br>} | POST is successful | [RESULT] | [Pass/Fail/Not executed/Suspended] |
| 2 | Verify that the response status code is 401. | Credentials are incorrect, the API returns status code 401 | [RESULT] | [Pass/Fail/Not executed/Suspended] |
| 3 | The API should return an error message. Verify that the response body contains an error message. | The response body contains an error message as expected. | [RESULT] | [Pass/Fail/Not executed/Suspended] |


# Test Case ID: BU_001 - Canceling sign up process


* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass/Fail/Not Executed] |

**Prerequisites:**

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign up page should be accessible and functioning properly. | |
| 2 | The form should have fields to collect the required information (username, password, and confirmation password). | |
| 3 | The form should have a button to submit the form. | |
| 4 | | |

## Test Scenario

To verify that submitting the form with correct details navigates to the Landing Page as signed in.

### Test Steps:

| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Navigate to the sign-up form page. | The user should be able to navigate to the sign-up form page successfully. | | |
| 2 | Fill out some of the required fields. | The user should be able to fill out some of the required fields. | | |
| 3 | Click on the "Cancel" button. | The user should be able to click on the "Cancel" button. | | |
| 4 | Verify that no data is submitted. | No data should be submitted when the user clicks on the "Cancel" button. | | |


#Test Case ID: BU_002 - Missing username


* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass/Fail/Not Executed] |




##### Prerequisites:

1. The sign up page should be accessible and functioning properly.
2. The form should have fields to collect the required information (username, password, and confirmation password).
3. The form should have a button to submit the form.

##### Test Scenario:

To verify that the system displays an appropriate error message when the username field is left blank.

##### Step Details:

| Step # | Step Details                                               | Expected Results                                               | Actual Results | Pass / Fail / Not executed / Suspended |
|--------|------------------------------------------------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| 1      | Open the sign up page.                                     | The sign up page should be displayed.                          |                |                                        |
| 2      | Leave the username field blank.                            | The username field should be left blank.                       |                |                                        |
| 3      | Enter a valid password and confirmation password.          | The password and confirmation password fields should be entered correctly. |                |                                        |
| 4      | Click on the "Sign Up" button.                             | The system should validate the input fields and display an appropriate error message indicating that the username field is required. |                |                                        |



#Test Case ID: BU_001 - Password and confirmation password mismatch

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass/Fail/Not Executed] |




S #    Prerequisites:      S #    Test Data                
1    The sign up page should be accessible and functioning properly.      1    Userid = xyz              
2    The form should have fields to collect the required information (username, password, and confirmation password).      2    Pass = *****              
3    The form should have a button to submit the form.      3                      
4                      4                      

##### Test Scenario:
   To verify that the system displays an appropriate error message when the password and confirmation password fields do not match.

Step #    Step Details        Expected Results        Actual Results        Pass / Fail / Not executed / Suspended

1    Open the sign up page.        The sign up page should be displayed.                            
2    Enter a valid username and password.        The username and password fields should be entered correctly.                            
3    Enter a confirmation password that does not match the password field.        The confirmation password should not match the password field.                            
4    Click on the "Sign Up" button.        The system should validate the input fields and display an appropriate error message indicating that the password and confirmation password fields do not match.                            
