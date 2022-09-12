import { FC } from 'react'

interface ListComponentProps {
  children: JSX.Element | JSX.Element[]
  name?: 'TODO' | 'DOING' | 'DONE'
}

const ListComponent: FC<ListComponentProps> = ({ children, name = 'TODO' }) => {
  return (
    <div className='bg-gray-500 flex flex-col items-center my-3 pb-5 rounded-lg'>
      <h2 className='w-full px-5 py-5 font-bold'>{name}: </h2>
      {children}
    </div>
  )
}

export default ListComponent
