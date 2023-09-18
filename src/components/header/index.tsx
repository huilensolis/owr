import { Link } from 'react-router-dom'
import { NavItem } from '../../interfaces/nav-item.interface'
import { ThemeSwitch } from '../color-theme-switch'

interface input {
  headerItems: NavItem[]
}

export function Header({ headerItems }: input) {
  return (
    <header className="w-screen px-5 h-max flex justify-between items-center py-3 gap-5 border-b-2 border-cm-border-gray fixed top-0 left-0">
      <Link to="/" className="font-bold text-black dark:text-white text-xl">
        Owr
      </Link>
      <nav className="flex gap-5 max-w-max w-full">
        <ul className="flex gap-5 w-ful">
          {headerItems.map((item: NavItem) => (
            <Link
              to={item.url}
              key={item.url}
              className="text-black dark:text-white text-xl"
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
