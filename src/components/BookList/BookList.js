import BookShow from '../BookShow/BookShow';
import useBooksContext from '../../hooks/use-books-context';

function BookList() {
  const { books } = useBooksContext();
  const renderedBooks = books.map(b => <BookShow key={b.id} book={b} />)

  return <div className="book-list">
    {renderedBooks}
  </div>
}

export default BookList