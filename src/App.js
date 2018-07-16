import React from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    //add book empty state array.
    //books will be fetched from API
    books: []
  }

  //add lifecycle event component did mount. use getAll() api method
  //to fetch books. Use response to update component state with setState().
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">

              {/*Add BookShelf components, with two props. The shelf title and
                 the books they contain. Books are filtered from state books array
                 to check if book.shelf property matches the current self.*/}

              <div>
                <BookShelf 
                  books={this.state.books.filter( (book) => (book.shelf === 'currentlyReading') )} 
                  title="Currently Reading"
                />
                <BookShelf 
                  books={this.state.books.filter( (book) => (book.shelf === 'wantToRead') )} 
                  title="Want to Read"
                />
                <BookShelf 
                  books={this.state.books.filter( (book) => (book.shelf === 'read') )} 
                  title="Read"
                />

              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
