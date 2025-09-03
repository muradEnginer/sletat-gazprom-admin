import { createBrowserRouter, Navigate } from 'react-router'
import { AdminLayout, IntroLayout } from '@layout'
import {
  Categories,
  CategoriesCreate,
  CategoriesView,
  Dashboard,
  Hotels,
  HotelsCreate
} from '@pages'

export const createRouter = (isLogin: boolean) => {
  const Protected = ()=> isLogin ? <AdminLayout/> : <IntroLayout/>

  return createBrowserRouter([
    {
      path: '/',
      element: <Protected />,
      children: isLogin ? [
        {
          path: '/',
          index: true,
          element: <Dashboard />,
        },
        {
          path: '/hotels',
          element: <Hotels />,
        },
        {
          path: '/hotels/create',
          element: <HotelsCreate />,
        },
        {
          path: '/popular-services',
          element: <Categories />,
        },
        {
          path: '/popular-services/create',
          element: <CategoriesCreate />,
        },
        {
          path: '/popular-services/:id',
          element: <CategoriesView />,
        },
      ] : []
    },
    {
      path: '*',
      element: <Navigate to="/" replace />
    }
  ])
}