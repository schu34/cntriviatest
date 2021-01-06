import React, { useState } from "react";
import "../css/App.css";
// import components here

/* 
Lesson 1
- create a react component that accepts props
  - write JSX
  - render a nested component

Lesson 2
- pass a function as a prop
- register a click event 

Lesson 3
- use and update state
- implement useEffect
*/

/**
 * DON'T
 * - DESTRUCTURE IN THE FUNCTION SIGNATURE
 * - TEACH SHORT CIRCUITS, USE TERNARY EVERY TIME
 * DO
 * EXPLAIN THE PARTS OF A FUNCTION
 * - SIGNATURE
 * - BODY
 * - ARROW (FOR ARROW FUNCTIONS)
 */

/**
 * question
 * answer
 * app
 */

const example = {
  questions: [
    {
      question: {
        choices: ["48", "13", "52", "50"],
        correct_choice_index: 3,
        question_text: "How many states are in the United States?",
        user_id: "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
      }
    },
    {
      question: {
        choices: ["5", "17", "23", "42"],
        correct_choice_index: 0,
        question_text: "How many fingers are most commonly on a human hand?",
        user_id: "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
      }
    }
  ]
};

// Answers.js
function AnswerList(props) {
  return (
    <div className="all-answers">
      {props.answers.map((ans, index) => (
        <AnswerButton
          content={ans}
          answerClicked={() => props.answerClicked(index)}
          key={`st${ans}wers`}
        />
      ))}
    </div>
  );
}

// Answer.js
function AnswerButton(props) {
  return <button onClick={props.answerClicked}>{props.content}</button>;
}

// Question.js
function Question(props) {
  return <h1 className={"question"}> {props.question_text}</h1>;
}

function NextQuestion(props) {
  return <button onClick={props.clickHandler}>Next Question</button>;
}

function App() {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  console.log(selectedAnswerIndex);

  const nextQuestionContent =
    selectedAnswerIndex !== null ? (
      <NextQuestion
        clickHandler={() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setSelectedAnswerIndex(null);
        }}
      />
    ) : (
      "Select an answer"
    );

  let answerResult;
  if (selectedAnswerIndex === null) {
    answerResult = "";
  } else if (
    selectedAnswerIndex ===
    example.questions[currentQuestionIndex].question.correct_choice_index
  ) {
    answerResult = <h2 className="rightAnswer">Correct!</h2>;
  } else {
    answerResult = <h2 className="wrongAnswer">Not Quite!</h2>;
  }

  return example.questions[currentQuestionIndex] ? (
    <div className="app">
      <Question
        question_text={
          example.questions[currentQuestionIndex].question.question_text
        }
      />
      <AnswerList
        answers={example.questions[currentQuestionIndex].question.choices}
        answerClicked={setSelectedAnswerIndex}
      />
      {answerResult}
      <br />
      {nextQuestionContent}
    </div>
  ) : (
    <h1> No More Questions</h1>
  );
}

export default App;
