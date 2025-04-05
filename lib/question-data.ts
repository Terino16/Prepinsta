export interface QuestionOption {
  id: string
  label: string
  text: string
}

export interface Question {
  id: string
  marks: string
  difficulty: string
  timeEstimate: string
  examDate: string
  officialQuestion: string
  guidingQuestionMarks: string
  guidingQuestionNumber: string
  guidingQuestionTopic: string
  guidingQuestionSubtopic: string
  guidingQuestion: string
  options: QuestionOption[]
  linkedTopic: string
  planningContent: string
  correctAnswer?: string
}

export const questionData: Question[] = [
  {
    id: "q1",
    marks: "10 marks",
    difficulty: "easy",
    timeEstimate: "25-30 mins",
    examDate: "Date of Exam: May 2022",
    officialQuestion: "Analyse how monetary policy can be used to overcome a recessionary gap.",
    guidingQuestionMarks: "5 marks",
    guidingQuestionNumber: "1.1",
    guidingQuestionTopic: "Structure of the Response",
    guidingQuestionSubtopic: "Deconstructing & Mapping",
    guidingQuestion: "What is the ideal structure for your essay response?",
    options: [
      {
        id: "a",
        label: "A",
        text: "Introduction, explanation of how monetary policy works and how these measures can help overcome a recessionary gap, including a diagram and an evaluation.",
      },
      {
        id: "b",
        label: "B",
        text: "Introduction, explanation of how supply-side policies work, examples of expansionary monetary policy measures, explanation of how these measures can help overcome a recessionary gap, and evaluation.",
      },
      {
        id: "c",
        label: "C",
        text: "Introduction, explanation of how supply-side policies work, examples of expansionary monetary policy measures, explanation of how these measures can help overcome a recessionary gap, and evaluation.",
      },
    ],
    linkedTopic: "Structure of the Response and doesn't affect your final mark",
    planningContent:
      "Definition of key terms, explanation of how monetary policy works and how these measures can help overcome a recessionary gap, including a diagram and an evaluation.",
    correctAnswer: "a",
  },
  {
    id: "q2",
    marks: "15 marks",
    difficulty: "medium",
    timeEstimate: "35-40 mins",
    examDate: "Date of Exam: Nov 2022",
    officialQuestion: "Evaluate the effectiveness of fiscal policy in addressing income inequality.",
    guidingQuestionMarks: "8 marks",
    guidingQuestionNumber: "2.1",
    guidingQuestionTopic: "Policy Analysis",
    guidingQuestionSubtopic: "Fiscal Measures",
    guidingQuestion: "Which fiscal policy tools are most effective for reducing income inequality?",
    options: [
      {
        id: "a",
        label: "A",
        text: "Progressive taxation systems combined with targeted welfare benefits and subsidies for essential services.",
      },
      {
        id: "b",
        label: "B",
        text: "Flat tax rates applied equally to all income levels with universal basic income programs.",
      },
      {
        id: "c",
        label: "C",
        text: "Corporate tax incentives focused on job creation in high-unemployment areas with minimal direct transfers.",
      },
    ],
    linkedTopic: "Fiscal Policy Effectiveness and Income Distribution",
    planningContent:
      "Analysis of progressive taxation, transfer payments, public services funding, and their combined impact on different income groups. Include limitations such as implementation challenges, potential economic distortions, and political constraints.",
    correctAnswer: "a",
  },
  {
    id: "q3",
    marks: "12 marks",
    difficulty: "hard",
    timeEstimate: "30-35 mins",
    examDate: "Date of Exam: May 2023",
    officialQuestion: "Discuss the extent to which supply-side policies can promote sustainable economic growth.",
    guidingQuestionMarks: "6 marks",
    guidingQuestionNumber: "3.1",
    guidingQuestionTopic: "Economic Growth",
    guidingQuestionSubtopic: "Supply-Side Measures",
    guidingQuestion: "What are the key limitations of supply-side policies in promoting sustainable growth?",
    options: [
      {
        id: "a",
        label: "A",
        text: "They often prioritize short-term productivity gains over long-term environmental sustainability and resource conservation.",
      },
      {
        id: "b",
        label: "B",
        text: "They are too expensive for governments to implement effectively and require excessive borrowing.",
      },
      {
        id: "c",
        label: "C",
        text: "They focus too heavily on government intervention rather than allowing market forces to determine optimal resource allocation.",
      },
    ],
    linkedTopic: "Sustainable Development and Economic Policy",
    planningContent:
      "Examine how supply-side policies affect productive capacity, labor markets, innovation, and resource allocation. Consider both market-based and interventionist approaches, their environmental impacts, and their ability to address structural economic challenges while maintaining ecological balance.",
    correctAnswer: "a",
  },
  {
    id: "q4",
    marks: "20 marks",
    difficulty: "medium",
    timeEstimate: "45-50 mins",
    examDate: "Date of Exam: Nov 2023",
    officialQuestion:
      "Evaluate the effectiveness of exchange rate policies in managing balance of payments issues for developing economies.",
    guidingQuestionMarks: "10 marks",
    guidingQuestionNumber: "4.1",
    guidingQuestionTopic: "International Economics",
    guidingQuestionSubtopic: "Exchange Rate Management",
    guidingQuestion:
      "Which exchange rate system is most appropriate for a developing economy with significant export dependence?",
    options: [
      {
        id: "a",
        label: "A",
        text: "A freely floating exchange rate that allows automatic adjustment to external shocks.",
      },
      {
        id: "b",
        label: "B",
        text: "A managed float that provides some stability while allowing gradual adjustment to fundamental economic changes.",
      },
      {
        id: "c",
        label: "C",
        text: "A fixed exchange rate pegged to a major trading partner's currency to provide maximum stability for exporters and importers.",
      },
    ],
    linkedTopic: "Exchange Rate Systems and Economic Development",
    planningContent:
      "Compare fixed, floating, and managed exchange rate systems in the context of developing economies. Analyze how each system affects trade competitiveness, inflation management, foreign investment, and economic sovereignty. Consider case studies of successful and unsuccessful exchange rate policies in similar economies.",
    correctAnswer: "b",
  },
]

