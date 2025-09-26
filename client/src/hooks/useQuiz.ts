import { useState, useCallback, useMemo } from 'react';
import { QuizState, QuizQuestion } from '../types';

interface BatchQuizState extends QuizState {
  currentBatch: number;
  batchScore: number;
  totalBatches: number;
  showBatchResults: boolean;
  usedQuestionIds: string[];
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
}

const QUESTIONS_PER_BATCH = 5;

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const useQuiz = (allQuestions: QuizQuestion[]) => {
  const [quizState, setQuizState] = useState<BatchQuizState>({
    currentQuestion: 0,
    score: 0,
    answers: [],
    isComplete: false,
    showResults: false,
    currentBatch: 1,
    batchScore: 0,
    totalBatches: Math.ceil(allQuestions.length / QUESTIONS_PER_BATCH),
    showBatchResults: false,
    usedQuestionIds: [],
    totalQuestionsAnswered: 0,
    totalCorrectAnswers: 0
  });

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Get current batch questions (5 random questions not yet used)
  const currentBatchQuestions = useMemo(() => {
    const usedIds = quizState.usedQuestionIds || [];
    const availableQuestions = allQuestions.filter(q => !usedIds.includes(q.id));
    const shuffledAvailable = shuffleArray(availableQuestions);
    return shuffledAvailable.slice(0, QUESTIONS_PER_BATCH);
  }, [allQuestions, quizState.usedQuestionIds]);

  const currentQuestion = currentBatchQuestions[quizState.currentQuestion];

  const selectAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
  }, []);

  const nextQuestion = useCallback(() => {
    if (selectedAnswer === null || !currentQuestion) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newBatchScore = isCorrect ? quizState.batchScore + 1 : quizState.batchScore;
    const newTotalCorrect = isCorrect ? quizState.totalCorrectAnswers + 1 : quizState.totalCorrectAnswers;
    const newAnswers = [...quizState.answers, selectedAnswer];
    
    // Check if this is the last question in the current batch
    if (quizState.currentQuestion < QUESTIONS_PER_BATCH - 1) {
      // Move to next question in batch
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1,
        batchScore: newBatchScore,
        totalCorrectAnswers: newTotalCorrect,
        totalQuestionsAnswered: prev.totalQuestionsAnswered + 1,
        answers: newAnswers
      }));
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      // End of batch - show batch results
      const newUsedIds = [...quizState.usedQuestionIds, ...currentBatchQuestions.map(q => q.id)];
      const totalAnswered = quizState.totalQuestionsAnswered + 1;
      
      setQuizState(prev => ({
        ...prev,
        batchScore: newBatchScore,
        totalCorrectAnswers: newTotalCorrect,
        totalQuestionsAnswered: totalAnswered,
        answers: newAnswers,
        showBatchResults: true,
        usedQuestionIds: newUsedIds
      }));
    }
  }, [selectedAnswer, currentQuestion, quizState, currentBatchQuestions]);

  const startNextBatch = useCallback(() => {
    // Check if there are enough questions for another batch
    const usedIds = quizState.usedQuestionIds || [];
    const remainingQuestions = allQuestions.length - usedIds.length;
    
    if (remainingQuestions < QUESTIONS_PER_BATCH) {
      // End quiz if not enough questions remaining
      setQuizState(prev => ({
        ...prev,
        isComplete: true,
        showResults: true,
        showBatchResults: false
      }));
    } else {
      // Start next batch
      setQuizState(prev => ({
        ...prev,
        currentQuestion: 0,
        currentBatch: prev.currentBatch + 1,
        batchScore: 0,
        showBatchResults: false,
        answers: []
      }));
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  }, [allQuestions.length, quizState.usedQuestionIds]);

  const resetQuiz = useCallback(() => {
    setQuizState({
      currentQuestion: 0,
      score: 0,
      answers: [],
      isComplete: false,
      showResults: false,
      currentBatch: 1,
      batchScore: 0,
      totalBatches: Math.ceil(allQuestions.length / QUESTIONS_PER_BATCH),
      showBatchResults: false,
      usedQuestionIds: [],
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0
    });
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [allQuestions.length]);

  const progressPercentage = ((quizState.currentQuestion + 1) / QUESTIONS_PER_BATCH) * 100;
  const usedIds = quizState.usedQuestionIds || [];
  const remainingQuestions = allQuestions.length - usedIds.length;
  const canStartNextBatch = remainingQuestions >= QUESTIONS_PER_BATCH;

  return {
    quizState,
    currentQuestion,
    selectedAnswer,
    showExplanation,
    progressPercentage,
    selectAnswer,
    nextQuestion,
    startNextBatch,
    resetQuiz,
    currentBatchQuestions,
    remainingQuestions,
    canStartNextBatch,
    questionsPerBatch: QUESTIONS_PER_BATCH
  };
};
