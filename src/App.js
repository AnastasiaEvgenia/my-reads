import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //add lifecycle event component did mount. use getAll() api method
  //to fetch books. Use response to update component state with setState().
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  //method to change book shelfs with controler
  changeBookShelf = (chosenBook, shelfToGo) => {
    chosenBook.shelf=shelfToGo
    this.setState( (prevState) => {
      const chosenBookInState =  prevState.books.find((book) => (book.id === chosenBook.id))
      if(!chosenBookInState) {
        prevState.books.push(chosenBook)
      }
      return {books: prevState.books}
    })

    BooksAPI.update(chosenBook, shelfToGo)
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks 
            changeBookShelf={this.changeBookShelf}
            books={this.state.books}
          />
        )}/>

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
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
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>

      </div>
    )
  }

}

export default BooksApp
