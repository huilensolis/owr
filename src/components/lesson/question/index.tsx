export function Question({ text }: { text: string }) {
  return (
    <article className="w-full max-w-lg h-max flex justify-center items-start flex-col gap-5">
      <h2 className="font-bold text-xl text-cm-text-gray dark:text-cm-white">
        What does the sentence mean?
      </h2>
      <p className="text-sm dark:text-cm-white text-cm-text-gray border-b-2 border-dashed border-cm-gray w-max">
        {text
          .split('')
          .map((char) => char.toLowerCase())
          .join('')}
      </p>
    </article>
  )
}
