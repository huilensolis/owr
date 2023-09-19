import { create } from 'zustand'
import { type Quest } from '../interfaces/quest.interface'
import questionsJson from '../assets/data.json'
import { type Resume } from '../interfaces/resume'
import { Question } from '../components/lesson/question'
interface MyZustandState {
  questions: Quest[]
  currentQuestion: number
  fetchQuestions: (limit: number) => void
  selectAnwer: (questionId: number, answerIndex: number) => void
  resume: Resume
  jumpNextQuestion: () => void
  addCorrectAnswersToResume: (points: number) => void
  addWrongAnswersToResume: (points: number) => void
}

export const useQuestionStore = create<MyZustandState>((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    resume: {
      correctAnswers: 0,
      totalQuestions: Question.length,
      wrongAnswers: 0
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
        currentQuestion: 0
      })
    },
    selectAnwer(questionId: number, answerIndex: number) {
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
        resume: { ...resume, correctAnswers: resume.correctAnswers + points }
      })
    },
    addWrongAnswersToResume(points: number) {
      const { resume } = get()
      set({ resume: { ...resume, wrongAnswers: resume.wrongAnswers + points } })
    }
  }
})
