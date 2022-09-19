import { EditorComponent } from './'

const FormComponent = () => {
  return (
    <form className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500'>
      <div className='w-full'>
        <label htmlFor='title'>Titulo de la tarea:</label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Titulo de la tarea'
          className='input h-10'
        />
      </div>

      <div className='w-full'>
        <label htmlFor='type'>Tipo de tarea</label>
        <select name='type' id='type' className='input h-10'>
          <option value='server'>Server</option>
          <option value='db'>Base de datos</option>
          <option value='web'>Pagina web</option>
          <option value='app'>Aplicación mobile</option>
          <option value='other'>Otro</option>
        </select>
      </div>
      <div className='w-full md:col-span-2'>
        <textarea
          className='input resize-none'
          name='description'
          id='description'
          cols={5}
          rows={10}
          placeholder='Descripción de la tarea'
        />
      </div>
      <div className='w-full md:col-span-2'>
        <EditorComponent />
      </div>
      <div className='w-full flex justify-center md:justify-end items-center md:col-span-2'>
        <button
          className='px-6 py-1 rounded-lg bg-green-600 text-white'
          type='submit'
        >
          Crear
        </button>
      </div>
    </form>
  )
}

export default FormComponent
