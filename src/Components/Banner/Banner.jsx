import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Booksimage from "../../assets/books.jpg";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative px-4 sm:px-6 md:px-12 lg:px-16 mt-28">
      <header className="bg-white dark:bg-gray-900">
        {/* Updated Banner */}
        <div className="container px-6 py-16 mx-auto flex items-center justify-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Welcome to <br /> our{" "}
                <span className="text-blue-500">Book Vibe</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Book Vibe is a platform designed for book lovers to explore new
                books, track their reading progress, and connect with a
                community of fellow readers. It helps users discover books from
                various genres, share reviews, and stay organized in their
                reading journey. Whether you're looking for your next great read
                or want to keep a record of your reading habits, Book Vibe makes
                it easy and enjoyable!
              </p>

    <NavLink to="/books">
    <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider
  text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg 
  lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
  View the list
</button>
    </NavLink>

            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-lg h-96 object-cover lg:max-w-xl"
              src={Booksimage}
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </header>
    </div>
  );
}
