import React, { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate/BookCreate';
import BookList from './components/BookList/BookList';
import BookContext from './context/book';

function App() {

  const { fetchBooks } = useContext(BookContext)

  useEffect(() => {
    fetchBooks()
  }, [fetchBooks])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookCreate />
      <BookList />
    </div>
  )
}

export default App