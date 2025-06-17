
import React from 'react';
import { Link } from "react-router";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">404</h1>
        <p className="text-2xl md:text-3xl font-semibold text-gray-300 mt-4">
          Oops! Page not found.
        </p>
        <p className="text-gray-400 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-full hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
    );
};

export default NotFoundPage;