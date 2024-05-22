import { useState } from 'react';
import quizdata from '@/data/mcq';

export default function Quiz() {
  const [selectedOption, setSelectedOption] = useState({});
  let [score , setScore] = useState(0);

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOption({
      ...selectedOption,
      [questionId]: optionId,
    });
  };

  const calculateScore = () => {
      let score = 0;
      quizdata.questions.forEach((question) => {
          const selectedOptionId = selectedOption[question.id];
          const correctOption = question.options.find(
              (option) => option.is_right
              );
      if (selectedOptionId === correctOption.id) {
        setScore(score)
        score++;
        setScore(score);
      }
    });
    return score;
  };

  return (
    <>
      <h1 className='main-heading'>{quizdata.quiz_text}</h1>
      {quizdata.questions.map((question) => (
        <div key={question.id}>
          <h3>{question.ques_text}</h3>
          <select
            value={selectedOption[question.id] || ''}
            onChange={(e) =>
              handleOptionSelect(question.id, parseInt(e.target.value))
            }
          >
            <option value="">Select an option</option>
            {question.options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button onClick={() => calculateScore()}>
        Submit Quiz
      </button>
      <h1>Your Score : {score}</h1>
    </>
  );
}
