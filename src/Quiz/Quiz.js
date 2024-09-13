import React, { useState } from "react";
import { QUIZ_QUESTIONS as quizQuestions } from "./constants";

import "./Quiz.css";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedOption, setSelectedOption] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const questionCount = quizQuestions.length;

  const handleOnChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNext = () => {
    if (selectedOption === quizQuestions[currentQuestion - 1].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    currentQuestion === questionCount && setIsFinished(true);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleRestart = () => {
    setIsFinished(false);
    setCurrentQuestion(1);
    setScore(0);
    setSelectedOption("");
  };

  return (
    <div className="quiz-app">
      <h1>Quiz Application</h1>
      {!isFinished ? (
        <div>
          <h2>
            {`${currentQuestion})` +
              quizQuestions[currentQuestion - 1].question}
          </h2>

          <ul>
            {quizQuestions[currentQuestion - 1].options.map((option, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={option === selectedOption}
                    onChange={handleOnChange}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>

          <button onClick={handleNext} disabled={!selectedOption}>
            {currentQuestion === questionCount ? "Finish" : "Next"}
          </button>
        </div>
      ) : (
        <div>
          <h2>
            Your Score is: {score} / {questionCount}
          </h2>
          <button onClick={handleRestart}>Restart Quiz</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
