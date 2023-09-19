import { Quest } from '../../../interfaces/quest.interface'
import { useQuestionStore } from '../../../store/questions'

interface questionInfoInput {
  question: Quest
}

export function AnswersList({ question }: questionInfoInput) {
  const answerOptions = question.answers

  const globalState = useQuestionStore((myState) => myState)

  const selectedAnwer = question.userSelectedAnswer
  const selectAnswer = globalState.selectAnwer

  function handleClick(answerIndex: number) {
    selectAnswer(question.id, answerIndex)
  }

  const styleWhenSelected = 'border-cm-blue'

  return (
    <ul className="w-full flex flex-col gap-2 justify-center items-center">
      {answerOptions.map((answer, index) => (
        <li key={index} className="w-full flex justify-center items-center">
          <button
            className={`${
              selectedAnwer === index
                ? styleWhenSelected
                : 'border-slate-300 dark:border-slate-700'
            }  w-full h-max px-5 py-3 text-sm font-semibold bg-transparent border-2 border-b-4  rounded-xl text-cm-text-gray dark:text-cm-white flex justify-center items-center text-center hover:bg-cm-dark-white dark:hover:bg-[#202F36] transition-all delay-[0.3]`}
            onClick={() => handleClick(index)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  )
}
