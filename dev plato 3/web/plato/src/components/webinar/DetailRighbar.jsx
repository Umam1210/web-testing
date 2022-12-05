import dayjs from 'dayjs'
import React from 'react'

import {
    UserIcon,
    CalendarIcon,
    CheckCircleIcon,
    XCircleIcon,
   
} from '@heroicons/react/24/outline'
import {RocketLaunchIcon} from '@heroicons/react/24/solid'
import { newsList } from '../news/NewsRightBarMainPage'
import { useNavigate } from 'react-router-dom'

export default function DetailRighbar() {
    let navigate = useNavigate()
    return (
        <>
            <div className='border rounded-lg sticky top-24 shadow'>
                <div className="col-span-2 flex items-center justify-center mb-3">
                    <img src={newsList[1]?.imageUrl} alt={''} className=' object-cover w-full h-52 rounded-t-lg' />
                </div>
                <div className='mx-3 pb-2'>
                    <span className='mx-2'>Webinar Price</span>
                    <div className='col-span-2 grid grid-cols-11 gap-1 mt-2 border-b'>
                        <div className='ml-2 col-span-4 '>
                            <span className='text-lg mb-5 font-bold'>Rp. {newsList[1]?.price}</span>
                        </div>
                        <div className='mr-2 mb-5 col-span-7 flex justify-end '>
                            <span className='bg-red-500 px-4 rounded-l-lg rounded-r-[1rem] text-center text-white'>{newsList[1]?.discount}</span>
                            <span className='text-xs line-through mx-2 mt-1'> Rp. {newsList[1]?.price}</span>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className='flex mt-3'>
                            <UserIcon className='h-6 mr-2' />
                            <p>Speaker :</p>
                        </div>
                        <span className='ml-8 mb-3'>{newsList[0]?.author}</span>
                        <div className='flex mt-3'>
                            <CalendarIcon className='h-6 mr-2' />
                            <p>Webinar Date :</p>
                        </div>
                        <span className='ml-8 text-sm'>
                            {dayjs(newsList[1].publishedAt).format('DD MMMM YYYY')} | 12:00 WIB - 14:00 WIB
                        </span>
                        <div className='flex my-3'>
                            <CheckCircleIcon className='h-6 mr-2 text-blue-700' />
                            <p>Certified</p>
                        </div>
                        <div className='flex my-3'>
                            <XCircleIcon className='h-6 mr-2 text-red-700 ' />
                            <p>No Material Downloads</p>
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
            </div>
        </>
    )
}
