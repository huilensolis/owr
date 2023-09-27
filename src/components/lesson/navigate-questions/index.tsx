import { PrimaryBtn } from '../../buttons/primary/index'
import { useQuestionStore } from '../../../store/questions'
import { useNavigate } from 'react-router-dom'
import { ReactNode } from 'react'

export function NavigateQuestions() {
  const navigate = useNavigate()

  const questions = useQuestionStore((mystate) => mystate.questions)

  const currentIndexOnQuestions = useQuestionStore(
    (mystate) => mystate.currentQuestion
  )

  const addWrongAnswersToStats = useQuestionStore(
    (mystate) => mystate.addWrongAnswersToStats
  )
  const addCorrectAnswersToStats = useQuestionStore(
    (mystate) => mystate.addCorrectAnswersToStats
  )

  const setAnswersEnabled = useQuestionStore(
    (mystate) => mystate.setAnswersEnabled
  )
  const showResult = useQuestionStore((mystate) => mystate.showResult)
  const setShowResult = useQuestionStore((mystate) => mystate.setShowResult)

  const jumpNextQuestion = useQuestionStore(
    (myState) => myState.jumpNextQuestion
  )

  const currentQuestion = questions[currentIndexOnQuestions]

  const isAnswerCorrect = currentQuestion.isCorrectUserAnswer ?? false

  const hadUserSelectedAnOption =
    currentQuestion.userSelectedAnswer !== undefined

  function JumpIntoNextQuestion() {
    setAnswersEnabled(true)
    setShowResult(false)

    if (questions[currentIndexOnQuestions + 1] === undefined) {
      return navigate('/Stats')
    }

    return jumpNextQuestion()
  }

  function handleNextQuestionClick() {
    function pauseGame() {
      setShowResult(true)
      setAnswersEnabled(false)
    }

    if (!isAnswerCorrect) {
      addWrongAnswersToStats(1)
      pauseGame()
      return
    }
    addCorrectAnswersToStats(1)
    pauseGame()
  }
  return (
    <section className="w-full flex flex-col justify-center items-end gap-5">
      <section className="min-h-[150px] h-full w-full overflow-auto">
        {showResult && (
          <AnswerResult isCorrect={isAnswerCorrect}>
            <span
              className={`${
                isAnswerCorrect
                  ? 'text-cm-dark-green dark:text-cm-green'
                  : 'text-cm-red'
              } italic font-bold`}
            >
              {isAnswerCorrect
                ? 'Correct answer, keep going!'
                : 'Inconrrect answer'}
            </span>
            <p
              className={`${
                isAnswerCorrect
                  ? 'text-cm-dark-green dark:text-cm-green'
                  : 'text-cm-red'
              } italic`}
            >
              {currentQuestion.originalText}
            </p>
            <p
              className={`${
                isAnswerCorrect
                  ? 'text-cm-dark-green dark:text-cm-green'
                  : 'text-cm-red'
              } italic`}
            >
              {currentQuestion.answers[currentQuestion.correctAnswer]}
            </p>
          </AnswerResult>
        )}
      </section>

      <PrimaryBtn
        color={showResult ? (isAnswerCorrect ? 'green' : 'red') : 'green'}
        onClick={() =>
          showResult ? JumpIntoNextQuestion() : handleNextQuestionClick()}
        disabled={!hadUserSelectedAnOption}
      >
        {showResult ? 'NEXT' : 'VALIDATE'}
      </PrimaryBtn>
    </section>
  )
}
function AnswerResult({
  children,
  isCorrect
}: {
  children: ReactNode
  isCorrect: boolean
}) {
  return (
    <section
      className={`w-full h-full p-7 flex flex-col rounded-2xl ${
        isCorrect
          ? 'bg-cm-light-green dark:bg-cm-dark-white'
          : 'bg-cm-light-red'
      }`}
    >
      {children}
    </section>
  )
}
