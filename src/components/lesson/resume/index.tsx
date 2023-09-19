import { useQuestionStore } from '../../../store/questions'

export function Resume() {
  const resume = useQuestionStore((myState) => myState.resume)

  return (
    <ul className="flex justify-center items-baseline w-full h-full gap-2">
      <li className="flex flex-col justify-center items-center">
        <span className="dark:text-cm-white text-cm-text-gray text-center font-bold">
          total questions
        </span>
        <span className="dark:text-cm-white text-cm-text-gray text-center font-bold">
          {resume.totalQuestions}
        </span>
      </li>
      <li className="flex flex-col justify-center items-center">
        <span className="dark:text-cm-white text-cm-text-gray text-center font-bold">
          correct answers
        </span>
        <span className="dark:text-cm-white text-cm-text-gray text-center font-bold">
          {resume.correctAnswers}
        </span>
      </li>
      <li className="flex flex-col justify-center items-center">
        <span className="dark:text-cm-white text-cm-text-gray text-center font-bold">
          wrong answers
        </span>
        <span className="dark:text-cm-white text-cm-text-gray font-bold">
          {resume.wrongAnswers}
        </span>
      </li>
    </ul>
  )
}
