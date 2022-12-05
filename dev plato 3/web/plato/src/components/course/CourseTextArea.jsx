import React from 'react';

const CourseTextArea = ({ title, placeholder }) => {
  return (
    <>
      <label
        htmlFor="message"
        className="mb-2 mt-4 block text-sm font-medium text-gray-900 dark:text-gray-400">
        {title}
      </label>
      <textarea
        id="message"
        rows="4"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder={placeholder}></textarea>
    </>
  );
};

export default CourseTextArea;
