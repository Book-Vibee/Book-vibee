import React, { useEffect } from 'react';
import { useState } from 'react';
import Book from '../Book/Book';

export default function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('./booksData.json')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-12">
      <h2 className="text-4xl font-bold text-center mb-6 mt-32">Books</h2>
      <div className="grid gap-6 px-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
}

