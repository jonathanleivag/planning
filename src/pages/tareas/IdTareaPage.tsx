import { useParams } from 'react-router-dom'

import { IRouterParamsTareas } from '../../Router'

const idTareaPage = () => {
  const { id } = useParams<IRouterParamsTareas>()

  return <div> {id} </div>
}

export default idTareaPage
