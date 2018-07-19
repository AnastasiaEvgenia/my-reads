import React from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBooks extends React.Component {

	state = {
		query: ''
	}

	booksFromQuery = [];

	updateQuery = (query) => {
		BooksAPI.search(query).then(matchingBooks => {
			console.log(matchingBooks)
			if(matchingBooks.length > 0) {
				this.booksFromQuery = matchingBooks
			}else {
				this.booksFromQuery = []
			}			
			this.setState({query: query.trim()})
		})
		
	}

	render() {
		console.log(this.state.query)
		console.log(this.booksFromQuery)
		return (
			<div className="search-books">
            	<div className="search-books-bar">
              		<a className="close-search" onClick={this.props.showSearchPage}>Close</a>
              		<div className="search-books-input-wrapper">
		                {/*
		                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
		                  You can find these search terms here:
		                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

		                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
		                  you don't find a specific author or title. Every search is limited by search terms.
		                */}
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
              			{this.booksFromQuery.map(book => <Book book={book} key={book.id} />)}
              		</ol>
            	</div>
            </div>
		)
	}
}

export default  SearchBooks