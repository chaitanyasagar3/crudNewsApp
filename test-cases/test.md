
# Test Case PM_001: Add User to Database

## Test Case Description
To verify that a new user can be added to the database by sending a POST request to the "add-user" endpoint.

### Prerequisites:
1. The API is running and accessible.
2. The "add-user" endpoint is available and can receive POST requests.

## QA Tester's Log

Tester's Name: Rini  
Date Tested: [Date]

| S # | Test Case (Pass/Fail/Not Executed) |
|---|---|
| 1 | [ ] |
| 2 | [ ] |
| 3 | [ ] |
| 4 | [ ] |

## Test Scenario
Send a POST request to the "add-user" endpoint with the following details:

**Endpoint:** localhost:8080/add-user  
**Method:** POST  
**Headers:** Content-Type: application/json  
**Request Body:**
{
"username": "Rini",
"password": "12345"
}

vbnet
Copy code

## Test Steps

| Step # | Step Details | Expected Results | Actual Results | Pass / Fail / Not executed / Suspended |
|---|---|---|---|---|
| 1 | Send a POST request to the "add-user" endpoint from POSTMAN with the details provided in the Test Scenario section. | The POST request is successful and returns a 200 status code. |  | [ ] |
| 2 | Verify that the response body contains the success message "Accepted". | The response body contains the success message "Accepted". |  | [ ] |
| 3 | Verify that the new user was added to the database by checking the database for the user with the provided username and password. | The new user is added to the database. |  | [ ] |





