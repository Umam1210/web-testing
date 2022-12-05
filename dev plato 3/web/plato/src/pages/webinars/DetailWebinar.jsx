import React from 'react'
import DetailList from '../../components/webinar/DetailList'
import DetailRighbar from '../../components/webinar/DetailRighbar'

export default function DetailWebinar() {
  return (
    <>
    <div className='col-span-8'>
        <DetailList />
    </div>
    <div className='col-span-4 '>
        <DetailRighbar />
    </div>
    </>
  )
}
