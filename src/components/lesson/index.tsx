import { Quest } from '../../interfaces/quest.interface'
import { AnswersList } from './answer-list'
import { NavigateQuestions } from './navigate-questions'
import { Question } from './question'

export function Lesson({ questionInfo }: { questionInfo: Quest }) {
  return (
    <section className="h-full w-full flex flex-col justify-between items-center gap-20">
      <section className="w-full h-full flex justify-center items-center gap-5 flex-col">
        <Question text={questionInfo.originalText} />
        <AnswersList question={questionInfo} />
      </section>
      <section className="max-w-lg w-full h-max flex justify-center items-end sm:py-11 py-5">
        <NavigateQuestions />
      </section>
    </section>
  )
}
