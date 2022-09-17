import { Dispatch, DragEventHandler, FC } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineMobile } from 'react-icons/ai'
import { BiServer } from 'react-icons/bi'
import { BsMicrosoft, BsPencil, BsServer } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'

import { IItem } from '../features'
import { TName } from './ListComponent'

interface ICardCOmponent {
  id: string
  title: string
  children: string
  section: TName
  type?: TTypeICon
  setDragged: Dispatch<IItem | undefined>
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
  setDragged
}) => {
  const handleDragStart: DragEventHandler<HTMLDivElement> = event => {
    setDragged({
      id,
      title,
      description: children,
      type: type!,
      section
    })
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className='bg-gray-300 w-11/12 min-h-[100px] rounded-lg mt-5 p-2 flex flex-row justify-between text-gray-800 cursor-move'
    >
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
        <BsPencil className='text-xl' />
      </button>
    </div>
  )
}

export default CardComponent
