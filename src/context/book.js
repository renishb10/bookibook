import axios from 'axios';
import { createContext, useState } from 'react';
import { config } from '../config';

const BookContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const booksFromDB = await axios.get(`${config.BASE_URL}/books`);
    setBooks(booksFromDB.data);
  }

  const createBook = async (title) => {
    const newBook = await axios.post(`${config.BASE_URL}/books`, { title })
    setBooks([...books, newBook.data])
  }

  const editBook = async (id, newTitle) => {
    const res = await axios.put(`${config.BASE_URL}/books/${id}`, { title: newTitle })
    const updatedBooks = books.map(b => {
      if (b.id === id) {
        return { ...books, ...res.data };
      }
      return b;
    });
    setBooks(updatedBooks)
  }

  const removeBook = (id) => {
    console.log("Removing ", id)
    const updatedBooks = books.filter(b => b.id !== id);
    setBooks(updatedBooks);
  }

  return (
    <BookContext.Provider value={{ books, fetchBooks, createBook, removeBook, editBook }}>
      {children}
    </BookContext.Provider>
  )
}

export { Provider };
export default BookContext;