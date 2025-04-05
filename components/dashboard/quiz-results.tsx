"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, RotateCcw } from "lucide-react"

interface QuizResultsProps {
  score: {
    correct: number
    incorrect: number
    unanswered: number
    total: number
    percentage: number
  }
  onRestart: () => void
}

export function QuizResults({ score, onRestart }: QuizResultsProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="text-center py-4">
        <CardTitle className="text-2xl">Quiz Results</CardTitle>
        <CardDescription>You&apos;ve completed all questions. Here&apos;s how you did:</CardDescription>
      </CardHeader>
      <CardContent className="px-6 py-2">
        <div className="flex justify-center mb-4">
          <div className="w-28 h-28 rounded-full border-8 border-blue-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{score.percentage}%</div>
              <div className="text-sm text-gray-500">Score</div>
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
              <span>Correct Answers</span>
            </div>
            <div className="font-medium">
              {score.correct} of {score.total}
            </div>
          </div>

          <div className="flex items-center justify-between p-2 bg-red-50 rounded-lg">
            <div className="flex items-center">
              <XCircle className="h-4 w-4 text-red-500 mr-2" />
              <span>Incorrect Answers</span>
            </div>
            <div className="font-medium">
              {score.incorrect} of {score.total}
            </div>
          </div>

          {score.unanswered > 0 && (
            <div className="flex items-center justify-between p-2 bg-yellow-50 rounded-lg">
              <div className="flex items-center">
                <AlertCircle className="h-4 w-4 text-yellow-500 mr-2" />
                <span>Unanswered Questions</span>
              </div>
              <div className="font-medium">
                {score.unanswered} of {score.total}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="py-4">
        <Button onClick={onRestart} className="w-full bg-blue-600 hover:bg-blue-700">
          <RotateCcw className="h-4 w-4 mr-2" />
          Restart Quiz
        </Button>
      </CardFooter>
    </Card>
  )
}

