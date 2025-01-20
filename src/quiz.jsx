import { useState, useEffect } from "react";
import Style from '../src/quiz.module.css';

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuizQuestions();
  }, []);

  const fetchQuizQuestions = async () => {
    while (true) {
      try {
        const response = await fetch(
          'https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple'
        );
        const data = await response.json();
        console.log("DATA",data);
        
        if (data.response_code === 0) {
          const formattedQuestions = data.results.map(question => ({
            question: question.question,
            options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
            correctAnswer: question.correct_answer
          }));
          setQuestions(formattedQuestions);
          setLoading(false);
          break; // Exit the loop when successful
        }
        // If unsuccessful, the loop will continue
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second before retrying
      } catch (err) {
        // If there's an error, wait a second and try again
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const reset = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResult(false);
    setLoading(true);
    fetchQuizQuestions();
  };

  if (loading) {
    return (
      <div className={Style.body}>
        <h1 className={Style.head}>Loading Quiz...</h1>
        <div className={Style.loader}></div>
      </div>
    );
  }

  return (
    <div className={Style.body}>
      <h1 className={Style.head}>Today Quiz</h1>
      {showResult ? (
        <div className={Style.Score}>
          <h2>Your Score is : {score} / {questions.length}</h2>
          <p>{score >= 8 ? "Great Work" : "Keep Practicing!"}</p>
          <button onClick={reset}>New Quiz</button>
        </div>
      ) : (
        <div>
          <h2 className={Style.headquestion}>
            Question {currentQuestion + 1} / {questions.length}
          </h2>
          <div className={Style.questionsContainer}>
          <p className={Style.questions} 
             dangerouslySetInnerHTML={{ __html: questions[currentQuestion].question }}>
          </p>
          <div className={Style.optionContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                dangerouslySetInnerHTML={{ __html: option }}
              >
              </button>
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;