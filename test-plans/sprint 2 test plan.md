CRUDBoard

Date: 3/9/2023

Version 0.1

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
