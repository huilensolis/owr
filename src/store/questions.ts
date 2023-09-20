import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Quest } from '../interfaces/quest.interface'
import questionsJson from '../assets/data.json'
import { type Resume } from '../interfaces/resume'
import { Question } from '../components/lesson/question'
interface MyZustandState {
  questions: Quest[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
  selectAnswer: (questionId: number, answerIndex: number) => void
  resume: Resume
  areAnswersEnabled: boolean
  showResult: boolean
  setShowResult: (setter: boolean) => void
  setAnswersEnabled: (setter: boolean) => void
  jumpNextQuestion: () => void
  addCorrectAnswersToResume: (points: number) => void
  addWrongAnswersToResume: (points: number) => void
}

export const useQuestionStore = create<MyZustandState>()(
  persist(
    (set, get) => {
      return {
        questions: [],
        currentQuestion: 0,
        resume: {
          correctAnswers: 0,
          totalQuestions: Question.length,
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
            resume: {
              correctAnswers: 0,
              totalQuestions: limit,
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
        // we update the resume object
        addCorrectAnswersToResume(points: number) {
          const { resume } = get()
          set({
            resume: {
              ...resume,
              correctAnswers: resume.correctAnswers + points
            }
          })
        },
        addWrongAnswersToResume(points: number) {
          const { resume } = get()
          set({
            resume: { ...resume, wrongAnswers: resume.wrongAnswers + points }
          })
        }
      }
    },
    {
      name: 'questionsState'
    }
  )
)
