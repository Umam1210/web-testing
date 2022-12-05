import React from 'react';
import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ['Spirit of learning', 'Univ Indonesia', 'Sport'];
  return (
    <div className="relative mt-4 mb-3 w-full select-none">
      <div
        onClick={(e) => setIsActive(!isActive)}
        className="flex w-72 cursor-pointer items-center justify-between rounded-md border border-gray-300 bg-white px-5 py-2.5 font-medium">
        {selected ? <p>{selected}</p> : <p>Choose community</p>}
        {/* <ChevronDownIcon /> */}
      </div>
      {isActive && (
        <div className="absolute top-full z-10 w-72 cursor-pointer rounded-md bg-white py-2.5 font-medium shadow-lg ">
          {options.map((item) => (
            <div
              onClick={(e) => {
                setSelected(item);
                setIsActive(false);
              }}
              className="py-2.5 px-5 transition-all hover:bg-gray-100">
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
