import { useEffect } from 'react'
import { Stat } from '../../components/lesson/resume'
import { useQuestionStore } from '../../store/questions'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'
import { PrimaryBtn } from '../../components/buttons/primary/index'

export function PageStats() {
  const stats = useQuestionStore((myState) => myState.stats)

  useEffect(() => {
    setTimeout(() => {
      confetti()
    }, 1000)
  }, [])

  return (
    <main className="w-full min-h-[calc(100dvh-87px-25px)] h-full gap-5 flex flex-col items-center justify-between">
      <ul className="flex flex-col xl:flex-row justify-center items-center w-full h-full gap-2">
        <li className="w-full h-full flex justify-center items-center xl:h-max">
          <Stat
            text="total questions"
            icon="⚡"
            number={stats.totalQuestions}
          />
        </li>
        <li className="w-full h-full flex justify-center items-center xl:h-max">
          <Stat
            text="correct answers"
            icon="🥇"
            number={stats.correctAnswers}
          />
        </li>
        <li className="w-full h-full flex justify-center items-center xl:h-max">
          <Stat text="wrong answers" icon="❎" number={stats.wrongAnswers} />
        </li>
      </ul>
      <Link to="/" className='w-full flex justify-end sm:pb-11 pb-5'>
        <PrimaryBtn color="green">Go Back Home</PrimaryBtn>
      </Link>
    </main>
  )
}
