import React, { useState } from "react";
import styles from "./Home.module.scss";
import Quiz from "../../components/Quiz/Quiz"; // Make sure the path to Quiz is correct

function Home() {
  const [showQuiz, setShowQuiz] = useState(false);

  // Function to start the quiz
  const startQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <div className={styles.homeContainer}>
      <p>Are you familiar with Red Letter Media? Find out which character you are!</p>
      {!showQuiz ? (
        <button onClick={startQuiz} className={styles.startButton}>
          Take the Test
        </button>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default Home;
