import { Disclosure } from '@headlessui/react';
import { ArrowTrendingUpIcon, ChevronUpIcon, DocumentTextIcon, EllipsisHorizontalIcon, GiftIcon, GlobeAltIcon, HandRaisedIcon, HandThumbDownIcon, HandThumbUpIcon, LanguageIcon, NewspaperIcon, PaperClipIcon, StarIcon, TrophyIcon, UserIcon } from '@heroicons/react/24/outline';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { newsList } from '../news/NewsRightBarMainPage'

export default function DetailList() {
    let navigate = useNavigate()
    return (
        <>
            <div className='flex flex-col rounded-lg px-4 '>
                <span className='text-3xl mb-6 font-bold'>{newsList[1]?.title}</span>
                {/* <span>Speaker <span className='ml-2 mr-1'>:</span> {newsList[0].author}</span> */}
                {/* <span>Date <span className='ml-[35px] mr-1'>:</span> {dayjs(newsList[1].publishedAt).format('DD MMMM YYYY')} | 12:00 WIB - 14:00 WIB</span> */}
                <p className='text-xl font-semibold'>Speaker</p>
                    <div className="flex w-full items-end  mt-2">
                        <a href="#" className="group mt-4 block flex-1">
                            <div className="flex items-center">
                                <div>
                                    <span className="relative inline-block">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" />
                                    </span>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                                        Tom Cook
                                    </p>
                                    <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                                        View profile
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div className="flex flex-col items-end justify-end">
                            <span className="isolate inline-flex rounded-md shadow-sm">
                                <button
                                    type="button"
                                    className="relative inline-flex items-center rounded-l-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                    <HandThumbUpIcon className="mr-2 h-6 w-6 text-blue-500" />
                                    512
                                </button>
                                <button
                                    type="button"
                                    className="relative -ml-px inline-flex items-center rounded-r-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                    <HandThumbDownIcon className="mr-2 h-6 w-6 text-gray-400" />
                                    10
                                </button>

                                <button
                                    type="button"
                                    className="relative ml-2 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                    <HandRaisedIcon className="mr-2 h-6 w-6 text-gray-400" />
                                    Ask
                                </button>
                                <button
                                    type="button"
                                    className="relative ml-2 inline-flex items-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                    <EllipsisHorizontalIcon className="h-6 w-6 text-gray-400" />
                                </button>
                            </span>
                        </div>
                    </div>               
                <div className="mt-3 flex w-full items-center text-sm font-medium">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                        Recommended
                    </span>
                    <StarIcon className="ml-4 mr-2 h-6 w-6 text-yellow-300" />
                    <span className="mr-8">4.8 / 5</span>
                    <span>250 students</span>
                </div>
                <div className='flex mt-2 mb-6'>
                    <div className='flex'>
                        <GlobeAltIcon className='h-6 mr-2' />
                        <span>Online</span>
                    </div>
                    <div className='flex mx-5'>
                        <ArrowTrendingUpIcon className='h-6 mr-2' />
                        <span>Level : Beginner {''}</span>
                    </div>
                    <div className='flex'>
                        <LanguageIcon className='h-6 mr-2' />
                        <span>Bahasa Indonesia {''}</span>
                    </div>
                </div>
                    <div className='rounded-lg  my-6'>
                        <span className=' text-xl font-semibold'>Benefits of Joining Webinars</span>
                        <div className='grid grid-cols-2 gap-2 my-4 mx-4'>
                            <div className='flex flex-row'>
                                <div className='mr-3'>
                                    <GiftIcon className='h-8 mr-2 mt-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <span>A total Go-PAY balance of 50K for 2 questioners</span>
                                    <span>Asking during the webinar will get 50k gopay.</span>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='mr-3'>
                                    <TrophyIcon className='h-8 mr-2 mt-2' />
                                </div>
                                <div className='flex flex-col'>
                                    <span>Certified {''}</span>
                                    <span className='italic '>This webinar has a certificate of attendance .</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    {/* <div className='border rounded-lg  py-4 my-3 shadow'>
                        <span className='ml-4 text-xl font-semibold'>Speaker</span>
                        <div className='ml-12 mb-4 flex flex-row mt-4 '>
                            <img src={newsList[1].imageUrl} alt={newsList[1].imageUrl} className='rounded-full h-12 w-12' />
                            <div className='ml-4 mt-4'>
                                <span className='text-xl font-semibold'>{newsList[1].author}</span>
                                <p>CTO Plato {''}</p>
                            </div>
                        </div>
                        <span className='ml-28'>What did they say?</span>
                        <div className='ml-12 flex flex-row my-1 '>
                            <div>
                                <div className='rounded-full border-2 border-black'>
                                    <UserIcon className='h-11 w-11 p-1' />
                                </div>
                            </div>
                            <div className='ml-4 mt-4'>
                                <span>{newsList[1]?.author.substring(0, 2,)}**** ****</span>
                                <p>{dayjs(newsList[1].publishedAt).format('DD MMMM YYYY')}</p>
                                <p>"{newsList[1]?.title}"</p>
                                <p className='italic'>" sharing experience"</p>
                            </div>

                        </div>
                    </div> */}
                    {/* <div className='border rounded-lg  py-4 my-3 shadow'>
                        <div className="w-full ">
                            <div className=" bg-white ">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between mx-4">
                                                <span className='text-xl font-semibold'>Webinar Summary</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 mr-8`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 ">
                                                <div className=""></div>
                                                <div className='pt-4 border-t border-gray-200'>
                                                    {newsList[1]?.content}
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                            </div>
                        </div>
                    </div> */}
                    <div className='my-6'>
                        <p className='text-xl font-semibold mb-4'>Description</p>
                        <span className=''>{newsList[1]?.description}</span>
                    </div>
                    <div className='border rounded-lg  py-4 my-6 shadow'>
                        <div className="w-full  ">
                            <div className=" bg-white ">
                                <Disclosure>
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full justify-between mx-4">
                                                <span className='text-xl font-semibold'>How To Join Webinar</span>
                                                <ChevronUpIcon
                                                    className={`${open ? 'rotate-180 transform' : ''
                                                        } h-5 w-5 mr-8`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                <div className="border-t border-gray-200">
                                                    <dl>
                                                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">1</dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-11 sm:mt-0">You can register for this webinar by clicking the "Register Now" button and complete the payment according to the nominal stated.
                                                                Make sure you are registered as a user and logged in.</dd>
                                                        </div>
                                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">2</dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-11 sm:mt-0">After making a payment, you can check it from the webinar history page.</dd>
                                                        </div>
                                                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">3</dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-11 sm:mt-0">15 minutes before the event takes place, you can join.</dd>
                                                        </div>
                                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">4</dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-11 sm:mt-0 flex flex-col">
                                                                <span>
                                                                    Join webinars:
                                                                </span>
                                                                <div className='ml-4 mt-2'>
                                                                    <p> 1. Open the registered webinar page.</p>
                                                                    <p> 2. Make sure you are logged in.</p>
                                                                    <p> 3. Then click the "Start Now" button.</p>
                                                                </div>
                                                            </dd>
                                                        </div>
                                                        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">5</dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-11 sm:mt-0">
                                                                Don't forget after the webinar session ends to fill out a webinar review by clicking the "Give a Review" button.
                                                            </dd>
                                                        </div>
                                                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-12 sm:gap-4 sm:px-6">
                                                            <dt className="text-sm font-medium text-gray-500">6</dt>
                                                            <dd className="mt-1 text-sm text-gray-900 sm:col-span-11 sm:mt-0">
                                                                You can get a webinar that has a certificate of attendance 1x24 hours after filling out the webinar review.
                                                                Note: The download link will be sent via email or webinar history page or this page.
                                                            </dd>
                                                        </div>
                                                    </dl>
                                                </div>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            </div>
                        </div>

                    </div>

                    <div className=' py-4 my-3 '>
                        <span className=' text-xl font-semibold'>Terms and Conditions</span>
                        <div className='grid grid-cols-10 gap-2 my-8 mx-4'>
                            <div className='flex justify-center'>
                                <DocumentTextIcon className='h-16' />
                            </div>
                            <div className='col-span-9'>
                                <span>
                                    All notifications regarding information and class changes will be delivered directly by our system via email, please check your email regularly. For further information, please contact us at
                                    <a href='mailto:info@plato.com' className='text-red-500 cursor-pointer ml-1'>info@plato.com </a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <button type='button' onClick={() => navigate('/market/cart')} className='my-2 inline-flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                            Add to cart <RocketLaunchIcon className='h-6 mx-2' />
                        </button>
                        <p className="mt-2 w-full text-center text-xs tracking-wide text-gray-500">
                            Managed by ET Asia. Full Lifetime access.
                        </p>
                    </div>
                </div>
        </>
    )
}
