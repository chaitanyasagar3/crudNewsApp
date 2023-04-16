System Test:

    Test Sign In

        Objective: 

        Preconditions:


        Test steps:


        Expected results:

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