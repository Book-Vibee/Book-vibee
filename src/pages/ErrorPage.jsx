import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
            <div className="text-center p-4 sm:p-6 md:p-10 bg-white rounded-2xl shadow-2xl max-w-xs sm:max-w-md w-full">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4">Oops!</h1>
                <p className="text-base sm:text-lg text-gray-600 mb-6">Sorry, an unexpected error has occurred.</p>
                <p className="text-sm text-gray-500 italic mb-8">
                    <i>{error.statusText || error.message || "Unknown Error"}</i>
                </p>
                <Link
                    to="/"
                    className="text-white bg-gradient-to-r from-teal-400 to-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-6 py-2 mr-2 mb-2 inline-block"
                >
                    Go Back Home
                </Link>
                <div className="mt-6 text-sm text-gray-500">
                    <p>404 - Page Not Found</p>
                    <p>Sorry, the page you are looking for does not exist.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
