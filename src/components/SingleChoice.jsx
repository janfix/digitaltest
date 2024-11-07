import React, { useState } from 'react';

    const SingleChoice = ({ question, onAnswer }) => {
      const [selectedOption, setSelectedOption] = useState('');

      const handleSubmit = () => {
        onAnswer(selectedOption === question.answer);
      };

      return (
        <div>
          <h3 className="mb-4">{question.question}</h3>
          {question.options.map((option) => (
            <div
              key={option}
              className="mb-2 p-2 bg-light rounded"
              style={{ cursor: 'pointer', backgroundColor: selectedOption === option ? 'lightpink' : '', border: selectedOption === option ? '2px solid grey' : '' }}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </div>
          ))}
          <button onClick={handleSubmit} className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      );
    };

    export default SingleChoice;
