import { DragEventHandler, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './app/store'
import {
  CardComponent,
  FormComponent,
  ListComponent,
  ModalComponent,
  NavbarComponent,
  TName
} from './components'
import { IItem, moveItem } from './features'

function App () {
  const [dragged, setDragged] = useState<IItem | undefined>(undefined)
  const TODO = useSelector((state: RootState) => state.item.TODO)
  const DOING = useSelector((state: RootState) => state.item.DOING)
  const DONE = useSelector((state: RootState) => state.item.DONE)
  const dispatch = useDispatch()
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

  const handleOnDrop: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    dispatch(
      moveItem({
        item: dragged,
        section: event.currentTarget.dataset.list as TName
      })
    )
  }

  return (
    <>
      <NavbarComponent />
      <main className='flex gap-4 px-5 overflow-x-scroll'>
        <ListComponent handleOnDrop={handleOnDrop} name='TODO'>
          <>
            {TODO.map(item => (
              <CardComponent
                section={item.section}
                setDragged={setDragged}
                key={item.id}
                id={item.id}
                title={item.title}
                type={item.type}
                content={item.content}
              >
                {item.description}
              </CardComponent>
            ))}

            <CardComponent add setIsOpenModal={setIsOpenModal} />
          </>
        </ListComponent>

        <ListComponent handleOnDrop={handleOnDrop} name='DOING'>
          {DOING.map(item => (
            <CardComponent
              section={item.section}
              setDragged={setDragged}
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
              content={item.content}
            >
              {item.description}
            </CardComponent>
          ))}
        </ListComponent>

        <ListComponent handleOnDrop={handleOnDrop} name='DONE'>
          {DONE.map(item => (
            <CardComponent
              section={item.section}
              setDragged={setDragged}
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
              content={item.content}
            >
              {item.description}
            </CardComponent>
          ))}
        </ListComponent>
      </main>
      <ModalComponent isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
        <FormComponent setIsOpenModal={setIsOpenModal} />
      </ModalComponent>
    </>
  )
}

export default App
