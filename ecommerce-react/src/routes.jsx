import { Navigate, useRoutes } from 'react-router-dom'
import App from './pages/App'
import Product from './pages/Product'

const Routes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <Navigate to='/products' />
    },
    {
      path: 'products',
      element: <App />
    },
    {
      path: 'product/:_id',
      element: <Product />
    },
    {
      path: '/404',
      element: <p>Page not found</p>
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])
  return element
}

export default Routes
