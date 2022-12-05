import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Button, Modal } from 'flowbite-react'

const ConfirmModal = ({open, setIsOpen,setIsSuccess}) => {

  return (
    <Modal
    show={open}
    size="md"
    popup={true}
    onClose={() => setIsOpen(false)}
  >
    <Modal.Header />
    <Modal.Body>
      <div className="text-center">
        {/* <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />   */}
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to confirm this?
        </h3>
        <div className="flex justify-center gap-4">
          <Button
            color="success"
            onClick={() => {
                setIsOpen(false);
                setIsSuccess(true);
            }}
          >
            Yes, I'm sure
          </Button>
          <Button
            color="failure"
            onClick={() => setIsOpen(false)}
          >
            No, cancel
          </Button>
        </div>
      </div>
    </Modal.Body>
  </Modal>
  )
}

export default ConfirmModal