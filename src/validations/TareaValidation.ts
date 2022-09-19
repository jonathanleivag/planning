import * as Yup from 'yup'

import { TName, TTypeICon } from '../components'
import { IItem } from '../features'

export const TareaValidation: Yup.SchemaOf<IItem> = Yup.object().shape({
  title: Yup.string().required('El título es requerido'),
  description: Yup.string().required('La descripción es requerida'),
  type: Yup.mixed<TTypeICon>()
    .oneOf(['server', 'db', 'web', 'app', 'other'])
    .required('El tipo es requerido'),
  section: Yup.mixed<TName>()
    .oneOf(['TODO', 'DOING', 'DONE'])
    .required('La sección es requerida'),
  id: Yup.string().notRequired(),
  content: Yup.string().notRequired()
})
