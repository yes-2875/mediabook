<img width="648" height="192" alt="MediabookLogo_readme" src="https://github.com/user-attachments/assets/d7736600-2c53-406a-9e37-e13e3db9077a" />

# CPAN144 Group Project
## Website Link: https://mediabook-six.vercel.app/

This website is a demonstration of a front-end project that allows users to search movies and view details about them. The application integrates with an external API to fetch real-time movie data. Core React and Next.js concepts such as components, state management, routing and API integration will be demonstrated while creating a user-friendly interface for browsing movie content.

## Roles and Responsibilities

**Project Manager/Supervisor** (manages the GitHub/Vercel repository and hosting, additionally helping in a little bit of every role for equal participation):
- Mirza Baig
- Farhad Asgari Hasan Vand

**Front-end Development** (React/Next.js/CSS styling, components and state):
- Zlata Skotnyk
- Mikhail Azaranka

**Back-end Development** (API requests/data handling):
- Ethan Pothier
- Randy Rampersaud

**Tester/Bugfixing**:
- Andrew Doyle
- Meryem Kadam

## CONTRIBUTOR GUIDE
If editing code, **DO NOT** fork the repository, use the shared `dev/1` branch in this repository and push commits through the **Source Control tab in Visual Studio Code**. Before working on the `dev/1` branch, make sure it is up to date with `main` by using the Source Control tab in VSCode or git terminal to pull from `main` and push those commits. Afterwards **create pull requests** (and issues to solve with the PRs if there are none) from `dev/1` and the project maintainers will review before merging into `main`.


## Components & State Management
- **Footer**
    - Displays copyright information and disclaimer about all movie data displayed on the website
- **Home Content**
    - Contains a place for searching
    - Uses state management to manage search results, loading, and errors.
    - Displays a list of all trending movies for the current week, if no search query is provided.
- **Large Movie Card**
    - Displays movie information in greater detail
    - Shows poster art, year, ratings, runtime, genres, plot summary.
    - Additionally shows an embedded YouTube trailer frame, along with a favourites button.
- **Small Movie Card**
    - Displays movie information in smaller detail
    - Shows poster art, year, IMDb ratings, and a View Details button to see it in greater detail (as a Next.js Link).
    - Displays an additional button to add/remove from user favourites.
- **Movie List**
    - Displays a grid of movies in Small Movie Cards, demonstrating compound components
- **Navbar**
    - Contains the links for routing

## Pages
- **Home Page** `pages/index.js`
    - Main page for the user to search movies and view trending movie information.
- **Favourites** `/pages/favorite.js`
    - Displays a MovieList of the user's favourites collection of movies
    - Uses context and state along with HTML localStorage API to set and remember favourites.
- **Movie** `/pages/movie/[id.js]`
    - Cannot be accessed from the navbar, but rather by clicking the "View Details" buttons in the small movie cards.
    - Dynamically routed using movie id as a parameter in the URL.
    - Shows movie information in Large Movie Card component and requests more details through TMDB API.
 
## Routing
From the Navbar, the user can click on 'favourites' to go the Favourites page, and 'Home' to go to the home page.
When clicking the View Details button on any Small Movie Card, it will send the user to the movie's page.
