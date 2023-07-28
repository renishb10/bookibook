import React, { useState, useContext } from 'react';
import BookContext from '../../context/book';

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useContext(BookContext);

  const handleChange = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    editBook(book.id, title);
  }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label htmlFor="title">Title</label>
      <input name="title" type="text" value={title} className="input" onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  )
}

export default BookEdit