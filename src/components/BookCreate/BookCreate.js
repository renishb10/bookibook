import React, { useContext, useState } from 'react'
import BookContext from '../../context/book';

function BookCreate() {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BookContext)

  const handleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  }

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input className="input" type="text" value={title} onChange={handleChange} />
        <button className="button" type='submit'>Create</button>
      </form>
    </div>
  )
}

export default BookCreate