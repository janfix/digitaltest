import React, { useState } from 'react';

    const MultipleChoice = ({ question, onAnswer }) => {
      const [selectedOptions, setSelectedOptions] = useState([]);

      const handleOptionChange = (option) => {
        setSelectedOptions((prevOptions) =>
          prevOptions.includes(option)
            ? prevOptions.filter((opt) => opt !== option)
            : [...prevOptions, option]
        );
      };

      const handleSubmit = () => {
        const isCorrect = selectedOptions.length === question.answer.length && selectedOptions.every((option) => question.answer.includes(option));
        onAnswer(isCorrect);
      };

      return (
        <div>
          <h3 className="mb-4">{question.question}</h3>
          {question.options.map((option) => (
            <div
              key={option}
              className="mb-2 p-2 bg-light rounded"
              style={{ cursor: 'pointer', backgroundColor: selectedOptions.includes(option) ? 'lightpink' : '', border: selectedOptions.includes(option) ? '2px solid grey' : '' }}
              onClick={() => handleOptionChange(option)}
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

    export default MultipleChoice;
