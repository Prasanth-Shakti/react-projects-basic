import { useState } from "react";
import questions from "./questions";
import Question from "./Question";
import Score from "./Score";

export default function QuizApp() {
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[current].answer) {
      setScore((prev) => prev + 1);
    }

    const nextQuestion = current + 1;
    if (nextQuestion < questions.length) {
      setCurrent(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleReset = () => {
    setScore(0);
    setCurrent(0);
    setShowScore(false);
  };

  return (
    <div style={{ marginLeft: 50 }}>
      <h1>Fun Quiz</h1>
      {showScore ? (
        <Score
          score={score}
          total={questions.length}
          handleReset={handleReset}
        />
      ) : (
        <Question
          question={questions[current]}
          handleAnswer={handleAnswer}
          current={current + 1}
          total={questions.length}
        />
      )}
    </div>
  );
}
