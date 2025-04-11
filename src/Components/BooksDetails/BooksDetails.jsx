import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

export default function BooksDetails() {
  const { bookId } = useParams(); 
  const data = useLoaderData(); 
  const id = parseInt(bookId); 
  const book = data.find((book) => book.bookId === id); 

  if (!book) {
    return <h2 className="text-center text-red-500">Book not found</h2>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md mt-32">
      {/* Book Image */}
      <div className="w-full md:w-1/3">
        <img
          src={book.image} 
          alt={`${book.bookName} Cover`}
          className="w-full h-auto object-cover rounded-md shadow"
        />
      </div>

      {/* Book Information */}
      <div className="w-full md:w-2/3">
        <h1 className="text-2xl font-bold mb-2">{book.bookName}</h1>
        <p className="text-gray-600 mb-2">
          <span className="font-semibold">By:</span> {book.author}
        </p>
        <p className="text-gray-600 mb-4 italic">{book.category}</p>

        {/* Review */}
        <p className="text-gray-700 mb-4">
          <span className="font-semibold">Review:</span> {book.review}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mb-4">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Additional Details */}
        <ul className="mb-4 text-gray-600">
          <li>
            <span className="font-semibold">Number of Pages:</span> {book.pages}
          </li>
          <li>
            <span className="font-semibold">Publisher:</span> {book.publisher}
          </li>
          <li>
            <span className="font-semibold">Year of Publishing:</span> {book.year}
          </li>
          <li>
            <span className="font-semibold">Rating:</span> {book.rating}
          </li>
        </ul>

    {/* Buttons */}
<div className="flex gap-4">
  <a
    href={book.pdfLink}
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
  >
    Read
  </a>
  <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded shadow hover:bg-gray-300">
    Wishlist
  </button>
</div>

      </div>
    </div>
  );
}

