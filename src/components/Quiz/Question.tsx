import React from "react";

interface QuestionProps {
  question: {
    id: number;
    question: string;
    options: { answer: string; character: string }[];
  };
  onAnswer: (questionId: number, selectedOption: { answer: string; character: string }) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswer(question.id, option)}>{option.answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
