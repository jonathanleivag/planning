import { useParams } from 'react-router-dom'

import { IRouterParamsTareas } from '../../Router'

const TypeTareaPage = () => {
  const { type } = useParams<IRouterParamsTareas>()

  return <div>{type}</div>
}

export default TypeTareaPage
