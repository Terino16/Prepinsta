"use client"

import { useState } from "react"
import type { Question } from "@/lib/question-data"

interface UseQuizProps {
  questions: Question[]
}

export function useQuiz({ questions }: UseQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({})
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]

  const selectAnswer = (questionId: string, answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }))
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // If this is the last question, mark the quiz as completed
      setIsCompleted(true)
      setIsTimerRunning(false)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const goToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index)
    }
  }

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning)
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setIsTimerRunning(false)
    setIsCompleted(false)
  }

  // Calculate score
  const calculateScore = () => {
    let correct = 0
    let incorrect = 0
    let unanswered = 0

    questions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.id]
      if (!selectedAnswer) {
        unanswered++
      } else if (selectedAnswer === question.correctAnswer) {
        correct++
      } else {
        incorrect++
      }
    })

    return {
      correct,
      incorrect,
      unanswered,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    }
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswers,
    isTimerRunning,
    isCompleted,
    selectAnswer,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    toggleTimer,
    resetQuiz,
    calculateScore,
    totalQuestions: questions.length,
  }
}

