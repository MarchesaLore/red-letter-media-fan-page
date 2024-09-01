import React, { useState } from "react";
import styles from "./Quiz.module.scss";

function Quiz() {
  const [step, setStep] = useState(0);
  const [characterPoints, setCharacterPoints] = useState({
    Mike: 0,
    Jay: 0,
    Rich: 0,
    "Mr. Plinkett": 0,
  });

  const questions = [
    {
      id: 1,
      question: "What’s your ideal movie night?",
      options: [
        { answer: "Watching a classic film and analyzing its themes.", character: "Mike" },
        { answer: "Finding a new horror movie to discuss with friends.", character: "Jay" },
        { answer: "Watching the worst, goofiest movie you can find for laughs.", character: "Rich" },
        { answer: "Ranting about plot holes and poor writing in a blockbuster.", character: "Mr. Plinkett" },
      ],
    },
    {
      id: 2,
      question: "What genre do you usually enjoy?",
      options: [
        { answer: "Action", character: "Mike" },
        { answer: "Romance", character: "Jay" },
        { answer: "Comedy", character: "Rich" },
        { answer: "Horror", character: "Jay" },
        { answer: "Sci-Fi", character: "Mr. Plinkett" },
        { answer: "Drama", character: "Mike" },
      ],
    },
    {
      id: 3,
      question: "How do you feel about complex storylines?",
      options: [
        { answer: "Love them! The more twists, the better.", character: "Mr. Plinkett" },
        { answer: "I prefer something straightforward.", character: "Rich" },
        { answer: "A mix of both is great.", character: "Mike" },
      ],
    },
    {
      id: 4,
      question: "What type of ending do you prefer?",
      options: [
        { answer: "Happy Ending", character: "Rich" },
        { answer: "Open-ended/Thought-provoking", character: "Mr. Plinkett" },
        { answer: "Sad but meaningful", character: "Jay" },
        { answer: "A good twist at the end", character: "Mike" },
      ],
    },
  ];

  const handleAnswer = (questionId: number, selectedOption: { answer: string; character: string }) => {
    setCharacterPoints((prevPoints) => ({
      ...prevPoints,
      [selectedOption.character]: prevPoints[selectedOption.character] + 1,
    }));
    setStep(step + 1);
  };

  const determineResult = () => {
    const maxPoints = Math.max(...Object.values(characterPoints));
    const topCharacter = Object.keys(characterPoints).find(
      (character) => characterPoints[character] === maxPoints
    );
    return topCharacter || "We couldn't determine your character!";
  };

  if (step >= questions.length) {
    return (
      <div className={styles.resultContainer}>
        <h2 className={styles.resultTitle}>You are most like:</h2>
        <p className={styles.resultDescription}>{determineResult()}</p>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer}>
      <h2 className={styles.questionText}>{questions[step].question}</h2>
      <ul className={styles.optionsList}>
        {questions[step].options.map((option, index) => (
          <li key={index} className={styles.optionItem}>
            <button onClick={() => handleAnswer(questions[step].id, option)} className={styles.optionButton}>
              {option.answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quiz;
