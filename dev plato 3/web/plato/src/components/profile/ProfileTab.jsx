import {
  EyeIcon,
  UsersIcon,
  RssIcon,
  ArrowRightIcon,
  PencilIcon,
  PlusIcon,
  AcademicCapIcon,
  ComputerDesktopIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  CheckIcon
} from '@heroicons/react/20/solid';
import React from 'react';
const ProfileTab = () => {
  return (
    <>
      <div className="flex-col overflow-hidden rounded-lg border">
        <img
          className="w-full bg-slate-600 "
          src="https://storage.pixteller.com/designs/designs-images/2019-03-27/05/thumbs/simple-background-backgrounds-passion-simple-1-5c9b95bd34713.png"
          alt="Sunset in the mountains"
          height="100px"
        />
        <div className="z-40 -mt-20 ml-6 w-32 overflow-hidden rounded-full border-4 border-sky-500">
          <img
            src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1"
            alt="Google"
            width="200px"
          />
        </div>

        <div className="px-6 py-4">
          <div className="text-md font-bold">Reski Abbas</div>
          <p className="text-gray-900">Web Developer</p>
          <p className="mt-2 text-sm text-gray-500">
            Makassar, South Sulawesi, Indonesia ·{' '}
            <span className="font-bold text-blue-700">Contact info</span>
          </p>
        </div>
        <div className="mx-6 mt-2">
          <span className="mb-2 mr-2 rounded-full bg-blue-600 py-1 px-4 font-semibold text-white hover:bg-blue-700">
            Open To
          </span>
          <span className="mb-2 mr-2 rounded-full border border-blue-500 bg-transparent py-1 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
            Add Profile Section
          </span>
          <span className="mb-2 mr-2 rounded-full border border-gray-500 bg-transparent py-1 px-4 font-semibold text-gray-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
            More
          </span>
        </div>

        {/*  */}

        <div className="m-6 flex">
          <a
            href="#"
            className="block max-w-sm rounded-lg border border-gray-200 bg-neutral-200 p-4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </a>
          <a
            href="#"
            className="ml-6 block max-w-sm rounded-lg border border-gray-200 bg-white p-4 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <p className="font-normal text-gray-700">
              Here are the biggest enterprise technology acquisitions of 2021
            </p>
          </a>
        </div>
      </div>

      {/* Suggested */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="text-md font-bold">Suggested for you</div>
          <div className="mt-1 flex items-center">
            <EyeIcon className="mr-1 h-4 w-4 text-gray-500" />
            <p className="text-sm text-gray-500">Private to you</p>
          </div>
          <div className=" mt-4 font-semibold">Intermediate</div>
          <div className=" mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
            <div className="h-2 w-[45%] rounded-full bg-blue-600"></div>
          </div>
          <p className="font-base mt-2 text-sm text-gray-700">
            Complete 3 steps to achieve{' '}
            <span className="font-semibold text-blue-600">All-Star</span>
          </p>
        </div>

        {/*  */}

        <div className="flex">
          <div className=" mx-6 my-6 flex">
            <div className="max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center">
                <svg
                  className="mb-2 mr-2 h-10 w-10 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <a href="#">
                  <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    Which industry do you work in?
                  </p>
                </a>
              </div>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Members who add an industry receive up to 2.5 times as many profile views.
              </p>
              <span className="my-6 mr-2 rounded-full border border-gray-500 bg-transparent py-1 px-4 font-semibold text-gray-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Add Industry
              </span>
            </div>
          </div>

          <div className=" my-6 mr-6 flex">
            <div className="max-w-lg rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div className="flex items-center">
                <svg
                  className="mb-2 mr-2 h-10 w-10 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                    clipRule="evenodd"></path>
                  <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
                </svg>
                <a href="#">
                  <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                    Which industry do you work in?
                  </p>
                </a>
              </div>

              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Members who add an industry receive up to 2.5 times as many profile views.
              </p>
              <span className="my-6 mr-2 rounded-full border border-gray-500 bg-transparent py-1 px-4 font-semibold text-gray-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Add Industry
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Analitycs */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="text-md font-bold">Analytics</div>
          <div className="mt-1 flex items-center">
            <EyeIcon className="mr-1 h-4 w-4 text-gray-500" />
            <p className="text-sm text-gray-500">Private to you</p>
          </div>

          <div className="mt-3 flex">
            <UsersIcon className="mr-3 h-8 w-8 text-gray-500" />
            <div>
              <div className="font-semibold">2 Profile Views</div>
              <p className="font-base mt-1 text-sm text-gray-700">
                Discover who's viewed your profile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resource */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="text-md font-bold">Resources</div>
          <div className="mt-1 flex items-center">
            <EyeIcon className="mr-1 h-4 w-4 text-gray-500" />
            <p className="text-sm text-gray-500">Private to you</p>
          </div>

          <div className="mt-3 flex">
            <RssIcon className="mr-3 h-8 w-8 text-gray-500" />
            <div>
              <div className="font-semibold">
                Creator mode <span className="h-4 w-4 rounded bg-gray-300 px-2">Off</span>
              </div>
              <p className="font-base mt-1 text-sm text-gray-700">
                Discover who's viewed your profile
              </p>
            </div>
          </div>
          <div className="flex items-center py-4" aria-hidden="true">
            <div className="flex w-full border-t border-gray-300" />
          </div>
          <div className="flex">
            <UsersIcon className="mr-3 h-8 w-8 text-gray-500" />
            <div>
              <div className="font-semibold">My Network</div>
              <p className="font-base mt-1 text-sm text-gray-700">
                See and mange your connection and interests.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center py-2" aria-hidden="true">
            <div className="flex w-full border-t border-gray-300" />
          </div>
          <div className=" mt-1 flex items-center justify-center font-semibold  text-gray-500">
            Show all activity
            <ArrowRightIcon className="ml-1 h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Activity */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-md font-bold">
              Resources <p className="mt-1 text-sm font-bold text-blue-600">7 Followers</p>
            </div>
            <span className="mb-2 mr-2 rounded-full border border-blue-500 bg-transparent py-1 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
              Start a post
            </span>
          </div>

          <div className="mt-3 flex">
            <div>
              <div className="font-semibold">You haven't posted lately</div>
              <p className="font-base mt-1 text-sm text-gray-700">
                Recent posts you share or comment on will be displayed here
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        <div>
          <div className="flex items-center py-2" aria-hidden="true">
            <div className="flex w-full border-t border-gray-300" />
          </div>
          <div className=" mt-1 flex items-center justify-center font-semibold  text-gray-500">
            Show all activity
            <ArrowRightIcon className="ml-1 h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-md font-bold">Experience</div>
            <div className="flex items-center">
              <PlusIcon className="h-8 w-8 text-gray-500" />
              <PencilIcon className="ml-4 h-6 w-6 text-gray-500" />
            </div>
          </div>

          <div className="mt-3 flex">
            <AcademicCapIcon className="mr-3 h-8 w-8 text-gray-500" />
            <div>
              <div className="font-semibold">Web Developer</div>
              <p className="font-base mt-1 text-sm text-gray-700">Freelance</p>
              <p className="font-base mt-4 text-sm text-gray-700">
                <span className="font-semibold">Skills: </span> Freelancing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skils */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-md font-bold">Skils</div>
            <div className="flex items-center">
              <span className="mr-6 rounded-full border border-blue-500 bg-transparent py-1 px-4 font-semibold text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                Demonstrate Skils
              </span>
              <PlusIcon className="h-8 w-8 text-gray-500" />
              <PencilIcon className="ml-4 h-6 w-6 text-gray-500" />
            </div>
          </div>

          <div className="mt-3 flex">
            <ComputerDesktopIcon className="mr-3 h-8 w-8 text-gray-500" />
            <div>
              <p className="font-base mt-1 text-sm text-gray-700">Web Developer (Freelance)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Interest */}
      <div className="border-grey-500 mt-4 flex-col overflow-hidden rounded-lg border py-4">
        <div className="px-6 py-3">
          <div className="text-md font-bold">Interest</div>
          <p className="mt-4 text-sm font-bold text-green-600">Companies</p>
          <div className="mt-4 w-20 border border-green-600" />

          <div className="flex items-center pb-4" aria-hidden="true">
            <div className="flex w-full border-t border-gray-300" />
          </div>
          <div className="flex">
            <div className="m-2 flex">
              <BuildingOffice2Icon className="mr-3 h-8 w-8 text-gray-500" />
              <div>
                <div className="font-semibold">PT. Multi Utama Karya Elektrikal</div>
                <p className="font-base mt-1 mb-4 text-sm text-gray-700">310 Followers</p>
                <div className="flex w-36 items-center rounded-full border border-gray-500 bg-transparent py-1 px-3 font-semibold text-gray-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  <CheckIcon className="mr-1 h-6 w-6 text-gray-500" />
                  Following
                </div>
              </div>
            </div>
            <div className="m-2 ml-6 flex">
              <BuildingStorefrontIcon className="mr-3 h-8 w-8 text-gray-500" />
              <div>
                <div className="font-semibold">PT. Kaldu Sari Nabati Indonesia</div>
                <p className="font-base mt-1 mb-4 text-sm text-gray-700">67,516 Followers</p>
                <div className="flex w-36 items-center rounded-full border border-gray-500 bg-transparent py-1 px-3 font-semibold text-gray-700 hover:border-transparent hover:bg-blue-500 hover:text-white">
                  <CheckIcon className="mr-1 h-6 w-6 text-gray-500" />
                  Following
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center py-2" aria-hidden="true">
            <div className="flex w-full border-t border-gray-300" />
          </div>
          <div className=" mt-1 flex items-center justify-center font-semibold  text-gray-500">
            Show all 7 Companies
            <ArrowRightIcon className="ml-1 h-6 w-6 text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTab;
