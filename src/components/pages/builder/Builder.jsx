import { React, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import './Builder.css';

function QuestionTemplate() {
    const [questionText, setQuestionText] = useState("");
    const [answerText, setAnswerText] = useState("");
    const [choices, setChoices] = useState([]);

    function updateQuestionTextHandler(event) {
        setQuestionText(event.target.value);
    }

    function updateAnswerTextHandler(event) {
        setAnswerText(event.target.value);
    }

    function addChoice(choice) {
        setChoices([...choices, { ...choice, id: choices.length + 1 }]);
    }

    return (
        <div className="question-template">
            <div className="question-text">
         
                <Form.Label htmlFor="inputQuestionText" className="title title-text">Введите вопрос <Form.Control
                    as="textarea"
                    id="inputQuestionText"
                    value={questionText}
                    onChange={updateQuestionTextHandler}
                /></Form.Label>
                
                <Form.Label  className="title title-text">Варианты ответов
                <Form.Control
                    as="textarea"
                    id="inputQuestionText"
                    value={answerText}
                    onChange={updateAnswerTextHandler}
                /></Form.Label>

            </div>

            {choices.map((choice, index) => (
                <div key={choice.id} className="choice">
                    <Form.Control
                        as="input"
                        id={`choiceText-${choice.id}`}
                        value={`${index + 1}. ${choice.value}`}
                    />
                </div>
            ))}

            <Button variant="outline-dark" size="sm" className='buttonAddQuestion' onClick={() => {
                addChoice({ value: answerText, key: choices.length + 1 });
            }}>
                <AddCircleOutlineIcon /> Добавить ответ
            </Button>

            <Button variant="outline-dark" size="sm" className="buttonTransitionToQuestion" onClick={() => {
                
            }}>
                <ThreeSixtyIcon /> Готово
            </Button>
        </div>
    );
}


export default function Builder() {
    return (
        <div>
            <QuestionTemplate />
            {/* <Button variant="outline-dark" size="lg" className='buttonAddQuestion'>
            <AddCircleOutlineIcon /> Добавить вопрос
        </Button> */}
        </div>
    )
} 