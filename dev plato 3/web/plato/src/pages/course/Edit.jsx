import React from 'react';
import CourseInput from '../../components/course/courseInput';

const Edit = () => {
  return (
    <div className="col-span-12">
      <p className="mb-4 text-xl font-bold">Edit Course</p>
      <form>
        <CourseInput label="Course Title" />
        <button
          type="button"
          className="mt-4 mr-2 mb-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300">
          Simpan
        </button>
      </form>
    </div>
  );
};

export default Edit;
