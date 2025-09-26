import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Lightbulb, Trophy, RefreshCw } from 'lucide-react';
import { useQuiz } from '@/hooks/useQuiz';
import { quizQuestions } from '@/data/quizData';

export default function QuizSection() {
  const {
    quizState,
    currentQuestion,
    selectedAnswer,
    showExplanation,
    progressPercentage,
    selectAnswer,
    nextQuestion,
    startNextBatch,
    resetQuiz,
    remainingQuestions,
    canStartNextBatch,
    questionsPerBatch
  } = useQuiz(quizQuestions);

  // Final results screen (after all batches)
  if (quizState.showResults) {
    const accuracyPercentage = quizState.totalQuestionsAnswered > 0 
      ? Math.round((quizState.totalCorrectAnswers / quizState.totalQuestionsAnswered) * 100)
      : 0;
    
    return (
      <section id="quiz" className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-3xl shadow-2xl">
            <CardContent className="p-8 text-center">
              <Trophy className="mx-auto text-shark-gold mb-4" size={64} />
              <h3 className="text-2xl font-serif font-bold text-shark-navy mb-4">Quiz Session Complete!</h3>
              <div className="mb-6 space-y-3">
                <p className="text-xl text-gray-600">
                  <span className="text-shark-blue font-bold">{quizState.totalCorrectAnswers} out of {quizState.totalQuestionsAnswered}</span> questions correct
                </p>
                <p className="text-lg text-gray-600">
                  Overall Accuracy: <span className="text-shark-blue font-bold">{accuracyPercentage}%</span>
                </p>
                <p className="text-sm text-gray-500">
                  Completed {quizState.currentBatch - 1} batch{quizState.currentBatch > 2 ? 'es' : ''} • {remainingQuestions} questions remaining
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button
                  onClick={resetQuiz}
                  className="bg-shark-blue hover:bg-shark-teal text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  data-testid="retake-quiz"
                >
                  Start New Quiz Session
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-shark-blue text-shark-blue hover:bg-shark-blue hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  data-testid="learn-more-terms"
                >
                  Learn More Terms
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Batch completion screen
  if (quizState.showBatchResults) {
    const batchAccuracy = Math.round((quizState.batchScore / questionsPerBatch) * 100);
    const overallAccuracy = quizState.totalQuestionsAnswered > 0 
      ? Math.round((quizState.totalCorrectAnswers / quizState.totalQuestionsAnswered) * 100)
      : 0;
    
    return (
      <section id="quiz" className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white rounded-3xl shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-shark-blue/10 rounded-full mb-4">
                  <Trophy className="text-shark-blue" size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-shark-navy mb-2">
                  Batch {quizState.currentBatch} Complete!
                </h3>
                <p className="text-gray-600">Great job! Here's how you performed:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-shark-navy mb-2">This Batch</h4>
                  <p className="text-2xl font-bold text-shark-blue mb-1">{quizState.batchScore}/{questionsPerBatch}</p>
                  <p className="text-sm text-gray-600">{batchAccuracy}% accuracy</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-shark-navy mb-2">Overall</h4>
                  <p className="text-2xl font-bold text-shark-blue mb-1">{quizState.totalCorrectAnswers}/{quizState.totalQuestionsAnswered}</p>
                  <p className="text-sm text-gray-600">{overallAccuracy}% accuracy</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-500 mb-4">
                  {remainingQuestions} questions remaining in the question bank
                </p>
                <div className="flex justify-center gap-4">
                  {canStartNextBatch ? (
                    <Button
                      onClick={startNextBatch}
                      className="bg-shark-blue hover:bg-shark-teal text-white px-8 py-3 rounded-full font-semibold transition-colors"
                      data-testid="next-batch"
                    >
                      Continue to Batch {quizState.currentBatch + 1}
                    </Button>
                  ) : (
                    <p className="text-shark-navy font-medium">Not enough questions for another full batch</p>
                  )}
                  <Button
                    onClick={resetQuiz}
                    variant="outline"
                    className="border-2 border-shark-blue text-shark-blue hover:bg-shark-blue hover:text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    data-testid="end-quiz"
                  >
                    End Quiz Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="quiz" className="gradient-hero py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Shark Tank Quiz
          </h2>
          <p className="text-xl text-gray-100">
            Test your understanding of business terminology
          </p>
        </div>

        <Card className="bg-white rounded-3xl shadow-2xl">
          <CardContent className="p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Batch {quizState.currentBatch} • Question {quizState.currentQuestion + 1} of {questionsPerBatch}</span>
                <span>
                  <span className="font-semibold">{quizState.batchScore}</span>/{questionsPerBatch} correct this batch
                </span>
              </div>
              <Progress value={progressPercentage} className="w-full h-2" />
              <div className="text-xs text-gray-500 mt-2 text-center">
                Overall: {quizState.totalCorrectAnswers}/{quizState.totalQuestionsAnswered} correct • {remainingQuestions} questions remaining
              </div>
            </div>

            {/* Quiz Question */}
            <div className="mb-8">
              <h3 className="text-2xl font-serif font-bold text-shark-navy mb-6">
                {currentQuestion.question}
              </h3>
              
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => {
                  let buttonClass = "quiz-option w-full p-4 text-left border-2 border-gray-200 rounded-lg transition-colors";
                  
                  if (showExplanation) {
                    if (index === currentQuestion.correctAnswer) {
                      buttonClass += " correct";
                    } else if (selectedAnswer === index && index !== currentQuestion.correctAnswer) {
                      buttonClass += " incorrect";
                    }
                  } else if (selectedAnswer === index) {
                    buttonClass += " border-shark-cyan bg-shark-cyan/10";
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !showExplanation && selectAnswer(index)}
                      className={buttonClass}
                      disabled={showExplanation}
                      data-testid={`quiz-option-${index}`}
                    >
                      {String.fromCharCode(65 + index)}. {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Explanation:</h4>
                <p className="text-gray-700">{currentQuestion.explanation}</p>
              </div>
            )}

            {/* Quiz Controls */}
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500 flex items-center">
                <Lightbulb className="mr-2" size={16} />
                <span>Hint: {currentQuestion.hint}</span>
              </div>
              <Button
                onClick={nextQuestion}
                disabled={selectedAnswer === null}
                className="bg-shark-blue hover:bg-shark-teal text-white px-6 py-3 rounded-full font-semibold transition-colors disabled:opacity-50"
                data-testid="next-question"
              >
                {quizState.currentQuestion === questionsPerBatch - 1 ? 'Complete Batch' : 'Next Question'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
