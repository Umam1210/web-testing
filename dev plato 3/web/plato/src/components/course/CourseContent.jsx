import React from 'react';
import { useState } from 'react';
import { useCurrentSession } from '../../store/currentSession';

const CourseContent = ({session, title, type, files}) => {
  const [check, setCheck] = useState(false);
  const chooseCurrent = useCurrentSession(state => state.setCurrentSession)

  const handleChoose = () => {
    setCheck(true);
    chooseCurrent({
      title: session,
      subtitle: title,
      type: type,
      files: files
    })
  }

  return (
    <div className="relative flex items-start cursor-pointer" onClick={handleChoose}>
      <div className="flex h-5 items-center">
        <input
          aria-describedby="comments-description"
          name="comments"
          type="checkbox"
          // disabled={true}
          checked={check}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          onClick={handleChoose}
        />
      </div>
      <div className="ml-3 text-sm">
        <label className="font-medium text-gray-700 cursor-pointer">
          {title}
        </label>
        <p id="comments-description" className="text-gray-500">
          {type}
        </p>
      </div>
    </div>
  );
};

export default CourseContent;
