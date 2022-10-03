import { useParams } from 'react-router-dom'

import { IRouterParamsTareas } from '../../Router'

const idTareaPage = () => {
  const { id, type } = useParams<IRouterParamsTareas>()

  return (
    <div>
      {id} {type}
    </div>
  )
}

export default idTareaPage
