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


    Test Sign Up

        Objective: 

        Preconditions:


        Test steps:


        Expected results:

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
