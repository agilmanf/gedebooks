import axios from "axios";
import React from "react";
import BookCard from "./BookCard";

function DataSection({ books, setBooks }) {
  async function deleteBook(id) {
    try {
      const res = await axios.delete(
        `https://my-json-server.typicode.com/agilmanf/gedebooks/books/${id}`
      );

      alert("Delete Book Successful");
    } catch (error) {
      console.log(error);
    } finally {
      const newBooks = books.filter((book) => book.id !== id);
      setBooks(newBooks);
    }
  }

  async function editBook(id, newData) {
    try {
      const res = await axios.put(
        `https://my-json-server.typicode.com/agilmanf/gedebooks/books/${id}`,
        newData
      );

      alert("Edit Data Success");
    } catch (error) {
      console.log(error);
    } finally {
      const newBooks = books.map((book) => (book.id === id ? newData : book));
      setBooks(newBooks);
    }
  }

  return (
    <div className="data-section">
      <h1>Book List</h1>
      <div className="book-container">
        {books.length === 0 ? (
          <h5>Empty...</h5>
        ) : (
          books.map((book) => (
            <BookCard
              data={book}
              key={book.id}
              deleteBook={deleteBook}
              editBook={editBook}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default DataSection;
