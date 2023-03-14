
# Test Case PM_001: Add User to Database

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

**Prerequisites:**

1. The API is running and accessible.
2. The "login" endpoint is available and can receive POST requests.
3. There is at least one user in the database with the provided username and password.

## Test Scenario
To verify that a user can be authenticated and an access token can be retrieved by sending a POST request to the "login" endpoint with the correct credentials.

| Step # | Step Details | Expected Results | Actual Results | Pass/Fail/Not executed/Suspended |
| --- | --- | --- | --- | --- |
| 1 | Send a POST request to the "login" endpoint from POSTMAN with the following details:<br>Endpoint: localhost:8080/login<br>Method: POST<br>Headers: Content-Type: application/json<br>Request Body:{<br>&nbsp;&nbsp;""username"": ""Rini"",<br>&nbsp;&nbsp;""password"": ""12345""<br>} | POST is successful | |
| 2 | Verify that the response status code is either 200. | Credentials are correct, the API authenticates the user and returns status code 200 | |
| 3 | If the response status code is 200, verify that the response body contains an access token | The response body contains an access token | |





