import React, { useState } from 'react';
import { createCard } from '../../services/apiService';
import './CreateCard.css';

function CreateCard() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [tag, setTag] = useState('');

    const handleQuestionChange = (event) => {
        setQuestion(event.target.value);
    };

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTag(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createCard(question, answer, tag)
        .then(data => {
            if (data.id) {
                setResponseMessage('Card created id ' + data.id);
            } else {
                setResponseMessage('An error occurred');
            }
        });
    };

    return (
        <>
        <button className="button" onClick={() => window.location.href = '/'}>Back to Home</button>
        <form onSubmit={handleSubmit}>
            <label>
                Question:
                <input type="text" value={question} onChange={handleQuestionChange} required />
            </label>
            <label>
                Answer:
                <input type="text" value={answer} onChange={handleAnswerChange} required />
            </label>
            <label>
                Tag:
                <input type="text" value={tag} onChange={handleTagsChange} required />
            </label>
            <input type="submit" value="Create Card" />
        </form>
        < p > { responseMessage } </p>
        </>
    );
}

export default CreateCard;