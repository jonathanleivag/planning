import { DragEventHandler, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from './app/store'
import { CardComponent, ListComponent, NavbarComponent } from './components'
import { TName } from './components/ListComponent'
import { IItem, moveItem } from './features/item/itemSlice'

function App () {
  const [dragged, setDragged] = useState<IItem | undefined>(undefined)
  const TODO = useSelector((state: RootState) => state.item.TODO)
  const DOING = useSelector((state: RootState) => state.item.DOING)
  const DONE = useSelector((state: RootState) => state.item.DONE)
  const dispatch = useDispatch()

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
      <main className='flex flex-col md:flex-row gap-4 px-5'>
        <ListComponent handleOnDrop={handleOnDrop} name='TODO'>
          {TODO.map(item => (
            <CardComponent
              section={item.section}
              setDragged={setDragged}
              key={item.id}
              id={item.id}
              title={item.title}
              type={item.type}
            >
              {item.description}
            </CardComponent>
          ))}
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
            >
              {item.description}
            </CardComponent>
          ))}
        </ListComponent>
      </main>
    </>
  )
}

export default App
