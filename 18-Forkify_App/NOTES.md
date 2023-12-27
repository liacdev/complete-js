Project planning:

1. User stories
2. Features
3. Flowchart
4. Architecture
5. Development Step

* Steps 1-4 are planning
* Step 5 is developmment

1. User story - A description of the application's functionality from a user's perspective.  All the user stories put together will provide a clear picture of how the app will work.  App features are based on the user stories.

1.1 As a user, I want to search for recipes so I can find ideas for meals.
1.2 As a user, I want to be able to update the number of servings so I can cook a meal for different numbers of people.
1.3 As a user, I want to bookmark recipes so I can review them later.
1.4 As a user, I want to be able to create my own recipes so I can have them all organized in the same app.
1.5 As a user, I want to be able to see my bookmarks and own recipes when I leave the app and come back later so I can close the app safely after cooking.

2. Features - Implementing functionality based on user stories.

2.1 Search functionality. Input field to send reques to API with searched keywords.  Display results with pagination. Display the selected respie with relevant data: cooking time, servings, ingredients, etc.
2.2 Functionality to change servings and update all ingredients according to current number of servings.
2.3 Bookmark functionality to display a list of all bookmarked recipes.
2.4 Can upload my own recipes. User recipes will automatically be bookmarked. User can only see their own recipes, not recipes from other users.
2.5 Store bookmark data in the browser using local storage. On page reload, read saved bookmarks from local storage and display.

3. Flowchart:

3.1 Search functionality: API search request
3.2 Results with pagination
3.3 Display recipe
...other features may be added later

![Alt text](<Screenshot from 2023-12-27 07-44-06.png>)