import { Quest } from '../../../interfaces/quest.interface'
import { useQuestionStore } from '../../../store/questions'

interface questionInfoInput {
  question: Quest
}

export function AnswersList({ question }: questionInfoInput) {
  const answerOptions = question.answers

  const globalState = useQuestionStore((myState) => myState)

  const selectedAnswer = question.userSelectedAnswer
  const selectAnswer = globalState.selectAnswer

  const correctAnswer = question.correctAnswer

  const { showResult } = useQuestionStore()

  function handleClick(answerIndex: number) {
    if (!globalState.areAnswersEnabled) {
      return
    }
    selectAnswer(question.id, answerIndex)
  }

  function getButtonStyle(answerIndex: number) {
    // if we cant show the result yet, but the user selected the asnwer
    if (!showResult && selectedAnswer === answerIndex) {
      return 'border-cm-blue'
    }

    // if we can show the result
    if (showResult) {
      // if the answer is the one selected, and its incorrect
      const isAnswerCorrect = selectedAnswer === correctAnswer
      if (answerIndex === selectedAnswer && !isAnswerCorrect) {
        return 'border-cm-red'
      }
      // if the answer is the correct answer
      if (answerIndex === correctAnswer) {
        return 'border-cm-green'
      }
    }

    return 'border-slate-300 dark:border-slate-700'
  }

  return (
    <ul className="w-full flex flex-col gap-2 justify-center items-center">
      {answerOptions.map((answer, index) => (
        <li key={index} className="w-full flex justify-center items-center">
          <button
            className={`${getButtonStyle(
              index
            )} w-full h-max px-5 py-3 text-sm font-semibold bg-transparent border-2 border-b-8  rounded-xl text-cm-text-gray dark:text-cm-white flex justify-center items-center text-center hover:bg-cm-gray dark:hover:bg-[#202F36] transition-all delay-[0.3]`}
            onClick={() => handleClick(index)}
          >
            {answer}
          </button>
        </li>
      ))}
    </ul>
  )
}
