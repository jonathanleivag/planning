import { createBrowserRouter } from 'react-router-dom'

import { ErrorPage } from './components'
import { App, IdTareaPage, Tareas, TypeTareaPage } from './pages'

export interface IRouterParamsTareas extends Record<string, string> {
  type: string
  id: string
}

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: 'tareas',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Tareas />
      },
      {
        path: ':type',
        errorElement: <ErrorPage />,
        children: [
          {
            path: '',
            element: <TypeTareaPage />
          },
          {
            path: ':id',
            element: <IdTareaPage />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  }
])

export default router
