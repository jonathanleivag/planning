import { FC } from 'react'
import { IconType } from 'react-icons'
import { AiOutlineMobile } from 'react-icons/ai'
import { BiServer } from 'react-icons/bi'
import { BsPencil, BsServer } from 'react-icons/bs'
import { MdWeb } from 'react-icons/md'

interface ICardCOmponent {
  title: string
  children: string
  type?: TTypeICon
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
      bg = 'bg-red-500'
      break
    case 'web':
      Icon = MdWeb
      bg = 'bg-green-500'
      break
    case 'app':
      Icon = AiOutlineMobile
      bg = 'bg-yellow-500'
      break
    default:
      Icon = BiServer
      bg = 'bg-blue-500'
      break
  }

  return { component: <Icon className='text-xl' />, bg }
}

const CardComponent: FC<ICardCOmponent> = ({ title, children, type }) => {
  return (
    <div className='bg-gray-300 w-11/12 min-h-[100px] rounded-lg mt-5 p-2 flex flex-row justify-between text-gray-800'>
      <div className='flex flex-row justify-center items-center gap-4'>
        <div
          className={`p-3 bg-gray-400 rounded-full ${
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
