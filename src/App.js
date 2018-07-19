import React from 'react'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
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

  //created this method so property on state updates correctly
  //previously going back to main from search page didn't work
  showSearchPage = () => {
    this.setState({showSearchPage: false})
  }

  //method to change book shelfs with controler
  changeBookShelf = (chosenBook, shelfToGo) => {
    this.setState( (prevState) => {
      const chosenBookInState =  prevState.books.find((book) => (book.id === chosenBook.id))
      chosenBookInState.shelf = shelfToGo
      return {books: prevState.books}
    })

    BooksAPI.update(chosenBook, shelfToGo)
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks showSearchPage={this.showSearchPage}/>
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
                  changeBookShelf={this.changeBookShelf}
                />
                <BookShelf 
                  books={this.state.books.filter( (book) => (book.shelf === 'wantToRead') )} 
                  title="Want to Read"
                  changeBookShelf={this.changeBookShelf}
                />
                <BookShelf 
                  books={this.state.books.filter( (book) => (book.shelf === 'read') )} 
                  title="Read"
                  changeBookShelf={this.changeBookShelf}
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
