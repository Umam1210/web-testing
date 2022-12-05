import React from 'react'

const ButtonGray = ({icon, label}) => {
  return (
    <div
    className='border border-[#d7dfe2] rounded-full w-auto h-6 flex items-center py-4 px-5 justify-center text-gray-400 font-bold text-sm cursor-pointer'
    >{icon}
    <p>{label}</p>
    </div>
  )
}

export default ButtonGray