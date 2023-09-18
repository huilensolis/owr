import { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center px-5 pt-[calc(67px+20px)] bg-cm-white dark:bg-cm-black">
      {children}
    </div>
  )
}
