import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  // Sample Quiz Questions
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "8", "9", "10"],
      answer: "8",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption("");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="text-center mb-4">Quiz Game</h1>

        {!showScore ? (
          <>
            <h4 className="mb-3">
              Question {currentQuestionIndex + 1}/{questions.length}
            </h4>
            <p className="mb-4">{questions[currentQuestionIndex].question}</p>
            <div className="list-group">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className={`list-group-item list-group-item-action ${
                    selectedOption === option ? "active" : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              className="btn btn-primary mt-3"
              onClick={handleNextQuestion}
              disabled={!selectedOption}
            >
              Next Question
            </button>
          </>
        ) : (
          <div className="text-center">
            <h2>Your Score: {score}/{questions.length}</h2>
            <button className="btn btn-primary mt-3" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
