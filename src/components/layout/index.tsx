export function Layout({ children }) {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-center px-5 pt-[calc(67px+20px)] bg-cm-white dark:bg-cm-black">
      {children}
    </div>
  )
}
