import { useFormik } from 'formik'
import { FC, SetStateAction, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { addTarea, IItem } from '../../features'
import { TareaValidation } from '../../validations'
import { EditorComponent } from '.'

interface IRef {
  getContent: () => string
}

interface IFormProps {
  setIsOpenModal: React.Dispatch<SetStateAction<boolean>>
}

const FormComponent: FC<IFormProps> = ({ setIsOpenModal }) => {
  const editorRef = useRef<IRef>(null)
  const disparch = useDispatch()

  const formik = useFormik<IItem>({
    initialValues: {
      title: '',
      description: '',
      content: '',
      type: 'other',
      section: 'TODO'
    },
    validationSchema: TareaValidation,
    onSubmit: values => {
      disparch(
        addTarea({
          id: uuidv4(),
          ...values,
          content: editorRef.current?.getContent() || ''
        })
      )
      setIsOpenModal(false)
    }
  })

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500'
    >
      <div className='w-full'>
        <label htmlFor='title'>Titulo de la tarea:</label>
        <input
          type='text'
          name='title'
          id='title'
          placeholder='Titulo de la tarea'
          className='input h-10'
          onChange={formik.handleChange}
          value={formik.values.title}
          onBlur={formik.handleBlur}
        />
        {formik.touched.title && formik.errors.title && (
          <div className='text-red-500'>{formik.errors.title}</div>
        )}
      </div>

      <div className='w-full'>
        <label htmlFor='type'>Tipo de tarea</label>
        <select
          name='type'
          id='type'
          className='input h-10'
          onChange={formik.handleChange}
          value={formik.values.type}
          onBlur={formik.handleBlur}
        >
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
          rows={5}
          placeholder='Descripción de la tarea'
          onChange={formik.handleChange}
          value={formik.values.description}
          onBlur={formik.handleBlur}
        />
        {formik.touched.description && formik.errors.description && (
          <div className='text-red-500'>{formik.errors.description}</div>
        )}
      </div>
      <div className='w-full md:col-span-2'>
        <EditorComponent editorRef={editorRef} />
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
