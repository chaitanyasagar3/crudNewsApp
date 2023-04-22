News App

Date: 2/21/2023

Sprint 1:

Version 0.1

Table of Contents

    Objectives
    Scope
    Requirements
    Test Strategy
    Project Milestones
    Resources

Test Plan

1. Objectives
   • Build landing page for an app
   • Build a sign-up page
   • Build a sign-in page
   • Write a test plan for the above
   • Develop test cases
   • Execute the tests
   • Report the results
2. Scope
   Create a personal news feed app in a group agile enviornment. The first sprint will consist of creation and testing of sign up and sign in pages with a generic home page. The test plan cases will be manual. The team will follow a MERN stack to work on the project.
   Client/Web side: react.js.
   Server side: Express.js, Node.js
   Database: MongoDB
3. Requirements for Test:

   Landing Page

   • UX
   • Build a landing page for your app
   • Requirement 1
   – When not signed in, the landing page shall display a method (button or link) to navigate to a “Sign-in” page
   • Requirement 2
   – When signed in, the landing page shall display the user’s name

   -When signed in, the landing page shall display a method to sign out (button or link)

   Sign in Page

   • UX
   • Build a sign in page for your app
   • Requirement 1
   – Implement a form that will sign in a user
   – The form shall use a textbox to collect a user name
   – The user name shall be required
   – The form shall use a textbox to collect a password
   – The password shall be required
   – The form shall use a button to submit the form
   • Requirement 2
   – When a correct combination of user id and password have been submitted, navigate to
   the Landing Page as signed in• Requirement 3
   – When an incorrect combination of user id and password have been submitted, display
   an appropriate message

   • Requirement 4
   – The sign in page shall include a link to the sign-up page for new users who do not yet have an account.

   Sign up Page
   • UX
   • Build a sign up page for your app
   • Requirement 1
   – Implement a form that will sign in a user
   – The form shall use a textbox to collect a user name
   – The user name shall be required
   – The form shall use a textbox to collect a password
   – The password shall be required
   – The form shall use a textbox to collect a confirmation password
   – The confirmation password shall be required
   – The form shall use a button to submit the form
   • Requirement 2
   – The user name shall be a string at least 8 character long
   – The user name shall not include any spaces
   – The UX shall automatically trim leading and trailing spaces
   • Requirement 3
   – The password shall not include any spaces
   – The password shall be at least 8 characters long
   – The UX shall automatically trim leading and trailing spaces
   – The password must contain at least one upper case letter
   – The password must contain at least one lower case letter
   – The password must contain at least one character that is not a
   letter
   • Requirement 4
   – When the form is correctly filled out and submitted, navigate to the
   Landing Page as signed in
   • Requirement 5
   – When an incorrect entry is made, display an appropriate message
   • Requirement 5
   – The sign-up form shall include a "Cancel" button that allows users to cancel their sign-up process and return to the landing page.

   Test Strategy

   Design Verification
   – Verify the software meets the design requirements
   Production test
   – Verify the software will perform its’ functions properly
   Acceptance test

   Regression test

   -Verify that existing functionality not negatively affected by changes
4. Project Milestones

   1. Sprint 1 (2/20/2023 - 3/6/2023)-
      * Project/Test Planing (2/21/2023)
      * Design/Development (Client) (2/22/2023 - 2/27/2023)
      * Design/Development (Server) (2/28/2023 - 3/5/2023)
      * Testing (2/24/2023-3/5/2023)
5. Resources
   Uditanshu Khatri: Development- Backend, Middleware, Testing
   Chaitanya Sagar: Development - Full Stack, Scrum Master
   Rini: Development- Frontend, Testing
   Deepak: Database, Testing

Sprint 2:

CRUDBoard

Date: 3/9/2023

Version 0.2

Table of Contents
    Objectives
    Scope
    Requirements
    Test Strategy
    Project Milestones

Test Plan

1. Objectives

   1. Add a list of news articles to the landing page.
   2. When a user is signed in, show a link to edit settings.
   3. Add a settings page to the app
   4. Setting allow choosing one or more of the following
      * General (on by default)
      * Business
      * Entertainment
      * Health
      * Science
      * Sports
      * Technology
   5. Allow users to refresh the list of articles
   6. Write at least ten unit tests (frontend, backend, or both)
   7. Write at least five unit tests using Test Driven Development
2. Scope

   Until now the scope of project was to create an application in which user is able to succesfully login and log out. Now it shifts towards creating the newsboard for the user , create a settings page where user can register its preferences of news items. These preferences should remain persistent even after re login. Another functionality of refresh is to be added in so that user can pull the latest news.

   The socpe of testing shifts from manual testing to using automated tools for unit testing.All the previous components and upcoming components to be tested using Jest for unit testing.
3. Requirements

   Landing Page

   1. UX
   2. UX
   3. Add features to your landing page
   4. Requirement 1

      1. When not signed in, the landing page shall display a list of articles from the NewsAPI “General” category(Choose Number of Page)
   5. Requirement 2

      1. The landing page shall have a link (or button) to refresh the list of articles
   6. Requirement 3

      1. When signed in, the landing page shall display a link (or button) to open a Settings page(You may use a modal dialog for this purpose)

   Settings Page

   1. UX
   2. Build a settings page (or modal dialog) for your app
   3. Requirement 1
      1. Implement a form that will save the user’s preferences
      2. Allow the user to choose one or more of these categories
         1. General
         2. Business
         3. Entertainment
         4. Health
         5. Science
         6. Sports
         7. Technology
      3. The form shall use a button, link, or image to submit
   4. Requirement 2
      1. There shall be at least one item selected
      2. There shall be a button, link, or image to cancel the changes
   5. Requirement 3
      1. When the user clicks Ok or Cancel, the app displays the landing page
      2. The landing page does not have to reflect the settings (that is next sprint)
4. Test Strategy

   Test Methodology : **Jest**

   Unit Testing

   1. Old Features
   2. New Features
5. Project Milestones

   1.Sprint 1 (Completed)
   2.Sprint 2  (3/6/2023 - 3/20/2023)

Sprint 3:

Date: 29/3/2023

Version 0.3

Table of Contents
    Objectives
    Scope
    Requirements
    Test Strategy
    Project Milestones

Test Plan

1. Objectives

• Use the settings in preferences to display articles
   – Displayed on the “Home” link
   – Show articles in descending order from the most recent
• Add links to filter articles in the following ways
   – Home (on by default)
   – General
   – Business
   – Entertainment
   – Health
   – Science
   – Sports
   – Technology
   – Note. Only the “Home” link is affected by the user’s settings
• Write at least five integration tests
   – Integration tests can be either manual or automated
   – Integration tests must verify the components are working together
   – Your test plan must be updated to include your integration tests
   – Your test cases must be updated to include your integration tests
   – You must run your test suite showing the results of the integration tests

2. Scope

   This sprint will focus on expanding/personalising user preferences. Ever user will have their own home page with their preferences catered to their needs.

   The socpe of testing shifts from jest testing to a combination of unit and manual testing. All the previous failing components need to be fixed and upcoming components need to be developed.
3. Requirements

   Landing Page

   • UX
   • Add features to your landing page
   • Requirement 1
   – The landing page shall have a links (or tabs) to select the articles
   displayed
   – There will be a “Home” link plus links for each category
   • Requirement 2
   – The “Home” link will display articles from the categories chosen in
   the settings page
   – The articles will be shown is descending order with the most recent
   first
   • Requirement 3
   – Upon signing in, the landing page will display articles for the
   “Home” link
   • Requirement 4
   – The currently selected link (or tab) shall be highlighted. This
   is “Home” when first signed-in
   • Requirement 5
   – The list of articles will support pagination. You may choose
   the number of item displayed on each page.

REST API Requirements
   • API
   • Requirement 6
      – Improve the news endpoint
   • GET
   • /news/{user}
      – Status Code
         • 200 – Articles have been returned
         • 401 – User is not recognized (unauthorized)
      – Returns the articles from the user’s settings
      – The returned articles shall be in descending order starting with the
      most recent
      – Limit results to 250 articles

   • Requirement 7
      – Add a new category endpoint
   • GET
   • /category/{category}
      – Status Code
   • 200 – Articles have been returned
      – Returns the articles for the specified category
      – The returned articles shall be in descending order starting
      with the most recent
      – Limit results to 250 articles

4. Test Strategy

   Test Methodology : **Jest** + Manual Testing
   Perform Unit/Integration Testing.
5. Project Milestones

   1.Sprint 1 (Completed)
   2.Sprint 2 (Completed)
   2.Sprint 3 (3/27/2023-3/10/2023)

Integration Test cases:

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

Sprint 4:

Date: 12/04/2023

Version 0.4

Table of Contents
    Objectives
    Scope
    Requirements
    Test Strategy
    Project Milestones

Test Plan

1. Objectives

• Add a search capability
    – Add a textbox for searching on keywords
    – Use the NewsAPI everything
• Add advanced search capabilities
    – Build support for AND, OR and NOT keywords
    – Include support for parenthesis
• Run a system test that validates your entire application
    – Run a regression test
        • Test sign up
        • Test sign in
        • Test set preferences
        • Test show merged articles
        • Test show category articles
        • Test searching
        • Test advanced searching

2. Scope
   Adding the search functionality using a text box which will operate on keywords.

   Testing: This sprint will be more focused on testing that will include regression and system testing.
3. Requirements

   • UX
   • Add searching to your signed-in landing page
   • Requirement 1
   – The landing page shall have a text box for entering search terms
   • Requirement 2
   – The search box will support use of AND, OR, and NOT
   – The search box will support use of parenthesis
   • Requirement 3
   – The search results will display in descending order starting with the
   most recent
   • Requirement 4
   – A meaningful message is displayed when are no results to show
   • API
   • Requirement 5
   – Add a new search endpoint
   • GET
   • /search/{search terms}
   – Status Code
   • 200 – Articles have been returned
   – Returns the articles in descending order starting with the
   most recent
4. Test Strategy

   Test Methodology : Regression and system tests
5. Regresstion test data(Till sprint 3) before starting development:
   Total Automated Suits: 10     Pass: 9     Fail: 1
   Total Automated Tests: 40     Pass: 39    Fail: 1

   Unit Tests:
   Client Side Suites:
   SignInPage.tst.js:          Total: 11    Pass: 11     Fail: 0
   SignUpPage.js:              Total: 7     Pass: 7      Fail: 0
   GuestLanding.test.js:       Total: 2     Pass: 2      Fail: 0
   LandingPage.test.js:        Total: 2     Pass: 2      Fail: 0
   NewsCard.test.js:           Total: 2     Pass: 2      Fail: 0
   UserLanding.test.js:        Total: 2      Pass: 2        Fail:  0

   Header.test.js:             Total: 6     Pass: 5      Fail: 1
   SettingsModal.test.js:      Total: 4     Pass: 4      Fail: 0
   Auth.test.js:               Total: 3     Pass: 3      Fail: 0
   news.test.js:               Total: 3     Pass: 3      Fail: 0

   Server Side Suites:
   NewsController.test.js:     Total: 16     Pass: 15      Fail: 1
   userController.test.js:     Total: 8     Pass: 8      Fail: 0

   Integration tests:
   Total Tests: 17     Pass: 17    Fail: 0

   Regression Test Data after Development:

   Total Automated Suits: 10     Pass: 10     Fail: 0
   Total Automated Tests: 47     Pass: 47    Fail: 0

   Unit Tests:
   Client Side Suites:
   SignInPage.tst.js:          Total: 11    Pass: 11     Fail: 0
   SignUpPage.js:              Total: 7     Pass: 7      Fail: 0
   GuestLanding.test.js:       Total: 2     Pass: 2      Fail: 0
   LandingPage.test.js:        Total: 2     Pass: 2      Fail: 0
   NewsCard.test.js:           Total: 2     Pass: 2      Fail: 0
   UserLanding.test.js:        Total: 2      Pass: 2        Fail:  0

   Header.test.js:             Total: 6     Pass: 5      Fail: 1
   SettingsModal.test.js:      Total: 4     Pass: 4      Fail: 0
   Auth.test.js:               Total: 3     Pass: 3      Fail: 0
   news.test.js:               Total: 3     Pass: 3      Fail: 0

   Server Side Suites:
   Total Automated Suits: 4    Pass: 4     Fail: 0
   Total Automated Tests: 28     Pass: 28    Fail: 0
   NewsController.test.js:     Total: 17     Pass: 17      Fail: 0
   userController.test.js:     Total: 8     Pass: 8      Fail: 0

   Integration tests:
   Total Tests: 17     Pass: 17    Fail: 0

   New Unit test Cases for Sprint 4 Functionalities:
   Server Side Suite:
   NewsController : News Search API should should return a 200 status code if succefully hit
   authentication : authentication should should return 401 if no token is provided / should return 401 if an invalid token is provided

   Client Side Suite:
   news.js: News Axios call should call axios.get with correct params / News Axio call should return articles on success
   UserLanding.js: If search bar works
   auth.js: login should make a POST request to login with the correct data / singup should make a POST request to add-user with the correct data/ updatePreference should make a POST request to update-preferences with the correct data
6. Project Milestones

   1.Sprint 1 (Completed)
   2.Sprint 2 (Completed)
   2.Sprint 3 (Completed)
   4.Sprint 4 (10/04/2023 - 24/04/2023)
