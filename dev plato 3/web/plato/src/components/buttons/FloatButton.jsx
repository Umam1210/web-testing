import React from 'react';
import { Link } from 'react-router-dom';

const FloatButton = ({ to }) => {
  return (
    <Link to={to}>
      <div className="flex justify-center space-x-2">
        <div>
          <button
            type="button"
            className="inline-block h-9 w-9 rounded-full bg-blue-600 uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="mx-auto w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FloatButton;
