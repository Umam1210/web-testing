import React from 'react'
import Image from '../../../../public/favicon-32x32.png'

const RightBarPost = () => {
  const postReddit = [
    '1. Remember the human',
    '2. Behave like you would in real life',
    '3. Look for the original source',
    '4. Search for duplicates before posting',
    '5. Read the community’s rules'
  ];
  return (
    <div>
    <div className='w-full h-72 w-72 rounded-lg border border-gray-200 bg-white p-2.5 shadow-sm'>
      <div className="flex border-b pb-2 border-gray-300 items-center">
        <img src={Image} alt="" />
          <p className='text-sm font-semibold pl-2'>Posting to plato</p>
        </div>
        {postReddit.map((item) => (
          <div key={item} className="flex boder border-b border-gray-300 items-center text-sm font-semibold pl-1.5 py-2 text-gray-500">
            <p>{item}</p>
          </div>
        ))}
        
    </div>
    <div className="mt-4 max-w-[288px] text-gray-500 font-semibold text-xs">
        <p>
          Please be mindful of reddit <span>content policy</span> and practice good
          <span className='text-[#0079d3]'> reddiquette.</span>
        </p>
      </div>
    </div>
  )
}

export default RightBarPost