import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './PopupQuiz.scss';

function PopupQuiz() {
    const questions = [
        {
            id: 1,
            question: 'What is the capital of France?',
            answers: ['London', 'Paris', 'Berlin', 'Rome'],
            correctAnswer: 2,
        },
        {
            id: 2,
            question: 'Which planet is known as the Red Planet?',
            answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 1,
        },
        {
            id: 3,
            question: 'What is the chemical symbol for water?',
            answers: ['O2', 'CO2', 'H2O', 'NaCl'],
            correctAnswer: 3,
        },
        {
            id: 4,
            question: 'Which planet is known as the Red Planet?',
            answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 1,
        },
        {
            id: 5,
            question: 'What is the chemical symbol for water?',
            answers: ['O2', 'CO2', 'H2O', 'NaCl'],
            correctAnswer: 3,
        },
        {
            id: 6,
            question: 'Which planet is known as the Red Planet?',
            answers: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correctAnswer: 1,
        },
        {
            id: 7,
            question: 'What is the chemical symbol for water?',
            answers: ['O2', 'CO2', 'H2O', 'NaCl'],
            correctAnswer: 3,
        },
    ];

    const answerOptions = ['A', 'B', 'C', 'D'];
    const [selectedAnswers, setSelectedAnswers] = useState([]);

    const handleAnswerChange = (questionId, answerIndex) => {
        const updatedSelectedAnswers = selectedAnswers.map((selectedAnswer) => {
            if (selectedAnswer.questionId === questionId) {
                return { ...selectedAnswer, answerIndex };
            }
            return selectedAnswer;
        });

        // Nếu câu hỏi chưa có đáp án được chọn, thêm đáp án mới vào selectedAnswers
        if (!selectedAnswers.some((selectedAnswer) => selectedAnswer.questionId === questionId)) {
            updatedSelectedAnswers.push({ questionId, answerIndex });
        }

        setSelectedAnswers(updatedSelectedAnswers);
    };

    const handleSubmitQuiz = () => {
        // Xử lý logic khi nộp bài kiểm tra
        console.log(selectedAnswers);
    };

    return (
        <div className="popup-quiz">
            <div className="container">
                <AiOutlineCloseCircle className="icon" />
                <div className="time">Thời gian làm bài từ: 10h20 - 11h10</div>
                <div className="items">
                    {questions.map((question) => (
                        <div key={question.id}>
                            <h3>
                                {question.id}. {question.question}
                            </h3>
                            <ul>
                                {question.answers.map((answer, index) => (
                                    <li key={index}>
                                        <input
                                            type="radio"
                                            name={`question-${question.id}`}
                                            checked={selectedAnswers.some(
                                                (selectedAnswer) =>
                                                    selectedAnswer.questionId === question.id &&
                                                    selectedAnswer.answerIndex === index,
                                            )}
                                            onChange={() => handleAnswerChange(question.id, index)}
                                        />
                                        <span>{answerOptions[index]}</span> {answer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <button className="btn-add-question" onClick={handleSubmitQuiz}>
                    Nộp bài
                </button>
            </div>
        </div>
    );
}

export default PopupQuiz;
