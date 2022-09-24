import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from './components'
import { App } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  }
])

export default router
