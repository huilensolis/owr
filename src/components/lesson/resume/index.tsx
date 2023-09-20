export function Resume({
  text,
  icon,
  number
}: {
  text: string
  icon: string
  number: number
}) {
  return (
    <article className="dark:bg-cm-dark-white bg-slate-300 flex justify-center flex-col items-center w-full xl:w-56 h-full p-10 rounded-xl gap-5">
      <span className="font-bold uppercase text-center text-2xl text-cm-text-gray dark:text-cm-white">
        {text}
      </span>
      <span className="font-bold text-2xl text-cm-text-gray dark:text-cm-white">
        {icon} {number}
      </span>
    </article>
  )
}
