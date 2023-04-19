System Test:

    Test Sign In

    Objective: To ensure that the sign in functionality allows users with valid credentials to access the system, providing a secure and user-friendly login process.

    Preconditions:

    -  The system is up and running
    - All the required external systems and services are available and accessible
    - A test user account with valid credentials (Username and Password) is available
    - A test user account with invalid credentials (Username and Password) is available



    Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign in page of the application.
    - Enter the valid Username and Password for the test user account and submit the form.
    - Verify that the system successfully logs the user in and redirects them to the appropriate landing page.
    - Enter the invalid Username and Password for the test user account and submit the form..
    - Verify that the system displays an error message indicating that the credentials provided are incorrect.
    - Leave the Username and Password fields empty and submit the form.
    - Verify that the system displays an error message indicating that both the Username and password fields are required.
    - Enter a valid Username and leave the Password field empty and submit the form.
    - Verify that the system displays an error message indicating that the password field is required.
    - Enter the valid Username and an incorrect Password with case changes (e.g., if the correct password is "Password123", enter "password123") and submit the form.
    - Verify that the system displays an error message indicating that the credentials provided are incorrect.
    - Locate the button or link that redirects users to the sign-up page (e.g., "Sign Up") and click on button.
    - Verify that the system successfully redirects the user to the sign-up page.
    - Check that all components related to sign in functionality with valid credentials function correctly under this scenario.

    Expected results:

    - Regression test data matches.
    - Sign in page renders as expected.
    - The sign in functionality allows users with valid credentials to access the system.
    - The sign in functionality denies access to users with invalid credentials.
    - The sign in functionality prevents users from submitting an empty Username and password.
    - The sign in functionality prevents users from submitting a valid Username and empty password.
    - The sign in functionality handles case-sensitive passwords correctly.
    - The sign-in page has a button or link that redirects users to the sign-up page.
    - The system successfully logs the user in and redirects them to the appropriate landing page or dashboard.
    - All unit tests related to sign in functionality with valid credentials pass.



---

    Test Sign Up


    Objective: To ensure that the sign-up functionality allows new users to create an account with valid information, providing a secure and user-friendly registration process.

    Preconditions:

    - The system is up and running
    - All the required external systems and services are available and accessible

    Test steps:

    - Run all unit tests and check if they match the regression test data recorded before sprint 4.
    - Navigate to the sign-up page of the application.
    - Enter all required information with valid data (e.g., First Name, Last Name, Username, Password, and Confirm Password) and submit the form.
    - Enter all required information, using the Username of the existing user account and submit the form.
    - Verify that the system displays an error message indicating that the Username is already in use.
    - Enter all required information, but enter mismatched values for the password and confirm password fields (e.g., "password123" and "password321") and submit the form.
    - Verify that the system displays an error message indicating that the password and confirm password fields do not match.
    - Enter all required information, using a weak password that does not meet the minimum password complexity requirements (e.g., "password") and submit the form..
    - Verify that the system displays an error message indicating that the password is too weak or does not meet complexity requirements.
    - Enter partial information, leaving one or more required fields empty (e.g.,Username, Password, or Confirm Password)and submit the form.
    - Verify that the system displays an error message indicating that the missing required field(s) must be completed.
    - Click the "Sign Up" or "Register" button to submit the sign-up form.
    - Verify that the system successfully creates a new user account and redirects the user to the appropriate landing page or sends a confirmation Username, as per the application's workflow.
    - Check that all components related to sign-up functionality with valid information function correctly under this scenario.

    Expected results:

    - Regression test data matches.
    - Sign-up page renders as expected.
    - The sign-up functionality allows new users to create an account with valid information.
    - The sign-up functionality prevents users from creating an account with an Username that is already in use.
    - The sign-up functionality enforces a minimum password complexity.
    - The sign-up functionality validates the presence of all required fields.
    - The system successfully creates a new user account and redirects the user to the appropriate landing page or sends a confirmation Username, as per the application's workflow.
    - All unit tests related to sign-up functionality with valid information pass.


---

Test ID: 3
Test case name:Test Landing Page for Guest User

        Objective:   To verify that the Landing page works as expected for a guest-user

        Preconditions: Server and Client must be up and running.


        Test steps:
        - Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the General tab is selected by default.
        - Verify that the home screen displays 9 news cards.
        - Check if the user is able to navigate to the other tabs by clicking on the respective tabs.
        - Check if the respective category of news is being displayed when the tab is selected.

        Expected results:
        - Regression test data matches.
        - Home page renders as expected.
        - General tab is selected by default.
        - There are 9 news cards as expected.
        - Other tabs are selectable, and displays the respective category news.

---

Test ID: 4
Test case name:Test Landing Page for Signed-in User

        Objective:  To verify that the Landing page works as expected for a signed-in user.


        Preconditions: Server and Client must be up and running and user has created an account and is signed in to the app.



        Test steps:
        -Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the General tab is selected by default
        - Verify that the home screen displays 9 news cards.
        - Check if the home page displays settings button
        - Check if the user is able to navigate to the other tabs by clicking on the respective tabs
        - Check if the respective category of news is being displayed when the tab is selected


        Expected results:
        - Regression test data matches.
        - Home page renders as expected.
        - General tab is selected by default
        -There are 9 news cards as expected
        - The settings button is present and is clickable
        -Other tabs are selectable, and displays the respective category news.

---

Test ID: 5
Test case name:Test 'set preferences' feature for signed-in User

        Objective:  To verify that the setting preferences feature works as expected for a signed-in user.


        Preconditions: Server and Client must be up and running and user has created an account and is signed in to the app.



        Test steps:
        -Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the General tab is selected by default
        - Verify that the home screen displays 9 news cards.
        - Check if the home page displays settings button
        - User should be able to click on the settings button
        - The settings popup should appear displaying checkboxes for various news categories.
        - The general option is checked by default
        - The user should be able to select the categories
        - The user should be able to save the selected categories by clicking the save button
        - The preferences should be saved and the user should be redirected back to the home screen.

        Expected results:
        - Regression test data matches.
        - Home page renders as expected.
        - The settings button is present and is clickable
        - The settings popover is opened and it is displaying the categories
        - The general category is selected by default
        - The user is able to select the categories by checking the box
        - The user is navigated to the Home Screen on clicking save button

---

Test ID: 6
Test case name: Test show merged articles

        Objective:  To verify that the home page is showing articles from the categories checked in the settings preferences


        Preconditions: Server and Client must be up and running and user has created an account and is signed in to the app.



        Test steps:
        -Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the General tab is selected by default
        - Verify that the home screen displays 9 news cards.
        - Verify that the Home Screen is displaying the general category news
        - Check if the home page displays settings button
        - User should be able to click on the settings button
        - The settings popup should appear displaying checkboxes for various news categories.
        - The general option is checked by default
        - The user should be able to select the categories
        - The user should be able to save the selected categories by clicking the save button
        - The preferences should be saved and the user should be redirected back to the home screen.
        - Verify that the news cards in home tab is belonging to the selected categories only.

        Expected results:
        - Regression test data matches.
        - Home page renders as expected.
        - The settings button is present and is clickable
        - The settings popover is opened and it is displaying the categories
        - The general category is selected by default
        - The user is able to select the categories by checking the box
        - The user is navigated to the Home Screen on clicking save button
        - The news cards in home tab is belonging to the selected categories only.

---

Test ID: 7
Test case name: Test show Category articles

        Objective:  To verify that the user is able to see the respective news articles by navigating the tabs


        Preconditions: Server and Client must be up and running and user has created an account and is signed in to the app.



        Test steps:
        -Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the General tab is selected by default
        - Verify that the home screen displays 9 news cards.
        - Verify that the Home Screen is displaying the general category news
        - Check if the home page displays various tabs for the respective category
        - Check if the user is able to click on any of the category tab
        - Verify that the news cards in the respective tab is belonging to the selected category

        Expected results:
        - Regression test data matches.
        - Home page renders as expected.
        - The settings button is present and is clickable
        - The settings popover is opened and it is displaying the categories
        - The general category is selected by default
        - The user is able to click on the category tab
        - the news cards in the respective tab is belonging to the selected category

---

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

---

    Test advanced searching

        Objective:

        Preconditions:


        Test steps:


        Expected results:
