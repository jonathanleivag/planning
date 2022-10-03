import { Dispatch, DragEventHandler, FC, SetStateAction } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineMobile } from 'react-icons/ai'
import { BiServer } from 'react-icons/bi'
import { BsMicrosoft, BsPencil, BsServer } from 'react-icons/bs'
import { FcPlus } from 'react-icons/fc'
import { MdWeb } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { addSelect, IItem } from '../../../features'
import { TName } from './ListComponent'

interface ICardCOmponent {
  id?: string
  title?: string
  children?: string
  section?: TName
  type?: TTypeICon
  setDragged?: Dispatch<IItem | undefined>
  add?: boolean
  setIsOpenModal: Dispatch<SetStateAction<boolean>>
  content?: string
}

interface IIconComponentProps {
  type?: TTypeICon
}

interface IIconComponentResp {
  bg: string
  component: JSX.Element
}

export type TTypeICon = 'server' | 'db' | 'web' | 'app' | 'other'

const IconComponent = ({ type }: IIconComponentProps): IIconComponentResp => {
  let Icon: IconType
  let bg: string

  switch (type) {
    case 'server':
      Icon = BiServer
      bg = 'bg-blue-500'
      break
    case 'db':
      Icon = BsServer
      bg = 'bg-yellow-500'
      break
    case 'web':
      Icon = MdWeb
      bg = 'bg-green-500'
      break
    case 'app':
      Icon = AiOutlineMobile
      bg = 'bg-purple-500'
      break
    default:
      Icon = BsMicrosoft
      bg = 'bg-gray-500'
      break
  }

  return { component: <Icon className='text-xl' />, bg }
}

const CardComponent: FC<ICardCOmponent> = ({
  id,
  title,
  section,
  children,
  type,
  setDragged,
  add = false,
  setIsOpenModal,
  content
}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDragStart: DragEventHandler<HTMLDivElement> = event => {
    setDragged!({
      id: id!,
      title: title!,
      description: children!,
      type: type!,
      section: section!,
      content: content!
    })
  }

  const handleOnClick = () => setIsOpenModal!(true)

  const handleEdit = () => {
    dispatch(
      addSelect({
        id: id!,
        title: title!,
        content: content!,
        description: children!,
        type: type!,
        section: section!
      })
    )
    setIsOpenModal!(true)
  }

  const handleOnDobleClick = () =>
    navigate(`/tareas/${section?.toLocaleLowerCase()}/${id}`)

  return (
    <div
      draggable={!add}
      onClick={add ? handleOnClick : undefined}
      onDoubleClick={add ? undefined : handleOnDobleClick}
      onDragStart={add ? undefined : handleDragStart}
      className={`w-11/12 rounded-lg mt-5 p-2 flex flex-row text-gray-800 ${
        add
          ? 'border-dashed hover:border-solid border-2 border-gray-300 max-h-[60px] min-h-[60px] justify-center items-center cursor-pointer'
          : 'cursor-move bg-gray-300 max-h-[100px] min-h-[100px] justify-between'
      }`}
    >
      {add && <FcPlus className='text-3xl' />}
      {!add && (
        <>
          <div className='flex flex-row justify-center items-center gap-4'>
            <div
              className={`p-3 rounded-full text-white ${
                IconComponent({ type }).bg
              }`}
            >
              {IconComponent({ type }).component}
            </div>
            <span>
              <h2 className='font-bold text-lg'>{title}</h2>
              <p className='font-light text-base'>{children}</p>
            </span>
          </div>
          <button>
            <BsPencil className='text-xl' onClick={handleEdit} />
          </button>
        </>
      )}
    </div>
  )
}

export default CardComponent
