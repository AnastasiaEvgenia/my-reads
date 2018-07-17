import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {

	render() {
		return (
			<div className="bookshelf">
            	<h2 className="bookshelf-title">{this.props.title}</h2>
            	<div className="bookshelf-books">
              		<ol className="books-grid">

						{/*map over the books prop of the BookShelf component,
						   to take for each book its title, authors, image and id*/}

						{this.props.books.map( (book) => (
							<Book book={book} key={book.id}/>
						))}

              		</ol>
            	</div>
        	</div>
		)
	}
}

export default BookShelf