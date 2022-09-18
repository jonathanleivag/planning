import { DragEventHandler, FC } from 'react'

interface ListComponentProps {
  children: JSX.Element | JSX.Element[]
  name?: TName
  handleOnDrop: DragEventHandler<HTMLDivElement>
}

export type TName = 'TODO' | 'DOING' | 'DONE'

const ListComponent: FC<ListComponentProps> = ({
  children,
  name = 'TODO',
  handleOnDrop
}) => {
  return (
    <div
      data-list={name}
      onDrop={handleOnDrop}
      onDragOver={event => event.preventDefault()}
      className='bg-gray-500 flex flex-col flex-shrink-0 md:flex-shrink w-full md:w-[33%] items-center my-3 rounded-lg max-h-screen overflow-y-scroll pb-20'
    >
      <h2 className='w-full px-5 py-5 font-bold'>{name}: </h2>
      {children}
    </div>
  )
}

export default ListComponent
