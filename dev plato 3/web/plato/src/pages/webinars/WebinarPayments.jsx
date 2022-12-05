import dayjs from 'dayjs'
import React from 'react'
import { newsList } from '../../components/news/NewsRightBarMainPage'

export default function WebinarPayments() {
  return (
    <>
      <div className='col-span-12'>
        <p className=' bg-gradient-to-r from-sky-300 to-indigo-500 text-center text-white p-8 text-2xl'>Buy Now</p>
      </div>
      <div className='col-span-8'>
        <div className="border  rounded-xl my-4 grid grid-cols-8 shadow-md">
          <div className="col-span-2 flex items-center justify-center p-3">
            <img src={newsList[1].imageUrl} alt={newsList[1].source} className='w-64 rounded object-contain' />
          </div>
          <div className="col-span-6 mx-4 my-3">
            <p className="">{newsList[1].title}</p>
            <div className='my-2'>
              <span className="bg-indigo-900 py-1 px-5 rounded-md text-white">Webinar{''}</span>
              <span className="bg-indigo-700 py-1 px-5 rounded-md mx-4 text-white">Certified{''}</span>
              <span className="bg-indigo-500 py-1 px-5 rounded-md text-white">Beginner{''}</span>
            </div>
            <p className="text-[#606060] text-[14px]">
              {dayjs(newsList[1].publishedAt).format('DD MMMM YYYY')} | 12:00 WIB - 14:00 WIB
            </p>
            <div className='flex border-b p-4'>
              <img src={newsList[1].imageUrl} alt="" className='w-10 h-10 rounded-full mt-1 mr-2' />
              <div className='text-[14px]'>
                <p>{newsList[1]?.author}</p>
                <p>CTO {''}</p>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-2 mb-4'>
              <div>
                <span className='bg-red-500 px-4 rounded-l-lg rounded-r-[1rem] text-center text-white'>{newsList[1]?.discount}</span>
                <span className='text-xs line-through mx-2'> Rp. {newsList[1]?.price}</span>
              </div>
              <div className='text-end'>
                <span className='text-2xl mb-5 font-bold'>Rp. {newsList[1]?.price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-4 border rounded-lg shadow mt-4 bg-zinc-50'>
        <div className='flex flex-col m-4'>
          <span className='text-2xl font-semibold mb-4'>Shopping Summary</span>
          <div className='flex flex-row justify-between'>
            <span>Total price</span>
            <span>Rp. {newsList[1]?.price}</span>
          </div>
          <div className='flex flex-row justify-between my-4 border-b pb-3'>
            <span>You Save</span>
            <span>Rp. {newsList[1]?.price}</span>
          </div>
          <div className='flex flex-row justify-between '>
            <span>Total Payment</span>
            <span className='text-red-500 text-xl'>Rp. {newsList[1]?.price}</span>
          </div>
          <button className='bg-red-500 hover:bg-red-700 py-3 mt-2 text-white text-lg rounded-lg'>Buy Now</button>
        </div>
      </div>

    </>
  )
}
