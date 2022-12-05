import React from 'react';
import { Link } from 'react-router-dom';

const GradientButton = ({ title, to }) => {
  return (
    <Link to={to}>
      <button
        type="button"
        className="mt-4 mr-2 mb-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300">
        {title}
      </button>
    </Link>
  );
};

export default GradientButton;
