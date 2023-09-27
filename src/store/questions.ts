import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Quest } from '../interfaces/quest.interface'
import questionsJson from '../assets/data.json'
import { type Stats } from '../interfaces/stats'
interface MyZustandState {
  questions: Quest[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
  selectAnswer: (questionId: number, answerIndex: number) => void
  stats: Stats
  areAnswersEnabled: boolean
  showResult: boolean
  setShowResult: (setter: boolean) => void
  setAnswersEnabled: (setter: boolean) => void
  jumpNextQuestion: () => void
  addCorrectAnswersToStats: (points: number) => void
  addWrongAnswersToStats: (points: number) => void
}

export const useQuestionStore = create<MyZustandState>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        stats: {
          correctAnswers: 0,
          totalQuestions: 0,
          wrongAnswers: 0
        },
        areAnswersEnabled: true,
        showResult: false,
        setShowResult(setter: boolean) {
          set({ showResult: setter })
        },
        setAnswersEnabled(setter) {
          set({ areAnswersEnabled: setter })
        },
        jumpNextQuestion: () => {
          const nextQuestionIndex = get().currentQuestion + 1

          set({ currentQuestion: nextQuestionIndex })
        },
        fetchQuestions: (limit) => {
          const questions = questionsJson
            .sort(() => Math.random() - 0.5)
            .slice(0, limit)

          set({
            questions,
            stats: {
              correctAnswers: 0,
              totalQuestions: questions.length,
              wrongAnswers: 0
            },
            areAnswersEnabled: true,
            showResult: false,
            currentQuestion: 0
          })
        },
        selectAnswer(questionId: number, answerIndex: number) {
          const { questions } = get()

          const questionsCopy = structuredClone(questions)
          // get questionIndex
          const questionIndex = questionsCopy.findIndex(
            (question: Quest) => question.id === questionId
          )
          const currentQuestion = questionsCopy[questionIndex]
          // set userslectedanswer
          currentQuestion.userSelectedAnswer = answerIndex
          // set the isCorrectUserAnswer
          currentQuestion.isCorrectUserAnswer =
            answerIndex === currentQuestion.correctAnswer

          set({ questions: questionsCopy })
        },
        // we update the Stats object
        addCorrectAnswersToStats(points: number) {
          const { stats } = get()
          set({
            stats: {
              ...stats,
              correctAnswers: stats.correctAnswers + points
            }
          })
        },
        addWrongAnswersToStats(points: number) {
          const { stats } = get()
          set({
            stats: { ...stats, wrongAnswers: stats.wrongAnswers + points }
          })
        }
      }
    },
    {
      name: 'questionsState'
    }
  )
)
