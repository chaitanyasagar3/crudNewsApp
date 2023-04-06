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
