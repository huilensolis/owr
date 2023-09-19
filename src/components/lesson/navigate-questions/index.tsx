import { PrimaryBtn } from '../../buttons/primary/index'
import { useQuestionStore } from '../../../store/questions'
import { useNavigate } from 'react-router-dom'

export function NavigateQuestions() {
  const globalState = useQuestionStore((mystate) => mystate)
  const navigate = useNavigate()

  function JumpIntoNextQuestion() {
    const questions = globalState.questions
    const currentIndexOnQuestions = globalState.currentQuestion

    if (questions[currentIndexOnQuestions + 1] === undefined) {
      console.log('navigating')
      return navigate('/resume')
    }
    console.log(questions[currentIndexOnQuestions])
    globalState.jumpNextQuestion()
  }

  const handleNextQuestionClick = () => {
    const currentQuestion = globalState.questions[globalState.currentQuestion]
    const isAnswerCorrect = currentQuestion.isCorrectUserAnswer
    if (isAnswerCorrect === false) {
      globalState.addWrongAnswersToResume(1)
      return JumpIntoNextQuestion()
    }
    globalState.addCorrectAnswersToResume(1)
    JumpIntoNextQuestion()
  }
  return (
    <section className="w-full flex justify-end items-center">
      <PrimaryBtn color="green" onClick={handleNextQuestionClick}>
        NEXT
      </PrimaryBtn>
    </section>
  )
}
