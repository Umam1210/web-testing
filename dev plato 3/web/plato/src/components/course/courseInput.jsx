import React from 'react';

const courseInput = ({ label, placeholder }) => {
  return (
    <div>
      <label htmlFor="first_name" className="mb-2 mt-4 block text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type="text"
        id="first_name"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder={placeholder}
        required=""
      />
    </div>
  );
};

export default courseInput;
