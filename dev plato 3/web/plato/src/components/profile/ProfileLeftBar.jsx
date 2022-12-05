import { QuestionMarkCircleIcon } from '@heroicons/react/20/solid';
import React from 'react';
import LinkedinIcon from './linkedin.svg';
const ProfileLeftBar = () => {
  return (
    <div className="w-full">
      <div className="w-full rounded-lg border py-4 px-6">
        <p className="flex justify-between text-base font-semibold text-gray-500">
          Add profile in another language
          <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
        </p>
        <div className="flex items-center py-4" aria-hidden="true">
          <div className="flex w-full border-t border-gray-300" />
        </div>
        <p className="flex justify-between text-base font-semibold text-gray-500">
          Add profile in another language
          <QuestionMarkCircleIcon className="h-6 w-6 text-gray-500" />
        </p>
      </div>

      {/*  */}
      <div className="mt-4 w-full flex-row items-center rounded-lg border p-6">
        <p className="flex text-center text-sm text-gray-500">
          Reski, unlock your full potential with Linkedin Premium
        </p>
        <div className="flex items-center justify-center">
          <div className="w-24 overflow-hidden rounded-full border-2 border-sky-500">
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1"
              alt="Google"
              width="200px"
            />
          </div>
          <a href="#" className="mx-2 max-w-[120px] py-4 transition duration-500">
            <img src={LinkedinIcon} alt="Google" width="200px" />
          </a>
        </div>
        <p className="mt-2 mb-4 flex text-center text-base text-gray-700">
          See who's viewed your profile in the last 90 days
        </p>
        <span className="rounded-full border border-blue-500 bg-transparent py-1 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
          Try for Free
        </span>
      </div>
    </div>
  );
};

export default ProfileLeftBar;
