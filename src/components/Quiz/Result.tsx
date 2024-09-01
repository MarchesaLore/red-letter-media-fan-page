import React from "react";

interface ResultProps {
  result: string;
}

const Result: React.FC<ResultProps> = ({ result }) => {
  return (
    <div>
      <h2>You are most like:</h2>
      <h1>{result}</h1>
      <p>
        Based on your answers, your personality and movie preferences are most similar to {result} from Red Letter Media!
      </p>
    </div>
  );
};

export default Result;
