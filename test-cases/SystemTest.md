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

Test Landing Page

        Objective:   To verify that the Landing page works as expected for a guest-user

        Preconditions: Server and Client must be up and running.


        Test steps:
        - Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the General tab is selected by default for the guest user.
        - Check if the Home tab is selected by default for a signed in user.
        - Check if the settings button is displayed for signed in user.
        - Verify that the home screen displays 9 news cards.
        - Check if the app is displaying General news when the user is clicking on the General tab.
        - Check if the app is displaying Business news when the user is clicking on the Business tab.
        - Check if the app is displaying Entertainment news when the user is clicking on the Entertainment tab.
        - Check if the app is displaying Health news when the user is clicking on the Health tab.
        - Check if the app is displaying Science news when the user is clicking on the Science tab.
        - Check if the app is displaying Sports news when the user is clicking on the Sports tab.
        - Check if the app is displaying Technology news when the user is clicking on the Technology tab.
        - Check if the respective category of news is being displayed when the tab is selected.
        - Scrolling down the landing page and verify that user can see the page numbers
        - Click on an unselected page number and verify the the user is navigated to the selected page

        Results:
        - Regression test data matches.                                                                                 
        - Home page renders as expected.                                                                                
        - General tab is selected by default for the guest user.                                                        
        - Home tab is selected by default for the signed-in user.                                                      
        - Settings button is displayed for the signed-in user.                                                       
        - There are 9 news cards as expected.                                                                          
        - The app is displaying General news when the user is clicking on the General tab.                              
        - The app is displaying Business news when the user is clicking on the Business tab.                           
        - The app is displaying Entertainment news when the user is clicking on the Entertainment tab.                
        - The app is displaying Health news when the user is clicking on the Health tab.                                
        - The app is displaying Science news when the user is clicking on the Science tab.                              
        - The app is displaying Sports news when the user is clicking on the Sports tab.                               
        - The app is displaying Technology news when the user is clicking on the Technology tab.                       
        - User can see the page numbers on scrolling down the landing page                                              
        - User is navigated to the respective page on clicking a page number                                           

---

Test 'Set Preference' feature

        Objective:  To verify that the setting preferences feature works as expected for a signed-in user.


        Preconditions: Server and Client must be up and running and user has created an account and is signed in to the app.


        Test steps:
        - Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the Home tab is selected by default
        - Verify that the home screen displays 9 news cards.
        - Check if the Home page displays settings button
        - User should be able to click on the settings button
        - The settings popup should appear displaying checkboxes for various news categories.
        - Check if the general option is checked by default
        - Verify if the user is able to select a category
        - Verify if the user is able to unselect a category
        - Verify if the user is able to select multiple categories
        - Verify if the user is able to save the selected categories by clicking the save button
        _ Verify if the user is able to dismiss the popover by clicking the cancel button
        - The preferences should be saved and the user should be redirected back to the home screen.

        Results:
        - Regression test data matches.                                                                         
        - Home page renders as expected.                                                                        
        - Home tab is selected by default.                                                                      
        - The settings button is present and is clickable                                                       
        - The settings popover is opened and it is displaying the categories                                    
        - The general category is selected by default                                                           
        - Check if the general option is checked by default                                                     
        - The user is able to select a category                                                                 
        - The user is able to unselect a category                                                               
        - The user is able to select multiple categories                                                      
        - The user is able to save the selected categories by clicking the save button                         
        _ The user is able to dismiss the popover by clicking the cancel button                                
        - The preferences is saved and the user is redirected back to the home screen.                      

---

Test show merged articles

        Objective:  To verify that the home page is merging articles from the categories checked in the settings preferences


        Preconditions: Server and Client must be up and running and user has created an account and is signed in to the app.



        Test steps:
        - Run all unit tests and check if they match the regression test data recorded before sprint 4.
        - Open the home page of the app.
        - Check if the Home tab is selected by default
        - Verify that the home screen displays 9 news cards.
        - Check if the home page displays settings button
        - User should be able to click on the settings button
        - Click on the setting button and verify that general category is checked by default
        - Verify that the Home Tab is displaying the general category news
        - Click on settings button and select the Health and Business Categories
        - Save the settings popover by Clicking the save button
        - Verify that the Home tab contains news from Health and Business Categories
        - Click on settings button and select the Sports Category
        - The user should be able to save the selected category by clicking the save button
        - Verify that the Home tab contains news from Health, Business and Sports Categories

        Expected results:
        - Regression test data matches.                                                                         
        - Home page renders as expected.                                                                        
        - Home tab is selected by default                                                                       
        - The home screen displays 9 news cards.                                                                
        - The home page displays settings button                                                                
        - User is able to click on the settings button                                                          
        - General category is checked by default in the settings popover                                        
        - The Home Tab is displaying the general category news                                                  
        - User is able to click on settings button and select the Health and Business Categories                
        - The preferences are saved by clicking the save button                                                 
        - The Home tab contains news from Health and Business Categories                                        
        - User is able to click on settings button and select the Sports Categories                             
        - The preferences are saved by clicking the save button                                                 
        - The Home tab contains news from Health, Business and Sports Categories                                

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
            - Check the dates for the articles from top to make sure the articles are in descending order starting with the most recent.
            - Delete the keyword and click search.
            - Check if appropiate error message is displayed. ("Please enter a search query")
            - Check if the new articles in every tab fetched, match the default settings.
            - Enter a keyword with gibrish and special characters that might not be present in any article.
            - Check if an appropiate error message appears.
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

        Objective: System must search advanced combinations of keywords in the pool of news articles using a search bar

        Preconditions: Server and Client must be up and running.

                Test steps: 
                        - Run all unit tests and check if they match the regression test data recorded before sprint 4. 
                        - Perform search operation with two keywords seperated by "AND". 
                        - Check if new articles, fetched in the home tab, all consist of both the keywords. 
                        - Open any article and press "Control + f". Type and search both the keywords to check if both the words are present in the article. 
                        - Check the dates for the articles from top to make sure the articles are in descending order starting with the most recent. 
                        - Similarly perform searches for "OR" and "NOT" operations.
                                - OR: Any one or both key words should be present in the news articles.
                                - NOT: They key word should not be present in any of the articles. 
                        - Choose keywords and use random combinations of parenthesis. EG: (Phone OR Human) AND ex-cop. 
                        - Check if new articles, fetched in the home tab, all have appropiate keywords. 
                        - Open any article and press "Control + f". Type and search all have appropiate keywords.

        Expected results: 
                - Unit tests match the pre recorded regression data. 
                - Search yields news articles. 
                - All the news articles have both the keywords. 
                - The news articles are in descending order starting with the most recent. 
                - OR: Any one or both key words should be present in the news articles. 
                - NOT: They key word should not be present in any of the articles. 
                - Different parenthesis searches have no impact on the search and yields desired results.
