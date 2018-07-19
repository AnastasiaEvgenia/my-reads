# MyReads App

## Introduction.

This is a project for the Udacity Front-End Web Developer
Nanodegree program. The objective of the project is to create
a bookshelf app using React. The app allows you to search books
and categorize them in shelves depending on whether you have read
the book, whether you are currently reading it or whether you want
to read it in the future.

## App Description.

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you should instantly see all of the selections you made on the search page in your library.

## Running the App

1. Clone the GitHub repository localy and go to root project folder.

2. Install all project dependencies with `npm install`.

3. Start the development server with `npm start`.

4. Open `http://localhost:3000/` in your browser.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies

The starter code for this project is based on the Udacity repository
(https://github.com/udacity/reactnd-project-myreads-starter)