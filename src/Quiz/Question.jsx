export default function Question({ question, handleAnswer, current, total }) {
  return (
    <div>
      <h2>
        Question {current}/{total}
      </h2>
      <h3>Question: {question.question}</h3>
      {question.options.map((option) => (
        <button
          style={{ margin: 5 }}
          key={option}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
