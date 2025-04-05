"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { questionData } from "@/lib/question-data"
import { Timer } from "@/components/dashboard/timer"
import { useQuiz } from "@/lib/use-quiz"
import { QuizResults } from "@/components/dashboard/quiz-results"

export function QuizDashboard() {
  const [activeTab, setActiveTab] = useState<"planning" | "answer">("planning")

  const {
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
    totalQuestions,
  } = useQuiz({ questions: questionData })

  const selectedAnswer = selectedAnswers[currentQuestion.id]

  // If the quiz is completed, show the results
  if (isCompleted) {
    return (
      <div className="h-screen bg-gray-100 p-4 flex items-center justify-center">
        <QuizResults score={calculateScore()} onRestart={resetQuiz} />
      </div>
    )
  }

  return (
    <div className="h-screen bg-gray-100 flex flex-col overflow-hidden">
      <div className="flex-1 p-2 md:p-4 flex items-center justify-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-sm flex flex-col h-full max-h-[calc(100vh-2rem)]">
          <div className="flex-1 p-3 md:p-4 lg:p-6 flex flex-col overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 flex-1 overflow-hidden">
              {/* Left Column */}
              <div className="flex flex-col space-y-3 md:space-y-4 overflow-hidden">
                {/* Official Question Card */}
                <Card className="bg-gray-50">
                  <CardContent className="p-3 md:p-4">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {currentQuestion.marks} marks
                      </Badge>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        {currentQuestion.difficulty}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {currentQuestion.timeEstimate}
                      </Badge>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        {currentQuestion.examDate}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500 font-medium mb-1">OFFICIAL QUESTION</div>
                    <div className="text-lg font-medium">{currentQuestion.officialQuestion}</div>
                  </CardContent>
                </Card>

                {/* Guiding Question Card */}
                <Card className="bg-blue-50 flex-1 flex flex-col overflow-hidden">
                  <CardContent className="p-3 md:p-4 flex-1 flex flex-col overflow-hidden">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {currentQuestion.guidingQuestionMarks} marks
                      </Badge>
                      <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                        {currentQuestion.guidingQuestionTopic}
                      </Badge>
                      <Badge variant="outline" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        {currentQuestion.guidingQuestionSubtopic}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500 font-medium mb-1">
                      GUIDING QUESTION PROMPT {currentQuestion.guidingQuestionNumber}
                    </div>
                    <div className="text-lg font-medium mb-2 md:mb-3">{currentQuestion.guidingQuestion}</div>

                    {/* Answer Options - with overflow handling */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 flex-1 overflow-y-auto">
                      {currentQuestion.options.map((option) => (
                        <div
                          key={option.id}
                          className={`p-3 rounded-lg cursor-pointer transition-colors ${
                            selectedAnswer === option.id
                              ? "bg-blue-600 text-white"
                              : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                          }`}
                          onClick={() => selectAnswer(currentQuestion.id, option.id)}
                        >
                          <div className="font-bold mb-1">{option.label}.</div>
                          <div className="text-sm">{option.text}</div>
                        </div>
                      ))}
                    </div>

                    {/* Question Navigation */}
                    <div className="text-xs text-gray-600 mt-2">
                      This Question is Linked to Topic: {currentQuestion.linkedTopic}
                    </div>

                    <div className="flex justify-between mt-2 md:mt-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={goToPreviousQuestion}
                        disabled={currentQuestionIndex === 0}
                      >
                        Previous Question
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700" size="sm" onClick={goToNextQuestion}>
                        {currentQuestionIndex === totalQuestions - 1 ? "Finish Quiz" : "Submit Question"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="flex flex-col space-y-3 md:space-y-4 overflow-hidden">
                <Tabs
                  defaultValue="planning"
                  value={activeTab}
                  onValueChange={(value) => setActiveTab(value as "planning" | "answer")}
                  className="w-full flex-1 flex flex-col overflow-hidden"
                >
                  <TabsList className="hidden">
                    <TabsTrigger value="planning">Planning</TabsTrigger>
                    <TabsTrigger value="answer">Answer</TabsTrigger>
                  </TabsList>

                  <TabsContent value="planning" className="m-0 flex-1 flex flex-col overflow-hidden">
                    <Card className="bg-blue-50 flex-1 flex flex-col overflow-hidden">
                      <CardHeader className="pb-0 pt-3 px-3 md:px-4">
                        <CardTitle className="text-lg">PLANNING SCREEN</CardTitle>
                        <div className="text-xl font-medium">Structure of the essay response</div>
                      </CardHeader>
                      <CardContent className="p-3 md:p-4 flex-1 overflow-y-auto">
                        <p className="text-gray-700">{currentQuestion.planningContent}</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="answer" className="m-0 flex-1 flex flex-col overflow-hidden">
                    <Card className="flex-1 flex flex-col overflow-hidden">
                      <CardHeader className="pb-0 pt-3 px-3 md:px-4">
                        <CardTitle className="text-lg">ANSWER SCREEN</CardTitle>
                      </CardHeader>
                      <CardContent className="p-3 md:p-4 flex-1 flex flex-col overflow-hidden">
                        <textarea
                          className="w-full flex-1 p-2 border rounded-md resize-none"
                          placeholder="Type your answer here..."
                        />
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant={activeTab === "planning" ? "default" : "outline"}
                      onClick={() => setActiveTab("planning")}
                      className={`${activeTab === "planning" ? "bg-blue-600" : ""} text-xs md:text-sm py-1 h-auto`}
                      size="sm"
                    >
                      Planning
                    </Button>
                    <Button
                      variant={activeTab === "answer" ? "default" : "outline"}
                      onClick={() => setActiveTab("answer")}
                      className={`${activeTab === "answer" ? "bg-blue-600" : ""} text-xs md:text-sm py-1 h-auto`}
                      size="sm"
                    >
                      Answer
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="mt-3 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
              <div className="flex items-center space-x-2 text-sm">
                <div className="font-medium">IB DP SL & HL ECONOMICS</div>
                <div className="font-bold">Monetary Policy</div>
              </div>

              <div className="flex items-center space-x-1 md:space-x-2 order-3 md:order-2">
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronLeft className="h-3 w-3" />
                </Button>
                {Array.from({ length: Math.min(5, totalQuestions) }).map((_, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="sm"
                    className={`px-2 h-7 text-xs ${i === currentQuestionIndex ? "bg-blue-100" : ""}`}
                    onClick={() => goToQuestion(i)}
                  >
                    Q{i + 1}
                  </Button>
                ))}
                {totalQuestions > 5 && (
                  <>
                    <Button variant="outline" size="sm" className="px-2 h-7 text-xs">
                      ...
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="px-2 h-7 text-xs"
                      onClick={() => goToQuestion(totalQuestions - 1)}
                    >
                      Q{totalQuestions}
                    </Button>
                  </>
                )}
                <Button variant="outline" size="icon" className="h-7 w-7">
                  <ChevronRight className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex items-center space-x-2 order-2 md:order-3">
                <Button className="bg-blue-600 hover:bg-blue-700 h-7 text-xs" size="sm" onClick={toggleTimer}>
                  {isTimerRunning ? (
                    <>
                      <Pause className="h-3 w-3 mr-1" />
                      Pause
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3 mr-1" />
                      Start
                    </>
                  )}
                </Button>
                <div className="border rounded-md px-3 py-1 font-mono text-sm">
                  <Timer isRunning={isTimerRunning} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

