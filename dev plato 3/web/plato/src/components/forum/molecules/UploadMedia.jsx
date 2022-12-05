import React from 'react'
import { PhotoIcon} from '@heroicons/react/20/solid';
import ButtonBlue from '../atoms/ButtonBlue';

const UploadMedia = () => {
  return (
    <div className="flex h-60 border-2 border-gray-300 border-dashed rounded-md justify-center items-center my-4">
        <div className="flex items-center flex-col justify-center">
            <div className="flex mb-4 w-20 h-20 border-2 border-black rounded-full justify-center p-4 items-center"><PhotoIcon/></div>
            <p className='text-sm text-center '>Upload a Foto or Video</p>
            <p className='text-base text-center m-2 font-semibold'>Video must be vertical and between 15 second and 10 minutes long.</p>
            <ButtonBlue label="Upload"/>
        </div>
    </div>
  )
}

export default UploadMedia