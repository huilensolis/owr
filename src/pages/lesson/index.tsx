import { useQuestionStore } from '../../store/questions'
import { AnswersList } from '../../components/lesson/answer-list'
import { NavigateQuestions } from '../../components/lesson/navigate-questions'
import { Question } from '../../components/lesson/question'

export function Lesson() {
  const questionList = useQuestionStore((myState) => myState.questions)
  const QuestionIndex = useQuestionStore((myState) => myState.currentQuestion)
  const QuestionInfo = questionList[QuestionIndex]
  return (
    <main className="w-full h-[calc(100vh-87px)]">
      {QuestionInfo !== undefined && (
        <section className="h-full w-full flex flex-col justify-between items-center gap-20">
          <section className="w-full h-full flex justify-center items-center gap-5 flex-col">
            <Question text={QuestionInfo.originalText} />
            <AnswersList question={QuestionInfo} />
          </section>
          <section className="max-w-lg w-full h-max flex justify-center items-end sm:py-11 py-5">
            <NavigateQuestions question={QuestionInfo} />
          </section>
        </section>
      )}
      {QuestionInfo === undefined && (
        <span className="text-cm-red">
          There is been an error loading the quest, if the error persist, please
          contact me through email: solishuilencontact@gmail.com
        </span>
      )}
    </main>
  )
}
