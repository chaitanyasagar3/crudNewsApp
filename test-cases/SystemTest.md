System Test:

    Test Sign In

   Test ID: 1
Test case name: Sign In with valid credentials test

Objective: To ensure that the sign in functionality allows users with valid credentials to access the system, providing a secure and user-friendly login process.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible
    - A test user account with valid credentials (Username and Password) is available


Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Enter the valid Username and Password for the test user account.
    - Click the "Sign In" button to submit the sign in form.
    - Verify that the system successfully logs the user in and redirects them to the appropriate landing page.
    - Check that all components related to sign in functionality with valid credentials function correctly under this scenario.

Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign in functionality allows users with valid credentials to access the system.
    - The system successfully logs the user in and redirects them to the appropriate landing page or dashboard.
    - All unit tests related to sign in functionality with valid credentials pass.


Test ID: 2
Test case name: Sign In with invalid credentials test

Objective: To ensure that the sign-in functionality denies access to users with invalid credentials, maintaining the security and integrity of the system.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible
    - A test user account with invalid credentials (Username and Password) is available

Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Enter the invalid Username and Password for the test user account.
    - Click the "Sign In" button to submit the sign in form.
    - Verify that the system displays an error message indicating that the credentials provided are incorrect.
    - Check that all components related to sign in functionality with invalid credentials function correctly under this scenario.

Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign in functionality denies access to users with invalid credentials.
    - The system displays an error message indicating that the credentials provided are incorrect.
    - All unit tests related to sign in functionality with invalid credentials pass.



Test ID: 3
Test case name: Sign In with empty Username and password test

Objective: To ensure that the sign-in functionality prevents users from submitting an empty Username and password, enhancing user experience and system security.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible
 
Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Leave the Username and Password fields empty.
    - Click the "Sign In" button to submit the sign in form.
    - Verify that the system displays an error message indicating that both the Username and password fields are required.
    - Check that all components related to sign in functionality with empty Username and password function correctly under this scenario.

Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign in functionality prevents users from submitting an empty Username and password.
    - The system displays an error message indicating that both the Username and password fields are required.
    - All unit tests related to sign in functionality with empty Username and password pass.

Test ID: 4
Test case name: Sign In with valid Username and empty password test

Objective: To ensure that the sign-in functionality prevents users from submitting a valid Username and empty password, enhancing user experience and system security.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible

Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Enter a valid Username and leave the Password field empty.
    - Click the "Sign In" button to submit the sign in form.
    - Verify that the system displays an error message indicating that the password field is required.
    - Check that all components related to sign in functionality with a valid Username and empty password function correctly under this scenario.


Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign in functionality prevents users from submitting a valid Username and empty password.
    - The system displays an error message indicating that the password field is required.
    - All unit tests related to sign in functionality with a valid Username and empty password pass.


Test ID: 5
Test case name: Sign In with case-sensitive password test

Objective: To ensure that the sign-in functionality correctly handles case-sensitive passwords, maintaining system security.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible
    - A test user account with invalid credentials (Username and Password) is available

Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Enter the valid Username and an incorrect Password with case changes (e.g., if the correct password is "Password123", enter "password123").
    - Click the "Sign In" button to submit the sign in form.
    - Verify that the system displays an error message indicating that the credentials provided are incorrect.
    - Check that all components related to sign in functionality with case-sensitive password function correctly under this scenario.

Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign in functionality handles case-sensitive passwords correctly.
    - The system displays an error message indicating that the credentials provided are incorrect.
    - All unit tests related to sign in functionality with case-sensitive password pass.


Test ID: 6
Test case name: Sign In page redirect to Sign Up page test

Objective: To ensure that the sign-in page has a button or link that redirects users to the sign-up page, providing a seamless and user-friendly experience for new users.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible

Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Locate the button or link that redirects users to the sign-up page (e.g., "Sign Up").
    - Click the button or link to navigate to the sign-up page.
    - Verify that the system successfully redirects the user to the sign-up page.
    - Check that all components related to sign in page redirect to sign up page function correctly under this scenario.



Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign-in page has a button or link that redirects users to the sign-up page.
    - The system successfully redirects the user to the sign-up page.
    - All unit tests related to sign in page redirect to sign up page pass.



----------------------------------------------------------------------------------------------------------------------------------------------------------

    Test Sign Up

Test ID: 1
Test case name: Sign Up with valid information test

Objective: To ensure that the sign-up functionality allows new users to create an account with valid information, providing a secure and user-friendly registration process.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible

Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign-up page of the application.
    - Enter all required information with valid data (e.g., First Name, Last Name, Username, Password, and Confirm Password).
    - Click the "Sign Up" or "Register" button to submit the sign-up form.
    - Verify that the system successfully creates a new user account and redirects the user to the appropriate landing page or sends a confirmation Username, as per the application's workflow.
    - Check that all components related to sign-up functionality with valid information function correctly under this scenario.

Expected results:

    - Regression test data matches.
    - Sign-up page renders as expected.
    - The sign-up functionality allows new users to create an account with valid information.
    - The system successfully creates a new user account and redirects the user to the appropriate landing page or sends a confirmation Username, as per the application's workflow.
    - All unit tests related to sign-up functionality with valid information pass.


Test ID: 2
Test case name: Sign Up with duplicate Username test

Objective: To ensure that the sign-up functionality prevents users from creating an account with an Username that is already in use, maintaining system integrity.

Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible
    - An existing user account with a known Username

Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign-up page of the application.
    - Enter all required information, using the Username of the existing user account.
    - Click the "Sign Up" or "Register" button to submit the sign-up form.
    - Verify that the system displays an error message indicating that the Username is already in use.
    - Check that all components related to sign-up functionality with duplicate Username function correctly under this scenario.

Expected results:

    - Regression test data matches.
    - Sign-up page renders as expected.
    - The sign-up functionality prevents users from creating an account with an Username that is already in use.
    - The system displays an error message indicating that the Username is already in use.
    - All unit tests related to sign-up functionality with duplicate Username pass.



  Test set preferences

        Objective: 

        Preconditions:


        Test steps:


        Expected results:

   Test show merged articles

        Objective: 

        Preconditions:


        Test steps:


        Expected results:

   Test show category articles

        Objective: 

        Preconditions:


        Test steps:


        Expected results:
    
   Test searching

        Objective: System must search keywords in the pool of news articles using a search bar

        Preconditions: Server and Client must be up and running.


        Test steps:
            - Run all unit tests and check if they match the regression test data recorded before sprint 4.
            - Open the home page of the app.
            - Chooose a keyword that might be present in the news articles.
            - Type the word in the search box and click the search button.
            - Check if new articles fetched in the home tab, all consist of the keyword.
            - Change the page and check if new articles fetched in the home tab, all consist of the keyword.
            - Delete the keyword and click search.
            - Check if the new articles in every tab fetched, match the default settings.
            - Enter a keyword with gibrish and special characters that might not be present in any article.
            - Check if an appropiate error message appears.
            - Delete the keyword and click search.
            - Check if the new articles in every tab fetched, match the default settings.


        Expected results:
            - Regression test data matches.
            - Home page renders as expected.
            - The news articles change when enter is clicked with the keyword.
            - Other tabs match the default settings.
            - Searching for an emoty string brings back the default home screen results.
            - An error message is displayed when a key word is not present in any news article.
            
            
  

    Test advanced searching

        Objective: 

        Preconditions:


        Test steps:


        Expected results:
