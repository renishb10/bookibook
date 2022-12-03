import React, { useState } from 'react';
import BookCreate from './components/BookCreate/BookCreate';
import BookList from './components/BookList/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [...books, { id: Math.floor(Math.random() * 9999), title }];
    setBooks(updatedBooks)
  }

  const editBook = (id, newTitle) => {
    const editedBooks = books.map(b => {
      if (b.id === id) {
        return { ...b, title: newTitle };
      }
      return b;
    });
    setBooks(editedBooks);
  }

  const removeBook = (id) => {
    const updatedBooks = books.filter(b => b.id !== id);
    setBooks(updatedBooks);
  }

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookCreate onCreate={createBook} />
      <BookList books={books} onDelete={removeBook} onEdit={editBook} />
    </div>
  )
}

export default App