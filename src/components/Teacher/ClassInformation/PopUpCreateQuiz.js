import { AiOutlineCloseCircle } from 'react-icons/ai';
import './PopUpCreateQuiz.scss';
import { useState } from 'react';

function PopUpCreateQuiz() {
    // thời gian làm bài
    const [timeStart, setTimeStart] = useState(10);
    const [timeEnd, setTimeEnd] = useState(10);

    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [newAnswers, setNewAnswers] = useState(['', '', '', '']);
    const [newCorrectAnswer, setNewCorrectAnswer] = useState(0);

    const handleAddQuestion = () => {
        const question = {
            id: questions.length + 1,
            question: newQuestion,
            answers: newAnswers,
            correctAnswer: newCorrectAnswer,
        };

        setQuestions([...questions, question]);
        setNewQuestion('');
        setNewAnswers(['', '', '', '']);
        setNewCorrectAnswer(0);
    };

    const handleAnswerChange = (index, answer) => {
        const updatedAnswers = [...newAnswers];
        updatedAnswers[index] = answer;
        setNewAnswers(updatedAnswers);
    };

    const handleAddQuiz = () => {
        console.log(questions);
    };

    return (
        <>
            <div className="popup-create-quiz">
                <div className="container">
                    <AiOutlineCloseCircle className="icon" />
                    <div className="time">
                        <div className="text-time">
                            Thời gian từ:{' '}
                            <input type="time" value={timeStart} onChange={(e) => setTimeStart(e.target.value)} /> đến{' '}
                            <input type="time" value={timeEnd} onChange={(e) => setTimeEnd(e.target.value)} />
                        </div>
                    </div>
                    <h1>Tạo danh sách câu hỏi</h1>

                    <div className="question">
                        <label>Câu hỏi:</label>
                        <input type="text" value={newQuestion} onChange={(e) => setNewQuestion(e.target.value)} />
                    </div>
                    <div className="answer">
                        <label>Đáp án A:</label>
                        <input
                            type="text"
                            value={newAnswers[0]}
                            onChange={(e) => handleAnswerChange(0, e.target.value)}
                        />
                    </div>
                    <div className="answer">
                        <label>Đáp án B:</label>
                        <input
                            type="text"
                            value={newAnswers[1]}
                            onChange={(e) => handleAnswerChange(1, e.target.value)}
                        />
                    </div>
                    <div className="answer">
                        <label>Đáp án C:</label>
                        <input
                            type="text"
                            value={newAnswers[2]}
                            onChange={(e) => handleAnswerChange(2, e.target.value)}
                        />
                    </div>
                    <div className="answer">
                        <label>Đáp án D:</label>
                        <input
                            type="text"
                            value={newAnswers[3]}
                            onChange={(e) => handleAnswerChange(3, e.target.value)}
                        />
                    </div>
                    <div className="answer-correct">
                        <label>Đáp án đúng:</label>
                        <select
                            value={newCorrectAnswer}
                            onChange={(e) => setNewCorrectAnswer(parseInt(e.target.value))}
                        >
                            <option value={0}>A</option>
                            <option value={1}>B</option>
                            <option value={2}>C</option>
                            <option value={3}>D</option>
                        </select>
                    </div>

                    <button onClick={handleAddQuestion} className="btn-add-question">
                        Thêm câu hỏi
                    </button>

                    <h2>Danh sách câu hỏi:</h2>
                    <ul className="list-items">
                        {questions.map((question, index) => (
                            <li key={index}>
                                <h3>
                                    <span>{index + 1}.</span> {question.question}
                                </h3>
                                <ul>
                                    {question.answers.map((answer, index) => (
                                        <li key={index}>
                                            {String.fromCharCode(65 + index)}: {answer}
                                        </li>
                                    ))}
                                </ul>
                                <p>Đáp án đúng: {String.fromCharCode(65 + question.correctAnswer)}</p>
                            </li>
                        ))}
                    </ul>

                    <button onClick={handleAddQuiz} className="btn-add-question">
                        Thêm câu hỏi
                    </button>
                </div>
            </div>
        </>
    );
}

export default PopUpCreateQuiz;
