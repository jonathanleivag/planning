import { Dispatch, FC, SetStateAction } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import ReactModal from 'react-modal'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../../app/store'
import { resetSelect } from '../../../../features'

interface IModalProps {
  isOpenModal: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  children: JSX.Element
}

const Modal: FC<IModalProps> = ({ setIsOpenModal, isOpenModal, children }) => {
  const dispatch = useDispatch()
  const selectItem = useSelector((state: RootState) => state.item.selectItem)

  const handleCloseModal = () => {
    setIsOpenModal(false)
    if (selectItem.id) {
      dispatch(resetSelect())
    }
  }

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
    >
      <AiFillCloseCircle
        onClick={handleCloseModal}
        className='text-2xl cursor-pointer fixed text-red-500'
      />
      <div className='w-full flex justify-center overflow-y-auto'>
        <div className='w-10/12 mt-10'>{children}</div>
      </div>
    </ReactModal>
  )
}

export default Modal
