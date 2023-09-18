import { Quest } from '../../../interfaces/quest.interface'
import { SecundaryBtn } from '../../buttons/secondary/index'
import { PrimaryBtn } from '../../buttons/primary/index'
interface QuestionInputInterface {
  question: Quest
}

export function NavigateQuestions({ question }: QuestionInputInterface) {
  const handleSkipQuestionClick = () => {
    console.log('skip', question)
  }

  const handleNextQuestionClick = () => {
    console.log('next')
  }
  return (
    <section className="w-full flex justify-between items-center gap-2 flex-col sm:flex-row">
      <SecundaryBtn onClick={handleSkipQuestionClick}>SKIP</SecundaryBtn>
      <PrimaryBtn color="green" onClick={handleNextQuestionClick}>
        NEXT
      </PrimaryBtn>
    </section>
  )
}
