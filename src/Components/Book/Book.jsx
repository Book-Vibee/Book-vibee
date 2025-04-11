import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Book({ book }) {
  const { bookId, bookName, author, image, category, tags, rating } = book;

  // Generate the stars based on the rating (maximum 5 stars)
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-yellow-500"
          >
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.335 24 12 20.197 4.665 24 6 15.272 0 9.423l8.332-1.268L12 .587z"></path>
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-gray-300"
          >
            <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849L19.335 24 12 20.197 4.665 24 6 15.272 0 9.423l8.332-1.268L12 .587z"></path>
          </svg>
        );
      }
    }
    return stars;
  };

  return (
    <div className="rounded-2xl shadow-md w-72 bg-white mb-4">
      <Link to={`/books/${bookId}`}> 
        <div className="py-8 px-6 bg-slate-200 mx-4 rounded-md">
          <img
            src={image}
            alt="Book Cover"
            className="w-full h-44 object-contain rounded-2xl"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-center gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="text-xs font-semibold text-white bg-blue-600 rounded-full px-4 py-2 hover:bg-blue-700 transition"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Centered Text */}
          <h3 className="text-base font-bold mb-1 text-center text-gray-900"> {bookName} </h3>
          <p className="text-sm text-gray-600 mb-2 text-center">By: {author} </p>
          <p className="text-sm text-gray-500 mb-3 text-center"> {category} </p>

          {/* Divider */}
          <div className="border-b border-gray-300 my-3"></div>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Display Stars Based on Rating */}
              {generateStars(rating)}
              {/* Display Rating Number Next to Stars */}
              <span className="ml-2 text-gray-800 text-lg font-bold">{rating}</span>
            </div>
            {/* You can add the wishlist button here if needed */}
          </div>
        </div>
      </Link> 
    </div>
  );
}
