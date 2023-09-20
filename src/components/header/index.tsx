import { Link } from 'react-router-dom'
import { NavItem } from '../../interfaces/nav-item.interface'
import { ThemeSwitch } from '../color-theme-switch'

interface input {
  headerItems: NavItem[]
}

export function Header({ headerItems }: input) {
  return (
    <header className="w-screen bg-cm-white dark:bg-cm-black px-5 sm:px-20 h-max flex justify-between items-center py-3 gap-5 border-b-2 border-cm-gray dark:border-cm-text-gray fixed top-0 left-0">
      <Link
        to="/"
        className="font-bold text-cm-text-gray dark:text-cm-white text-base"
      >
        Owr
      </Link>
      <nav className="flex gap-5 max-w-max w-full">
        <ul className="flex gap-5 w-ful">
          {headerItems.map((item: NavItem) => (
            <Link
              to={item.url}
              key={item.url}
              className="text-cm-text-gray dark:text-cm-white text-base font-bold"
            >
              {item.title}
            </Link>
          ))}
          <ThemeSwitch />
        </ul>
      </nav>
    </header>
  )
}
