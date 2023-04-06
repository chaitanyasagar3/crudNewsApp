Test ID: 1
Test case name: Home Screen integration test

Objective: To ensure that a new catagory is successfully processed end-to-end by the system, including all the integrations with external systems and services.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Create a new user using the system's Sign Up page and database, including all the required order details such as user information, password.
    Verify that the user is successfully created in the system's database and all the required data is correctly stored.
    Verify that the system acknowledges creation of a new user and returns a response to the system.
    Update the user status from "guest" to "user name".
    Sign in with the new user details.
    Run all the unit tests for sign in and sign up pages.
    Check if the new user's home screen has news that contains general news.
    Check if every catagory tab has appropiate results.
    Run unit tests to check all the components run fine under this scenario.

Expected results:

    The user is successfully created in the system's database with all the required data.
    The new user is logged in with default settings applied on their account.
    Home tab has general news and every other tab has the news which matches the tab's name.
    
    
    
Test ID: 2
Test case name: Home Screen customization test

Objective: To ensure that a user is able to customize their home screen with selected categories and that the system correctly displays the customized content.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 3 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Navigate to the account settings or customization page.
    Select a few categories to be displayed on the user's home screen.
    Save the changes and return to the home screen.
    Verify that only the selected categories are displayed on the home screen.
    Check if each selected category tab has appropriate results.
    Run unit tests to check that all components function correctly under this scenario.
    Sign out and sign in again to ensure the customized settings are persistent across sessions.

Expected results:

    The home screen displays only the selected categories, with appropriate content in each category.
    The customized settings persist across user sessions, ensuring a personalized user experience.
    
    
    
    
 Test ID: 3
 Test case name: Home Screen user authentication test
 
Objective: To ensure that the home screen provides a secure and reliable user authentication process, preventing unauthorized access and protecting user data.

Preconditions:

     The system is up and running
     All the required external systems and services are available and accessible
     Test data/Unit tests written in sprint 3 have been prepared for the test case

Test steps:

     Attempt to access the home screen without signing in or with invalid credentials. 
     Verify that the system does not grant access to the home screen for unauthorized users or those with incorrect credentials. 
     Sign in with valid user credentials and verify successful access to the home screen.
     Test the "Forgot Password" functionality, ensuring that it sends a password reset link to the registered email address.
     Use the password reset link to change the user's password and confirm that the updated password works for signing in. 
     Sign out and verify that the user's session is terminated, preventing unauthorized access to their account.
     Run unit tests to check that all components related to user authentication function correctly under this scenario.

Expected results:

     The home screen's user authentication process is secure and reliable, preventing unauthorized access and protecting user data.
     Unauthorized users or those with incorrect credentials cannot access the home screen. 
     The "Forgot Password" functionality works as expected, allowing users to reset their passwords securely.
     User sessions are terminated upon signing out, ensuring continued security.

