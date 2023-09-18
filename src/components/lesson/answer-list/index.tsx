import { Quest } from '../../../interfaces/quest.interface'

interface questionInfoInput {
  question: Quest
}

export function AnswersList({ question }: questionInfoInput) {
  const answerOptions = question.answers
  return (
    <ul className="w-full max-w-lg h-full flex flex-col gap-2 justify-center items-center">
      {answerOptions.map((answer, index) => (
        <li key={index} className="w-full flex justify-center items-center">
          <button className="w-full h-max px-5 py-3 text-sm bg-transparent border-2 border-b-4 border-cm-light-gray dark:border-cm-gray rounded-xl text-cm-text-gray dark:text-cm-white flex justify-center items-center text-center hover:bg-cm-dark-white dark:hover:bg-[#202F36] transition-all delay-[0.3]">
            {answer}
          </button>
        </li>
      ))}
    </ul>
  )
}
