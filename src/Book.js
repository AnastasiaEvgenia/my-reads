import React from 'react'

class Book extends React.Component {

	render() {
		const book = this.props.book
		return (
			<li key={book.id}>
  				<div className="book">
    				<div className="book-top">
      					<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks && `url(${book.imageLinks.thumbnail})` }}></div>
  						<div className="book-shelf-changer">
    						<select
    							value={book.shelf} 
    							onChange={(evt) => {
    							this.props.changeBookShelf(book, evt.target.value)
    						}}>
      							<option value="move" disabled>Move to...</option>
                  	<option value="currentlyReading">Currently Reading</option>
                  	<option value="wantToRead">Want to Read</option>
                  	<option value="read">Read</option>
                  	<option value="none">None</option>
	             </select>
  						</div>
    				</div>
    				<div className="book-title">{book.title}</div>
    				<div className="book-authors">{book.authors && book.authors.join(' & ')}</div>
  				</div>
			</li>
		)
	}
}

export default Book