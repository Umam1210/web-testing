import React from 'react';
import ButtonBlue from './atoms/ButtonBlue';
import ButtonGray from './atoms/ButtonGray';

const TabContent = ({content}) => {
  return (
    <>
    <div>
        <input type="text" placeholder='Title' className='border border-solid border-gray-300 h-10 w-full pl-3 rounded' />
        {content}
    </div>
    <div className="flex gap-1.5 mt-2.5">
        <ButtonGray label="OC"/>
        <ButtonGray label="Spoiler"/>
        <ButtonGray label="NSFW"/>
        <ButtonGray label="Flair"/>
    </div>

    <div className="flex gap-3.5 mt-7 justify-end border-t border-t-gray-200 pt-5">
        <ButtonGray label="Save Draft" />
        <ButtonBlue label="Post" />
    </div>
    </>
  )
}

export default TabContent