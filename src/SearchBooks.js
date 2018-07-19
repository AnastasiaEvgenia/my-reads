import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {

	state = {
		query: ''
	}

	booksFromQuery = [];

	updateQuery = (query) => {
		if(query.length > 0){
			BooksAPI.search(query).then(matchingBooks => {
				if(matchingBooks && matchingBooks.length > 0) {
					this.booksFromQuery = matchingBooks
				}else {
					this.booksFromQuery = []
				}

				this.setState({query: query})
			})
		} else {
			this.booksFromQuery = []
			this.setState({query: ''})
		}	
	}

	render() {
		return (
			<div className="search-books">
            	<div className="search-books-bar">
              		<Link to='/' className="close-search">Close</Link>
              		<div className="search-books-input-wrapper">
		                <input 
                			type="text" 
                			placeholder="Search by title or author"
                			value={this.state.query}
                			onChange={(evt) => (this.updateQuery(evt.target.value))}
                		/>
	                </div>
            	</div>
            	<div className="search-books-results">
              		<ol className="books-grid">
              			{this.booksFromQuery.map(book => {
              				this.props.books.forEach(bookInShelves => {
              					if(book.id === bookInShelves.id) {
              						book.shelf=bookInShelves.shelf
              					}
              				})

              				if(!book.shelf){
              					book.shelf='none'
              				}

              				return(
              					<Book 
              						book={book}
              						key={book.id}
              						changeBookShelf={this.props.changeBookShelf}
              					/>
              				)
              			})}
              		</ol>
            	</div>
            </div>
		)
	}
}

export default  SearchBooks