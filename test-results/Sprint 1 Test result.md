
# Test Case PM_001: Add User to Database

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini | 03/02/2023 | Pass |
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
| 1 | Send a POST request to the "add-user" endpoint from POSTMAN with the details provided in the Test Scenario section. | The POST request is successful and returns a 200 status code. |  The POST request is successful and returns a 200 status code.| PASS |
| 2 | Verify that the response body contains the success message "Accepted". | The response body contains the success message "Accepted". | The response body contains the success message "Accepted". | PASS |
| 3 | Verify that the new user was added to the database by checking the database for the user with the provided username and password. | The new user is added to the database. |  The new user is added to the database.|  PASS |


# Test Case PM_002: User Authentication and Access Token Retrieval

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|    Rini | 03/02/2023 | Pass |

**Prerequisites:**

1. The API is running and accessible.
2. The "login" endpoint is available and can receive POST requests.
3. There is at least one user in the database with the provided username and password.

## Test Scenario
To verify that a user can be authenticated and an access token can be retrieved by sending a POST request to the "login" endpoint with the correct credentials.

### Test Steps

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not executed/Suspended |
| --- | --- | --- | --- | --- |
| 1 | Send a POST request to the "login" endpoint from POSTMAN with the following details:<br>Endpoint: localhost:8080/login<br>Method: POST<br>Headers: Content-Type: application/json<br>Request Body:{<br>&nbsp;&nbsp;""username"": ""Rini"",<br>&nbsp;&nbsp;""password"": ""12345""<br>} | POST is successful | POST is successful |Pass|
| 2 | Verify that the response status code is either 200. | Credentials are correct, the API authenticates the user and returns status code 200 |Credentials are correct, the API authenticates the user and returns status code 200| PASS|
| 3 | If the response status code is 200, verify that the response body contains an access token | The response body contains an access token |The response body contains an access token| PASS |




# Test Case: PM_003 - User Authentication Failure and Error Message Retrieval

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|    Rini | 03/02/2023 | Pass |

**Prerequisites:**

1. The API is running and accessible.
2. The "login" endpoint is available and can receive POST requests.
3. There is at least one user in the database with the provided username and password.

## Test Scenario
To verify that user authentication failure is handled correctly by sending a POST request to the "login" endpoint with incorrect credentials.


### Test Steps:

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not executed/Suspended |
| ----- | ------------ | ---------------- | -------------- | -------------------------------- |
| 1 | Send a POST request to the "add-user" endpoint from POSTMAN with the following details:<br>Endpoint: localhost:8080/login<br>Method: POST<br>Headers: Content-Type: application/json<br>Request Body: {<br>&nbsp;&nbsp;&nbsp;&nbsp;""username"": ""Rini"",<br>&nbsp;&nbsp;&nbsp;&nbsp;""password"": ""19345""<br>} | POST is successful | POST is successful  | PASS |
| 2 | Verify that the response status code is 401. | Credentials are incorrect, the API returns status code 401 | the API returns status code 401 | PASS |
| 3 | The API should return an error message. Verify that the response body contains an error message. | The response body contains an error message as expected. |  The response body contains an error message as expected | PASS |


# Test Case ID: BU_001 - Canceling sign up process


* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023 |PASS|

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
| 1 | Navigate to the sign-up form page. | The user should be able to navigate to the sign-up form page successfully. | The user is able to navigate to the sign-up form page successfully.|PASS |
| 2 | Fill out some of the required fields. | The user should be able to fill out some of the required fields. | The user is able to fill out some of the required fields. |PASS |
| 3 | Click on the "Cancel" button. | The user should be able to click on the "Cancel" button. | The user is  able to click on the "Cancel" button| PASS|
| 4 | Verify that no data is submitted. | No data should be submitted when the user clicks on the "Cancel" button. | Data not submitted on clicking cancel button |PASS |


# Test Case ID: BU_002 - Missing username


* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023|PASS|




**Prerequisites:**

1. The sign up page should be accessible and functioning properly.
2. The form should have fields to collect the required information (username, password, and confirmation password).
3. The form should have a button to submit the form.

##Test Scenario:

To verify that the system displays an appropriate error message when the username field is left blank.

### Step Details:

| Step # | Step Details                                               | Expected Results                                               | Actual Results | Pass / Fail / Not executed / Suspended |
|--------|------------------------------------------------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| 1      | Open the sign up page.                                     | The sign up page should be displayed. |  The sign up page is displayed.                       |     PASS           |                                        |
| 2      | Leave the username field blank.                            | The username field should be left blank.                       |      The username field is  left blank.           | PASS                                       |
| 3      | Enter a valid password and confirmation password.          | The password and confirmation password fields should be entered correctly. |     The password and confirmation password fields should be entered correctly.           |    PASS                                    |
| 4      | Click on the "Sign Up" button.                             | The system should validate the input fields and display an appropriate error message indicating that the username field is required. |    The system  validates the input fields and display an appropriate error message indicating that the username field is required.            |                             PASS           |



#  Test Case ID: BU_003 - Password and confirmation password mismatch

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|


##Test Scenario:

To verify that the system displays an appropriate error message when the password and confirmation password fields do not match.

### Step Details:

| Step # | Step Details                                               | Expected Results                                               | Actual Results | Pass / Fail / Not executed / Suspended |
|--------|------------------------------------------------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| 1      | Open the sign up page.                                     | The sign up page should be displayed.                          |        The sign up page is  displayed.         |  PASS                                      |
| 2      | Enter a valid username and password.                        | The username and password fields should be entered correctly.   |     The username and password fields are entered correctly.             |   PASS                                     |
| 3      | Enter a confirmation password that does not match with the password|Confirm password should be entered|Confirm password is entered|PASS|
| 4      | Click on sign up button|system displays an appropriate error message when the password and confirmation password fields do not match|system displays an appropriate error message when the password and confirmation password fields do not match|PASS




#  Test Case ID: BU_004 - Username too short

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|



**Prerequisites:**

1. The sign up page should be accessible and functioning properly.
2. The form should have fields to collect the required information (username, password, and confirmation password).
3. The form should have a button to submit the form.

##Test Scenario:

To verify that the system displays an appropriate error message when the username entered is less than 8 characters long.

##3 Step Details:

| Step # | Step Details                                               | Expected Results                                               | Actual Results | Pass / Fail / Not executed / Suspended |
|--------|------------------------------------------------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| 1      | Open the sign up page.                                     | The sign up page should be displayed.                          |   The sign up page is displayed.             |      PASS                                  |
| 2      | Enter a username that is less than 8 characters long.       | The system should validate the input fields and display an appropriate error message indicating that the username is too short. |   The system validates the input fields and displays an appropriate error message indicating that the username is too short.              |   PASS                                     |
| 3      | Enter a valid password and confirmation password.          | The password and confirmation password fields should be entered correctly. |  The password and confirmation password fields are entered correctly.              |      PASS                                  |
| 4      | Click on the "Sign Up" button.                             | The form should not be submitted.                               |        The form is not submitted.            |   PASS                                     |


#  Test Case ID: BU_005 - Username contains spaces

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|


**Prerequisites:**

1. The sign up page should be accessible and functioning properly.
2. The form should have fields to collect the required information (username, password, and confirmation password).
3. The form should have a button to submit the form.

## Test Scenario:

To verify that the system displays an appropriate error message when the username entered contains spaces.

###Step Details:

| Step # | Step Details                                               | Expected Results                                               | Actual Results | Pass / Fail / Not executed / Suspended |
|--------|------------------------------------------------------------|----------------------------------------------------------------|----------------|----------------------------------------|
| 1      | Open the sign up page.                                     | The sign up page should be displayed.                          |  The sign up page is displayed.               |     PASS                                   |
| 2      | Enter a username that contains spaces.                      | The username should contain spaces.                            |         The username contains spaces.       |   PASS                                     |
| 3      | Enter a valid password and confirmation password.           | The password and confirmation password fields should be entered correctly. |   The password and confirmation password fields are entered correctly.         |           PASS                             |
| 4      | Click on the "Sign Up" button.                              | The system should validate the input fields and display an appropriate error message indicating that the username cannot contain spaces. | The system  validates the input fields and displays an appropriate error message indicating that the username cannot contain spaces. |     PASS                                 |


#  Test Case ID: BU_006 - Username with leading or trailing spaces

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|

**Prerequisites:**

1. The sign up page should be accessible and functioning properly.
2. The form should have fields to collect the required information (username, password, and confirmation password).
3. The form should have a button to submit the form.

##Test Scenario:

To verify that the system automatically trims leading and trailing spaces from the username field.

### Step Details:

| Step # | Step Details                                               | Expected Results                                                                 | Actual Results | Pass / Fail / Not executed / Suspended |
|--------|------------------------------------------------------------|--------------------------------------------------------------------------------|----------------|----------------------------------------|
| 1      | Open the sign up page.                                     | The sign up page should be displayed.                                          |  The sign up page is displayed.              |                     PASS                   |
| 2      | Enter a username with leading or trailing spaces.          | The username should have leading or trailing spaces.                            | The username have leading or trailing spaces.  |            PASS                            |
| 3      | Enter a valid password and confirmation password.          | The password and confirmation password fields should be entered correctly.     |     The password and confirmation password fields are entered correctly           | PASS                                       |
| 4      | Click on the "Sign Up" button.                             | The system should validate the input fields, trim any leading or trailing spaces from the username field, and create a new user account. |  The system  validates the input fields, trims any leading or trailing spaces from the username field, and creates a new user account.              |  PASS                                      |



#  Test Case ID: BU_007 - Submitting the sign up form with correct details

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|


**Prerequisites:**
| S # | Prerequisites: |
| --- | --- |
| 1 | The sign-up page should be accessible and functioning properly. |
| 2 | The form should have fields to collect the required information (username, password, and confirmation password). |
| 3 | The form should have a button to submit the form. |


## Test Scenario
Submitting the form with correct details navigates to the Landing Page as signed in.

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not Executed/Suspended |
| --- | --- | --- | --- | --- |
| 1 | Enter correct details in all the required fields | The user should be able to fill out all the required fields correctly. |  The user is able to fill out all the required fields correctly.| PASS|
| 2 | Click on the "Sign up" button | The user should be able to click on the "Submit" button. |The user is able to click on the "Submit" button. | PASS|
| 3 | Wait for the application to process the form submission | The application should process the form submission correctly. |The application processes the form submission correctly.  |PASS |
| 4 | Verify that the user is navigated to the Landing Page as signed in | The user should be navigated to the Landing Page as signed in after submitting the form with the correct details. |The user is navigated to the Landing Page as signed in after submitting the form with the correct details. | PASS|


#  Test Case ID: BU_008 - Submitting the sign up form with correct details


* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|


**Prerequisites:**

| S # | Prerequisites: |
| --- | --- |
| 1 | The sign-up page should be accessible and functioning properly. |
| 2 | The form should have fields to collect the required information (username, password, and confirmation password). |
| 3 | The form should have a button to submit the form. |


## Test Scenario:
Submitting the form with correct details navigates to the Landing Page as signed in.


### Steps:

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not executed/Suspended |
| --- | --- | --- | --- | --- |
| 1 | Enter incorrect details in any of the required fields. | The user should be able to fill out all the required fields correctly. |The user is able to fill out all the required fields correctly.   | PASS |
| 2 | Click on the "Sign up" button. | The user should be able to click on the "Submit" button. |The user is able to click on the "Submit" button.  | PASS|
| 3 | Wait for the application to process the form submission. | The application should process the form submission correctly. | The application processes the form submission correctly.  |PASS  |
| 4 | Verify that an appropriate error message is displayed on the screen. | An appropriate error message should be displayed on the screen informing the user that the data entered is incorrect. |An appropriate error message is displayed on the screen informing the user that the data entered is incorrect.   | PASS |

#  Test Case ID: BU_009 - Canceling sign-up process

* Created By: Rini
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|   Rini  | 03/02/2023| PASS|


**Prerequisites:**
| S # | Prerequisites |
| --- | --- |
| 1 | The sign-up page should be accessible and functioning properly. |
| 2 | The form should have fields to collect the required information (username, password, and confirmation password). |
| 3 | The form should have a button to submit the form. |

##Test Scenario
Canceling sign-up process

#### Step #
| **Step Details** | **Expected Results** | **Actual Results** | **Pass / Fail / Not executed / Suspended** |
| --- | --- | --- | --- |
| 1 | Navigate to the sign-up form page. | The user should be able to navigate to the sign-up form page successfully. | The user is able to navigate to the sign-up form page successfully. |PASS
| 2 | Fill out some of the required fields. | The user should be able to fill out some of the required fields. | The user is able to fill out some of the required fields.  |PASS
| 3 | Click on the "Cancel" button. | The user should be able to click on the "Cancel" button. | The user is able to click on the "Cancel" button. |PASS
| 4 | Verify that no data is submitted. | No data should be submitted when the user clicks on the "Cancel" button. |Data is not submitted when the user clicks on the "Cancel" button.  |PASS






# Test Case PM_001: Landing page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The landing page should be accessible  properly.| |
| 2 | The landing page should have sign in button| |

## Test Scenario
To verify that if user not login they can see the option to sign in when  open the landing page.


### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the landing page |  The landing should be displayed. | User is able to see/ access the landing page | Pass |		
| 2 | Check the sign in option | The user is not login and able to see the Sign in button   | The user is able to see the sign-in button without login. |  Pass |
| 3 | Click on the "Sign in" button. | The user is able to click on sign in button and redirect to sign in page | The user is able to Click on the sign-in button and re-directed to the sign up page successfully | Pass |	



# Test Case PM_002: Landing page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The landing page should be accessible  properly.| |
| 2 | The landing page should have sign in button| |

## Test Scenario
To verify that if user is signed in, the landing page display the user’s name


### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the landing page |  The landing should be displayed. | User is able to see/ access the landing page | Pass |		
| 2 | Check the sign in option | The user is not login and able to see the Sign in button   | The user is not login and able to see the sign in button. |  Pass |
| 3 | Click on the "Sign in" button. | The user is able to click on sign in button and redirect to sign in page | The user is able to click on sign in button and redirect to sign in page | Pass |	
| 4 | Enter a valid username and  password. | The username and password should be accepted by the system. | The User entered the  username and password and accepted by the system. | Pass |	
| 5 | Click on the "Sign in" button. | The system should validate the username and password and allow user to sign in | The system validated the username and password and allow user to sign in | Pass |	
| 6 | Verify that the user is redirected to the appropriate page. | The user should be redirected to landing page. | The user is redirected to landing page. | Pass |	
| 7 | Verify that the user is able to see their name on landing page | The user's name is displayed on the landing page after signed in  | The user's name is displayed on the landing page after signed in  | Pass |	


# Test Case PM_003: Landing page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The landing page should be accessible  properly.| |
| 2 | The landing page should have sign in button| |

## Test Scenario
To verify that if user is signed in, the landing page display the button/link to sign out

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the landing page |  The landing should be displayed. | User is able to see/ access the landing page | Pass |		
| 2 | Check the sign in option | The user is not login and able to see the Sign in button   | The user is not login and able to see the sign in button. | Pass |
| 3 | Click on the "Sign in" button. | The user is able to click on sign in button and redirect to sign in page | The user is able to click on sign in button and redirect to sign in page | Pass |	
| 4 | Enter a valid username and  password. | The username and password should be accepted by the system. | The User entered the  username and password and accepted by the system. | Pass |	
| 5 | Click on the "Sign in" button. | The system should validate the username and password and allow user to sign in | The system validated the username and password and allow user to sign in | Pass |	
| 6 | Verify that the user is redirected to the appropriate page. | The user should be redirected to landing page. | The user is redirected to landing page. | Pass |	
| 7 | Verify that the user is able to see Sign out button | The user is able to click on sign out button to redirect to landing page (with sign in option) | The user is sign in and able to click on sign out button to redirect to landing page | Pass |	



# Test Case PM_001: Sign in page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign in page should be accessible and functioning properly.| |
| 2 | The form should have fields to Enter  the required information (username and  password).| |
| 3 | The form should have a Sign in button to submit the form.| |

## Test Scenario
To verify that a user can successfully sign in when  required username and password are entered correctly.

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the sign in page |   The sign in page should be displayed. | The user is able to access the sign in page correctly | Pass |		
| 2 | Enter a valid username and  password. | The username and password should be accepted by the system.   | The system accepted the correct username and passsword | Pass |
| 3 | Click on the "Sign in" button. | The system should validate the username and password and allow user to sign in | The system validated the username and password and allow user to sign in | Pass |	



# Test Case PM_002: Sign in page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign in page should be accessible and functioning properly.| |
| 2 | The form should have fields to Enter  the required information (username and  password).| |
| 3 | The form should have a Sign in button to submit the form.| |

## Test Scenario
To verify that a user can successfully sign in and navigated to landing page

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the sign in page |   The sign in page should be displayed. | The user is able to access the sign in page correctly | Pass |		
| 2 | Enter a valid username and  password. | The username and password should be accepted by the system.   | The system accepted the correct username and passsword | Pass |
| 3 | Click on the "Sign in" button. | The system should validate the username and password and allow user to sign in | The system validated the username and password and allow user to sign in | Pass |	
| 4 | Verify that the user is redirected to the appropriate page. | The user should be redirected to landing page. | The user is redirected to the landing page correctly after the sign in | Pass |	




# Test Case PM_003: Sign in page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign in page should be accessible and functioning properly.| |
| 2 | The form should have fields to Enter  the required information (username and  password).| |
| 3 | The form should have a Sign in button to submit the form.| |

## Test Scenario
To verify that the system displays an appropriate error message when the username and  password enter incorrectly.

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the sign in page |   The sign in page should be displayed. | The user is able to access the sign in page correctly | Pass |		
| 2 | Enter a username and  password. | The username and password should be accepted by the system.   | The system accepted the username and passsword | Pass |
| 3 | Click on the "Sign in" button. | The system should validate the Username and password and display an appropriate error message indicating that the username and password do not match. | The system validated the username and password and displayed the error message for wrong password "Missing Username and Password" | Pass |	



# Test Case PM_004: Sign in page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Failed] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign in page should be accessible and functioning properly.| |
| 2 | The form should have fields to Enter  the required information (username and  password).| |
| 3 | The form should have a Sign in button to submit the form.| |

## Test Scenario
To verify that the system displays an appropriate error message when the password field is left blank.

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the sign in page |   The sign in page should be displayed. | The user is able to access the sign in page correctly | Pass |		
| 2 | Enter a username  | The username  should be accepted by the system.   | The User entered the username and accepted by the system | Pass |
| 3 | Leave the Password field blank. | The Password field should be left blank. | The user left the password field blank | Pass |	
| 4 | Click on the "Sign in" button. | The system should validate the input and display an appropriate error message indicating that the Please enter password. | The user clicked on sign in button, But system did not display any error message for blank password field | Failed |	


# Test Case PM_005: Sign in page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign in page should be accessible and functioning properly.| |
| 2 | The form should have fields to Enter  the required information (username and  password).| |
| 3 | The form should have a Sign in button to submit the form.| |

## Test Scenario
To verify that the system display error message if user not exist and try to login

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the sign in page |   The sign in page should be displayed. | The user is able to access the sign in page correctly | Pass |		
| 2 | Enter a valid username and  password. | The username and password should be accepted by the system.   | The user entered the username and password and  accepted by the system. | Pass |
| 3 | Click on the "Sign in" button. | The system should validate the username and password and If user not exist then  display the appropriate message indicating that the user not exist, please sign up | The system  validated the username and password and display the appropriate message indicating that the username and password missing | Pass |	



# Test Case PM_005: Sign in page
* Created By: Deepak
* Reviewed By:
* Version: 1.0

### QA Tester’s Log

| Tester's Name | Date Tested | Test Case |
| --- | --- | --- |
|     | [Date] | [Pass] |

| S # | Prerequisites | Test Data |
| --- | --- | --- |
| 1 | The sign in page should be accessible and functioning properly.| |
| 2 | The form should have fields to Enter  the required information (username and  password).| |
| 3 | The form should have a Sign in button to submit the form.| |

## Test Scenario
To verify that the sign in page has button to redirect to sign up page

### Test Steps:
| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
| --- | --- | --- | --- | --- |
| 1 | Open the sign in page |   The sign in page should be displayed. | The user is able to access the sign in page correctly | Pass |		
| 2 | Display the sign up button on sign in page  | The sign in page  should have button to redirect to sign up page    | The user is able to see the sign up bitton on sign in page | Pass |
| 3 | Click on 'sign up' button | The user should be redirect to the sign up page. | The user clicked on sign up button and redirected to the sign up page | Pass |	


