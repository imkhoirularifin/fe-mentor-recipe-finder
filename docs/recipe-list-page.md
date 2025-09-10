this docs explain features of the recipe list page

# Recipe list page

Features:

- infinite scroll in the recipe list
- search bar to filter recipes by title or ingredients
- filter recipes
  - max prep time
  - max cook time

Technical details:

- use nextjs route handler to fetch recipes from dummy data
- use react-query to manage server state
- use intersection observer to implement infinite scroll
- use url query to manage search and filter state
- use debounce to limit the number of requests when searching with timeout of 300ms
