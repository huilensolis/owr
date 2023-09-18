import { ReactNode } from 'react'

interface BtnInput {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
}

export function SecundaryBtn({
  children,
  disabled = false,
  onClick
}: BtnInput) {
  return (
    <button
      className="bg-transparent border-2 border-b-4 text-sm border-cm-light-gray dark:border-cm-gray sm:w-max w-full px-10 py-2 text-cm-text-gray dark:text-cm-white font-bold rounded-xl transition-all delay-75 hover:scale-105 disabled:opacity-50 max-w-[640px]"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
