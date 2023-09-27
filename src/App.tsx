import { BrowserRouter, useRoutes } from 'react-router-dom'

import { Home } from './pages/home'
import { Error } from './pages/error'
import { Learn } from './pages/learn'
import { LessonPage } from './pages/lesson'
import { PageStats } from './pages/stats'
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
      element: <LessonPage />,
      errorElement: <Error />
    },
    {
      path: '/stats',
      element: <PageStats />,
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
    title: 'stats',
    url: '/stats'
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
