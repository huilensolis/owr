import { PrimaryBtn } from '../../components/buttons/primary/index'
import { useQuestionStore } from '../../store/questions'
import { useNavigate } from 'react-router-dom'
export function Home() {
  const fetchQuestions = useQuestionStore((myState) => myState.fetchQuestions)
  const navigate = useNavigate()

  const handleClick = () => {
    fetchQuestions(6)
    navigate('/lesson')
  }

  return (
    <main className="h-full min-h-[calc(100vh-87px)] w-full flex items-center justify-center flex-col gap-2">
      <h1 className="text-5xl font-bold text-cm-black dark:text-cm-white">
        Owr
      </h1>
      <sub className="text-cm-black dark:text-cm-white text-xl mb-3">
        Learn French with Owr
      </sub>
      <PrimaryBtn color="green" onClick={handleClick}>
        Lets start!
      </PrimaryBtn>
    </main>
  )
}
