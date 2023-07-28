import { useContext } from 'react';
import BookContext from '../../context/book';
import BookShow from '../BookShow/BookShow';

function BookList() {
  const { books } = useContext(BookContext)
  const renderedBooks = books.map(b => <BookShow key={b.id} book={b} />)

  return <div className="book-list">
    {renderedBooks}
  </div>
}

export default BookList