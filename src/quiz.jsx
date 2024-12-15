import React, { useState } from "react";
import Style from '../src/quiz.module.css'
const QuizPage = () => {
  const questions = [
    {
      question: "What comes next in the sequence: 1, 4, 9, 16, 25?",
      options: ["36", "30", "40", "49"],
      correctAnswer: "36",
    },
    {
      question: "If P is the mother of Q, Q is the sister of R, and R is the father of S, how is P related to S?",
      options: ["Grandmother", "Mother", "Aunt", "Sister"],
      correctAnswer: "Grandmother",
    },
    {
      question: "Find the odd one out: 2, 4, 8, 10, 16.",
      options: ["2", "4", "8", "10"],
      correctAnswer: "10",
    },
    {
      question: "Which word does NOT belong to the group: Rose, Lotus, Lily, Orange?",
      options: ["Rose", "Lotus", "Lily", "Orange"],
      correctAnswer: "Orange",
    },
    {
      question: "If in a certain code, BOOK is written as CPLL, how is PEN written?",
      options: ["QFO", "QEO", "QDN", "RFO"],
      correctAnswer: "QFO",
    },
    {
      question: "What comes next in the sequence: 5, 10, 20, 40, 80?",
      options: ["120", "160", "100", "200"],
      correctAnswer: "160",
    },
    {
      question: "If A is the son of B, B is the brother of C, and C is the father of D, how is A related to D?",
      options: ["Cousin", "Uncle", "Nephew", "Brother"],
      correctAnswer: "Cousin",
    },
    {
      question: "Find the odd one out: Square, Triangle, Rectangle, Circle.",
      options: ["Square", "Triangle", "Rectangle", "Circle"],
      correctAnswer: "Circle",
    },
    {
      question: "Which word does NOT belong to the group: Cat, Dog, Rabbit, Chair?",
      options: ["Cat", "Dog", "Rabbit", "Chair"],
      correctAnswer: "Chair",
    },
    {
      question: "If in a certain code, ZEBRA is written as AFCSB, how is LION written?",
      options: ["MJPO", "KIPM", "MJPM", "KHPM"],
      correctAnswer: "MJPO",
    },
  ];
  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedoption) =>{

    if(selectedoption === questions[currentQuestion].correctAnswer )
    {
      setScore(score+1);
    }
    const nextQuestion = currentQuestion+1;
    if(nextQuestion<questions.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else
    {
      setShowResult(true);
    }

  };

  const reset = () => {
      setScore(0);
      setCurrentQuestion(0);
      setShowResult(false);
  };
 
  return (
       <div className={Style.body}>
        <h1 className={Style.head}>Today Quiz</h1>
        {showResult? (
          <div className={Style.Score}>
            <h2>Your Score is : {score} / {questions.length}</h2>
            <p>{score>=8? "Great Work" : "Keep Practicing !"} </p>
            <button onClick={reset}>Retry Quiz</button>
          </div>
        ):
        <div>
          <h2 className={Style.headquestion}>Question {currentQuestion+1} / {questions.length}</h2>
          <p className={Style.questions}>{questions[currentQuestion].question}</p>
          <div className={Style.optionContainer}>
            {questions[currentQuestion].options.map((option,index)=>(
              <button key={index}
              onClick={()=>handleAnswer(option)}
              >
               {option}
              </button>
            ))}
          </div>
        </div>
        }
       </div>
  );
};



export default QuizPage;
