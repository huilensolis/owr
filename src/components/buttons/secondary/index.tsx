import { ReactNode } from 'react'

interface BtnInput {
  children: ReactNode
  disabled?: boolean
}

export function SecundaryBtn({ children, disabled = false }: BtnInput) {
  return (
    <button
      className="bg-transparent border-2 dark:border-cm-hover-gray  border-cm-black text-cm-black w-full py-3 dark:text-cm-white font-bold rounded-xl transition-all delay-75 hover:scale-105 hover:bg-cm-black hover:text-cm-white dark:hover:bg-cm-white dark:hover:text-cm-black disabled:opacity-50"
      disabled={disabled}
    >
      {children}
    </button>
  )
}
