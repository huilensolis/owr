import { BrowserRouter, useRoutes } from 'react-router-dom'

import { Home } from './pages/home'
import { Error } from './pages/error'
import { Learn } from './pages/learn'
import { Lesson } from './pages/lesson'
import { Resume } from './pages/resume'
import { NotFound } from './pages/not-found'
import { NavItem } from './interfaces/nav-item.interface'

import { Header } from './components/header'
import { Layout } from './components/layout'

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: '/learn',
      element: <Learn />,
      errorElement: <Error />
    },
    {
      path: '/lesson',
      element: <Lesson />,
      errorElement: <Error />
    },
    {
      path: '/resume',
      element: <Resume />,
      errorElement: <Error />
    },
    {
      path: '*',
      element: <NotFound />,
      errorElement: <Error />
    }
  ])
  return routes
}
const headerItems: NavItem[] = [
  {
    title: 'home',
    url: '/'
  },
  {
    title: 'learn',
    url: '/learn'
  }
]
function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header headerItems={headerItems} />
        <AppRoutes />
      </BrowserRouter>
    </Layout>
  )
}

export default App
