import React, { useState } from 'react';

function CreateCard() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleSubmit = (event) => {
        alert('question sent');
        event.preventDefault();
        // TODO
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Question:
                <input type="text" value={question} onChange={handleQuestionChange} />
            </label>
            <label>
                Answer:
                <input type="text" value={answer} onChange={handleAnswerChange} />
            </label>
            <input type="submit" value="Create Card" />
        </form>
    );
}

export default CreateCard;