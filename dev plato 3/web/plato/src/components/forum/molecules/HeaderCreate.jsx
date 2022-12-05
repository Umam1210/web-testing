import React from 'react';

const HeaderCreate = () => {
  return (
    <div className="mb-3 flex w-full justify-between border-b border-solid border-gray-400 pb-4">
      <p className="font-semibold">Create post</p>
      <p className="font-semibold text-[#0079d3]">
        Drafts <span className="ml-1.5 rounded-sm bg-gray-400 p-0.5 font-medium text-white">0</span>{' '}
      </p>
    </div>
  );
};

export default HeaderCreate;
