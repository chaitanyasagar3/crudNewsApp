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
Test case name: Home Tab integration test

Objective: To ensure that all the tests in the home tab reflect the user settings and al unit tests pass.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:
    Log in as a user and click settings.
    Run all unit tests to check if all the components are tested.
    Check any 2-3 catagories in the setting dialog box and save.
    Run unit tests to see if the setting preferences have been saved for the user.
    Navigate to home tab and check the news displayed.
    Match the news with catagories that were checked in the setting page.
    All the catagories check must match the news articles.
    Run all unit tests to check if all the components are tested.


Expected results:

    The user is successfully logged in the system.
    The new user is logged in with default settings applied on their account.
    New checked setting are saved successfully.
    Home tab has news that matches the catagories checked.


Test ID: 3
Test case name: Pagenation integration test

Objective: To ensure that pagenation works in every tab.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:
    Log in as a user and click settings.
    Run all unit tests to check if all the components are tested.
    Check any 2-3 catagories in the setting dialog box and save.
    Run unit tests to see if the setting preferences have been saved for the user.
    Navigate to home tab and check the news displayed.
    Scroll to the bottom.
    Check if the first page has 9 news articles.
    Click the second page button on the bottom and check the number of news.
    There should be a total of 100 news articles.
    The last page (page 12) should have one articles. (11 pages * 9 articles) + (1 page * 1 article) = 100 articles
    Run all unit tests to check if all the components are tested.



Expected results:

    The user is successfully logged in the system.
    The new user is logged in with default settings applied on their account.
    New checked setting are saved successfully.
    Home tab has news that matches the catagories checked.
    Each page has a total of 9 article each.
    There are 12 pages with articles making a total of 100 articles.
