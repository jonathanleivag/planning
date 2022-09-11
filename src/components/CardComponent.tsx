import { BiServer } from 'react-icons/bi'
import { BsPencil } from 'react-icons/bs'

const CardComponent = () => {
  return (
    <section className='w-full flex flex-row justify-center'>
      <div className='bg-gray-300 w-11/12 min-h-[100px] rounded-lg p-2 flex flex-row justify-between text-gray-800'>
        <div className='flex flex-row justify-center items-center gap-4'>
          <div className='p-3 bg-gray-400 rounded-full'>
            <BiServer className='text-xl' />
          </div>
          <span>
            <h2 className='font-bold text-lg'>Lorem ipsum dolor sit amet.</h2>
            <p className='font-light text-base'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              ipsam!...
            </p>
          </span>
        </div>
        <button>
          <BsPencil className='text-xl' />
        </button>
      </div>
    </section>
  )
}

export default CardComponent
