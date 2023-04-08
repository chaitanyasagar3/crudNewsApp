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
    Test data/Unit tests written in sprint 2 have been prepared for the test case

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
     Test data/Unit tests written in sprint 2 have been prepared for the test case

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

Test ID: 4
Test case name: Home Screen user settings persistence test

Objective:
To ensure that the home screen maintains user settings across sessions.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 02 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials on one device.
    Adjust various preferences and settings (e.g., home screen categories, display settings).
    Sign out and then sign in again on the same device to ensure that the updated preferences are retained across sessions.
    Verify that the updated preferences and settings are also applied and providing a consistent user experience.
    Make additional changes to preferences and settings on the second Session, and verify that these changes are synced back to the first session.
    Run unit tests to check that all components related to user preferences persistence function correctly under this scenario.

Expected results:

    The home screen maintains user preferences and settings across sessions, ensuring a consistent user experience.
     Updated settings are retained across sessions on the same device when the user signs in.
     Changes to settings are synced to providing a seamless user experience.

Test ID: 5
Test case name: Sign In password security test

Objective:
To ensure that the sign in functionality follows best practices for password security, protecting user accounts from unauthorized access.
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


Test ID: 06
Test case name: Sign Up form validation test

Objective: To ensure that the sign up functionality validates user input and ensures correct data entry before creating a new account.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Access the sign up page and attempt to create a new account with various invalid inputs, such as:
    - Empty or incomplete fields
    - Invalid Username
    - Passwords that do not meet minimum complexity requirements
    - Non-matching password confirmation
    Verify that the system does not create a new account and displays appropriate error messages for each case.
    Create a new account with valid inputs and verify that the system successfully creates the account and grants access.
    Run unit tests to check that all components related to form validation function correctly under this scenario.

Expected results:

    The sign up functionality validates user input and ensures correct data entry before creating a new account.
    The system does not create accounts with invalid inputs and displays appropriate error messages.
    The system creates accounts with valid inputs and grants access to the user.

Test ID: 07
Test case name: Sign Up duplicate account prevention test

Objective: To ensure that the sign up functionality prevents the creation of duplicate accounts using the same Username, maintaining data integrity.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Create a new account with valid inputs, including a unique Username.
    Attempt to create another account using the same Username and verify that the system does not allow the creation of a duplicate account.
    Check that the system displays an appropriate error message, indicating that theUsername is already in use.
    Create a new account with a different, unique Username and verify that the system successfully creates the account and grants access.
    Run unit tests to check that all components related to duplicate account prevention function correctly under this scenario.

Expected results:

    The sign up functionality prevents the creation of duplicate accounts using the same Username, maintaining data integrity.
    The system does not allow the creation of a duplicate account and displays an appropriate error message.
    The system creates accounts and grants access for unique Username.

Test ID: 08
Test case name: Settings page - category selection and save test

Objective: To ensure that the settings page allows users to select news categories for display on the home page and successfully saves the changes when the save button is clicked.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Navigate to the settings page.
    Select or deselect news categories as desired for display on the home page.
    Click the save button to apply the changes.
    Verify that the selected categories are displayed on the home page and the unselected categories are hidden.
    Run unit tests to check that all components related to category selection and saving function correctly under this scenario.

Expected results:

    The settings page allows users to select news categories for display on the home page.
    The changes are successfully saved and applied when the save button is clicked.
    The home page displays the selected categories and hides the unselected categories.

Test ID: 09
Test case name: Settings page - cancel button functionality test

Objective: To ensure that the settings page allows users to discard changes made to news category selections by clicking the cancel button, retaining the previous settings.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Navigate to the settings page.
    Note the current news category selections.
    Select or deselect news categories as desired for display on the home page.
    Click the cancel button to discard the changes.
    Verify that the previous news category selections are retained, and no changes are applied to the home page.
    Run unit tests to check that all components related to category selection and cancel button functionality function correctly under this scenario.

Expected results:

    The settings page allows users to discard changes made to news category selections by clicking the cancel button.
    The previous settings are retained, and no changes are applied to the home page.

Test ID: 10
Test case name: Settings page - default category selection test

Objective: To ensure that the settings page has the general category selected by default.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Navigate to the settings page.
    Verify that the general category is selected by default.
    Run unit tests to check that all components related to default category selection function correctly under this scenario.

Expected results:

    The settings page has the general category selected by default.
    The general category is displayed on the home page for new users.

Test ID: 11
Test case name: Settings page - minimum category selection test

Objective: To ensure that the settings page requires at least one category to be selected before saving the settings.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Navigate to the settings page.
    Deselect all categories except one and click the save button.
    Verify that the settings are saved and the home page displays the selected category.
    Attempt to deselect all categories and click the save button.
    Verify that the system does not allow saving settings with no categories selected and displays an appropriate error message.
    Run unit tests to check that all components related to minimum category selection function correctly under this scenario.

Expected results:

    The settings page requires at least one category to be selected before saving the settings.
    The system does not allow saving settings with no categories selected and displays an appropriate error message.
    The home page displays the selected category when at least one category is selected.

Test ID: 12
Test case name: Landing page - display general news for unsigned users

Objective: To ensure that when a user is not signed in, the landing page displays a list of articles from the NewsAPI "General" category.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Ensure no user is signed in.
    Access the landing page.
    Verify that the landing page displays a list of articles from the NewsAPI "General" category.
    Run unit tests to check that all components related to displaying general news for unsigned users function correctly under this scenario.

Expected results:

    When a user is not signed in, the landing page displays a list of articles from the NewsAPI "General" category.
    The general news is displayed correctly for unsigned users, providing an overview of current news events.

Test ID: 13
Test case name: Landing page - refresh button for unsigned users

Objective: To ensure that when a user is not signed in, they can see and use the refresh button to refresh the list of articles from the NewsAPI "General" category on the landing page.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Ensure no user is signed in.
    Access the landing page.
    Verify that the refresh button is visible on the landing page.
    Click the refresh button.
    Verify that the list of articles from the NewsAPI "General" category is refreshed and displays the most recent articles.
    Run unit tests to check that all components related to the refresh button functionality for unsigned users function correctly under this scenario.

Expected results:

    When a user is not signed in, they can see and use the refresh button on the landing page.
    The refresh button updates the list of articles from the NewsAPI "General" category with the most recent articles, providing updated content for unsigned users.

    Test ID: 14
Test case name: Signed-in user - display articles in descending order

Objective: To ensure that when a user is signed in, the articles are displayed in descending order with the most recent articles appearing first.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Access the home page or a specific category page.
    Verify that the articles are displayed in descending order, with the most recent articles appearing first.
    Run unit tests to check that all components related to displaying articles in descending order by recency function correctly under this scenario.

Expected results:

    When a user is signed in, they can see articles displayed in descending order with the most recent articles appearing first.
    The article display order provides users with the latest and most relevant content, enhancing their experience on the platform.

Test ID: 15
Test case name: Signed-in user - highlight currently selected link or tab

Objective: To ensure that when a user is signed in, the currently selected link (or tab) is highlighted, indicating the active section.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Access the home page or a specific category page.
    Verify that the currently selected link (or tab) is highlighted, indicating the active section.
    Click on a different link (or tab) and verify that the newly selected link (or tab) is now highlighted, while the previous one is no longer highlighted.
    Run unit tests to check that all components related to highlighting the currently selected link or tab function correctly under this scenario.

Expected results:

    When a user is signed in, the currently selected link (or tab) is highlighted, providing a clear indication of the active section.
    The highlighting updates correctly as users navigate between links or tabs, ensuring a consistent user experience.

Test ID: 16
Test case name: Signed-in user - pagination support for the list of articles on the landing page

Objective: To ensure that when a user is signed in, the list of articles on the landing page supports pagination, allowing users to browse through multiple pages of content.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Sign in with an existing user's credentials.
    Access the landing page.
    Verify that the list of articles supports pagination, with navigation options such as "Next", "Previous", and specific page numbers.
    Navigate through multiple pages using the pagination options and verify that the articles are displayed correctly on each page.
    Run unit tests to check that all components related to pagination support for the list of articles on the landing page function correctly under this scenario.

Expected results:

    When a user is signed in, the list of articles on the landing page supports pagination, allowing users to browse through multiple pages of content.
    The pagination options function correctly, enabling users to access articles on different pages in a user-friendly manner.

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


Test ID: 17
Test case name: Pagenation integration test

Objective: To ensure that pagenation works in every tab.

Preconditions:

    The system is up and running
    All the required external systems and services are available and accessible
    Test data/Unit tests written in sprint 2 have been prepared for the test case

Test steps:

    Attempt to sign in with valid user credentials, but using different cases for the password (e.g., upper-case, lower-case, mixed-case).
    Verify that the system is case-sensitive when validating passwords, accepting only the correct password with the proper case.
    Check the system's implementation of password storage, verifying that it follows best practices such as salting and hashing.
    Run unit tests to check that all components related to password security function correctly under this scenario.

Expected results:

    The sign in functionality follows best practices for password security, protecting user accounts from unauthorized access.
    The system is case-sensitive when validating passwords and accepts only the correct password with the proper case.
    Passwords are encrypted or hashed during transmission and storage, following best practices such as salting and hashing.
