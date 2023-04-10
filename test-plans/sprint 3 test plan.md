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

**Manual**

Test ID: 1.  Test case name: Home Screen integration test

Objective: To ensure that a new catagory is successfully processed end-to-end by the system, including all the integrations with external systems and services.



Test ID:  2. Test case name: Home Screen customization test

Objective: To ensure that a user is able to customize their home screen with selected categories and that the system correctly displays the customized content.



Test ID: 3  Test case name: Home Screen user authentication test

Objective: To ensure that the home screen provides a secure and reliable user authentication process, preventing unauthorized access and protecting user data.



Test ID: 4. Test case name: Home Screen user settings persistence test

Objective:
To ensure that the home screen maintains user settings across sessions.



Test ID: 5 Test case name: Sign In password security test

Objective:
To ensure that the sign in functionality follows best practices for password security, protecting user accounts from unauthorized access.



Test ID: 06. Test case name: Sign Up form validation test

Objective: To ensure that the sign up functionality validates user input and ensures correct data entry before creating a new account.



Test ID: 07. Test case name: Sign Up duplicate account prevention test

Objective: To ensure that the sign up functionality prevents the creation of duplicate accounts using the same Username, maintaining data integrity.



Test ID: 08. Test case name: Settings page - category selection and save test

Objective: To ensure that the settings page allows users to select news categories for display on the home page and successfully saves the changes when the save button is clicked.



Test ID: 09. Test case name: Settings page - cancel button functionality test

Objective: To ensure that the settings page allows users to discard changes made to news category selections by clicking the cancel button, retaining the previous settings.



Test ID: 10. Test case name: Settings page - default category selection test

Objective: To ensure that the settings page has the general category selected by default.



Test ID: 11. Test case name: Settings page - minimum category selection test

Objective: To ensure that the settings page requires at least one category to be selected before saving the settings.



Test ID: 12. Test case name: Landing page - display general news for unsigned users

Objective: To ensure that when a user is not signed in, the landing page displays a list of articles from the NewsAPI "General" category.



Test ID: 13. Test case name: Landing page - refresh button for unsigned users

Objective: To ensure that when a user is not signed in, they can see and use the refresh button to refresh the list of articles from the NewsAPI "General" category on the landing page.



Test ID: 14. Test case name: Signed-in user - display articles in descending order

Objective: To ensure that when a user is signed in, the articles are displayed in descending order with the most recent articles appearing first.



Test ID: 15. Test case name: Signed-in user - highlight currently selected link or tab

Objective: To ensure that when a user is signed in, the currently selected link (or tab) is highlighted, indicating the active section.



Test ID: 16. Test case name: Signed-in user - pagination support for the list of articles on the landing page

Objective: To ensure that when a user is signed in, the list of articles on the landing page supports pagination, allowing users to browse through multiple pages of content.



Test ID: 17. Test case name: Pagenation integration test

Objective: To ensure that pagenation works in every tab.
