import React, { useContext, useState } from 'react';
import BookEdit from '../BookEdit/BookEdit';
import BookContext from '../../context/book';

function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const { removeBook } = useContext(BookContext)

  const handleDeleteClick = () => {
    removeBook(book.id);
  }

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  }

  const handleSubmit = () => {
    setShowEdit(false);
  }

  let content = <h3>{book.title}</h3>
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />
  }

  return (
    <div className='book-show'>
      <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt={`${book.title}`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default BookShow