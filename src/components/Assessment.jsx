import React, { useState, useEffect } from 'react';
    import SingleChoice from './SingleChoice';
    import MultipleChoice from './MultipleChoice';
    import Ordering from './Ordering';

    const questions = [
      { type: 'single', question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
      { type: 'multiple', question: 'Which of these are fruits?', options: ['Apple', 'Carrot', 'Banana', 'Potato'], answer: ['Apple', 'Banana'] },
      { type: 'ordering', question: 'Order the planets by distance from the sun.', options: ['Earth', 'Mars', 'Venus', 'Mercury'], answer: ['Mercury', 'Venus', 'Earth', 'Mars'] },
      { type: 'single', question: 'Quelle est la ville qui n\'est pas en France ?', options: ['Toulouse', 'Berlin', 'Avon', 'Paris', 'Nantes'], answer: 'Berlin' },
      { type: 'ordering', question: 'Order the most spoken languages on the planet.', options: ['Chinois', 'Allemand', 'Anglais', 'Français', 'Portugais', 'Italien', 'Espagnol'], answer: ['Chinois', 'Anglais', 'Espagnol', 'Français', 'Allemand', 'Portugais', 'Italien'] }
    ];

    const Assessment = () => {
      const [currentQuestion, setCurrentQuestion] = useState(0);
      const [score, setScore] = useState(0);
      const [time, setTime] = useState(300); // 5 minutes in seconds
      const [timer, setTimer] = useState(null);
      const [isCompleted, setIsCompleted] = useState(false);

      useEffect(() => {
        const newTimer = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
        setTimer(newTimer);

        if (time <= 0) {
          setIsCompleted(true);
          clearInterval(newTimer);
        }

        return () => clearInterval(newTimer);
      }, [time]);

      const handleAnswer = (isCorrect) => {
        if (isCorrect) {
          setScore((prevScore) => prevScore + 1);
        }
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        } else {
          setIsCompleted(true);
          clearInterval(timer);
        }
      };

      const renderQuestion = () => {
        const question = questions[currentQuestion];
        switch (question.type) {
          case 'single':
            return <SingleChoice question={question} onAnswer={handleAnswer} />;
          case 'multiple':
            return <MultipleChoice question={question} onAnswer={handleAnswer} />;
          case 'ordering':
            return <Ordering question={question} onAnswer={handleAnswer} />;
          default:
            return null;
        }
      };

      return (
        <div className="container mt-5">
          <h2 className="mb-4">Assessment</h2>
          <div className="mb-4">Time remaining: {Math.floor(time / 60)}:{time % 60 < 10 ? '0' : ''}{time % 60} seconds</div>
          {isCompleted ? (
            <div>
              <h3>Assessment Completed!</h3>
              <p>Your score is {score}/{questions.length}</p>
              <p>Percentage: {((score / questions.length) * 100).toFixed(2)}%</p>
            </div>
          ) : (
            <>
              {renderQuestion()}
              <hr />
            </>
          )}
        </div>
      );
    };

    export default Assessment;
