import { Dispatch, FC, SetStateAction } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ReactModal from 'react-modal'

interface IModalProps {
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal: FC<IModalProps> = ({ setIsOpenModal, isOpenModal }) => {
  const handleCloseModal = () => setIsOpenModal(false)

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
    >
      <div className='w-full flex justify-end items-center text-red-400'>
        <AiFillCloseCircle
          onClick={handleCloseModal}
          className='text-2xl cursor-pointer'
        />
      </div>
    </ReactModal>
  )
}

export default Modal
