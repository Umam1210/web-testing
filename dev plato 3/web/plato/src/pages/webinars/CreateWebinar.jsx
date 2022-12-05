import React from 'react'

export default function CreateWebinar() {
  return (
    <div className="col-span-12">
      <div className="md:grid md:grid-cols-12 md:gap-6">
        <div className="md:col-span-3">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">General</h3>
            <p className="mt-2 text-sm text-gray-600">
              This is the most important part of
              this webinar. Make sure you don't leave typos and grammar mistakes!
            </p>
          </div>
        </div>
        <div className="mt-5 md:col-span-9 md:mt-0">
          <form action="#" method="POST">
            <div className="border shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="speaker"
                      className="block text-sm font-medium text-gray-700">
                      Speaker
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="speaker"
                        id="speaker"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Elon Musk"
                      />
                    </div>
                  </div>
                </div>


                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    About
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Photo Profile</label>
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true">
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="col-span-5 sm:col-span-2">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700">
                      Title Webinar
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Socket IO"
                      />
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className='grid grid-cols-6 gap-4'>
                  <div className="col-span-2 sm:col-span-2 ">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Online/Offline
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option value={'online'}>Online</option>
                      <option>Offline</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-2 ">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Level
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Beginner</option>
                      <option>Intermediate</option>
                      <option>Advanced</option>
                    </select>
                  </div>
                  <div className="col-span-2 sm:col-span-2 ">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                      Languange
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option>Indonesia</option>
                      <option>English</option>
                      <option>Jepang</option>
                    </select>
                  </div>
                </div>

                <div className='grid grid-cols-4 gap-4'>
                  <div className='col-span-2'>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700">
                      Date
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="date"
                        name="date"
                        id="date"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Elon Musk"
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700">
                      Time Start
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="time"
                        name="date"
                        id="date"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Elon Musk"
                      />
                    </div>
                  </div>
                  <div className=''>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700">
                      Time End
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="time"
                        name="date"
                        id="date"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Elon Musk"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                    Description Webinar
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-2 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="you@example.com"
                      defaultValue={''}
                    />
                  </div>
                  {/* <p className="mt-2 text-sm text-gray-500">
                    Brief description for your profile. URLs are hyperlinked.
                  </p> */}
                </div>

                {/*  */}

                <div className='grid grid-cols-2 gap-4'>
                  <div className="col-span-1 sm:col-span-1">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700">
                      Price
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="input number only"
                      />
                    </div>
                  </div>
                  <div className="col-span-1 sm:col-span-1">
                    <label
                      htmlFor="company-website"
                      className="block text-sm font-medium text-gray-700">
                      *Optional Discount
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="number"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded-md border border-gray-300 py-2 px-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="input number only"
                      />
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-1'>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Photo Webinar</label>
                    <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true">
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
