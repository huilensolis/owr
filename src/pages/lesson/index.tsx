import { Lesson } from '../../components/lesson'
import { useQuestionStore } from '../../store/questions'

export function LessonPage() {
  const questionList = useQuestionStore((myState) => myState.questions)
  const questionIndex = useQuestionStore((myState) => myState.currentQuestion)
  const questionInfo = questionList[questionIndex]
  return (
    <main className="w-full h-full flex justify-center items-center">
      {questionInfo !== undefined && <Lesson questionInfo={questionInfo} />}
      {questionInfo === undefined && (
        <span className="text-cm-red">
          There is been an error loading the quest, if the error persist, please
          contact me through email: solishuilencontact@gmail.com
        </span>
      )}
    </main>
  )
}
