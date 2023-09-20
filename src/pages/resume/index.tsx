import { useEffect } from 'react'
import { Resume } from '../../components/lesson/resume'
import { useQuestionStore } from '../../store/questions'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import { PrimaryBtn } from '../../components/buttons/primary/index'

export function PageResume() {
  const resume = useQuestionStore((myState) => myState.resume)

  useEffect(() => {
    setTimeout(() => {
      confetti()
    }, 1000)
  }, [])

  return (
    <main className="w-full min-h-[calc(100dvh-87px-25px)] h-full gap-5 flex flex-col items-center justify-between">
      <ul className="flex flex-col xl:flex-row justify-center items-center w-full h-full gap-2">
        <li className="w-full h-full flex justify-center items-center xl:h-max">
          <Resume
            text="total questions"
            icon="⚡"
            number={resume.totalQuestions}
          />
        </li>
        <li className="w-full h-full flex justify-center items-center xl:h-max">
          <Resume
            text="correct answers"
            icon="🥇"
            number={resume.correctAnswers}
          />
        </li>
        <li className="w-full h-full flex justify-center items-center xl:h-max">
          <Resume text="wrong answers" icon="❎" number={resume.wrongAnswers} />
        </li>
      </ul>
      <Link to="/" className='w-full flex justify-end sm:pb-11 pb-5'>
        <PrimaryBtn color="green">Go Back Home</PrimaryBtn>
      </Link>
    </main>
  )
}
