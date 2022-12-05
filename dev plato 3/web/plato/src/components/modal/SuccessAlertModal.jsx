import React from 'react'
import { Button, Modal } from 'flowbite-react'

const SuccessAlertModal = ({success, setIsSuccess, setInProgress, setIsDone}) => {
  return (
    <Modal
    show={success}
    size="md"
    popup={true}
    onClose={() => {
        setIsDone(true);
        setIsSuccess(false);
        setInProgress(false);
    }}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center flex flex-col gap-3">
        <div className='flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-green-500">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
            </svg>
        </div>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Success!!!
        </h3>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default SuccessAlertModal