import { CardComponent, ListComponent, NavbarComponent } from './components'
import { TTypeICon } from './components/CardComponent'

interface IItem {
  id: number
  title: string
  description: string
  type: TTypeICon
}

const TODO: IItem[] = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    type: 'server',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, quis...'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet.',
    type: 'app',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, quis...'
  }
]

const DOING: IItem[] = [
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet.',
    type: 'db',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, quis...'
  },
  {
    id: 4,
    title: 'Lorem ipsum dolor sit amet.',
    type: 'web',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, quis...'
  }
]

function App () {
  return (
    <>
      <NavbarComponent />
      <main className='flex flex-col md:flex-row gap-4 px-5'>
        <ListComponent name='TODO'>
          {TODO.map(item => (
            <CardComponent key={item.id} title={item.title} type={item.type}>
              {item.description}
            </CardComponent>
          ))}
        </ListComponent>

        <ListComponent name='DOING'>
          {DOING.map(item => (
            <CardComponent key={item.id} title={item.title} type={item.type}>
              {item.description}
            </CardComponent>
          ))}
        </ListComponent>

        <ListComponent name='DONE'>
          <CardComponent title='Lorem ipsum dolor sit amet.' type='server'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
            quis...
          </CardComponent>
        </ListComponent>
      </main>
    </>
  )
}

export default App
