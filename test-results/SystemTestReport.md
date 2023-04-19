Tester: UDITANSHU KHATRI
TEST: System Test

System Test:

    Test Sign In

        Results:

    Test Sign Up

        Results:

    Test Test set preferences

        Results:

    Test Test show merged articles

        Results:

    Test Test show category articles

        Results:
    
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


        Results:
            - Regression test data matches.                                                             :Pass
            - Home page renders as expected.                                                            :Pass
            - The news articles change when enter is clicked with the keyword.                          :Pass
            - Other tabs match the default settings.                                                    :Pass
            - Searching for an emoty string brings back the default home screen results.                :Pass
            - An error message is displayed when a key word is not present in any news article.         :Pass


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
                * OR: Any one or both key words should be present in the news articles.
                * NOT: They key word should not be present in any of the articles.
        - Choose keywords and use random combinations of parenthesis. EG: (Phone OR Human) AND ex-cop.
        - Check if new articles, fetched in the home tab, all have appropiate keywords.
        - Open any article and press "Control + f". Type and search all have appropiate keywords.


    Results:
        - Unit tests match the pre recorded regression data.                                                :Pass
        - Search yields news articles.                                                                      :Pass
        - All the news articles have both the keywords.                                                     :Pass
        - The news articles are in descending order starting with the most recent.                          :Pass
        - OR: Any one or both key words should be present in the news articles.                             :Pass
        - NOT: They key word should not be present in any of the articles.                                  :Pass
        - Different parenthesis searches have no impact on the search and yields desired results.           :Fail   

    Failed test cases:
        - Different parenthesis searches have no impact on the search and yields desired results.           :Fail

        Failing condition: 
            Failed to find "ex-cop" Key Word in the article: (Phone Or Human) And ex-cop