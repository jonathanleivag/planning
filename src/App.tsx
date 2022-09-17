import { DragEventHandler, useState } from 'react'

import { CardComponent, ListComponent, NavbarComponent } from './components'
import { TTypeICon } from './components/CardComponent'
import { TName } from './components/ListComponent'

export interface IItem {
  id: string
  title: string
  description: string
  type: TTypeICon
  section: TName
}

const items: IItem[] = [
  {
    id: '1',
    title: 'Server',
    description: 'Server description',
    type: 'server',
    section: 'TODO'
  },
  {
    id: '2',
    title: 'Database',
    description: 'Database description',
    type: 'db',
    section: 'TODO'
  },
  {
    id: '3',
    title: 'Web',
    description: 'Web description',
    type: 'web',
    section: 'TODO'
  },
  {
    id: '4',
    title: 'App',
    description: 'App description',
    type: 'app',
    section: 'TODO'
  },
  {
    id: '5',
    title: 'Other',
    description: 'Other description',
    type: 'other',
    section: 'TODO'
  }
]

export interface IElement {
  TODO: IItem[]
  DOING: IItem[]
  DONE: IItem[]
}

function App () {
  const [dragged, setDragged] = useState<IItem | undefined>(undefined)

  const [element, setElement] = useState<IElement>({
    TODO: items.filter(item => item.section === 'TODO'),
    DOING: items.filter(item => item.section === 'DOING'),
    DONE: items.filter(item => item.section === 'DONE')
  })

  const handleOnDrop: DragEventHandler<HTMLDivElement> = event => {
    event.preventDefault()
    const dataList: string = event.currentTarget.dataset.list as TName
    const cloneElement = structuredClone(element) as IElement

    const newElement = cloneElement[dragged?.section!].filter(
      item => item.id !== dragged?.id
    )
    cloneElement[dragged?.section!] = newElement

    cloneElement[dataList as TName].push(dragged!)
    cloneElement[dataList as TName].map(item => {
      if (item.id === dragged?.id) item.section = dataList as TName
      return item
    })
    setElement(cloneElement)
  }

  return (
    <>
      <NavbarComponent />
      <main className='flex flex-col md:flex-row gap-4 px-5'>
        <ListComponent handleOnDrop={handleOnDrop} name='TODO'>
          {element.TODO.map(item => (
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
          {element.DOING.map(item => (
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
          {element.DONE.map(item => (
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
