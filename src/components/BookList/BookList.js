import React from 'react';
import BookShow from '../BookShow/BookShow'

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map(b => <BookShow key={b.id} book={b} onDelete={onDelete} onEdit={onEdit} />)

  return <div className="book-list">{renderedBooks}</div>
}

export default BookList