import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./HomeMainBar.css";
import QuestionsList from "./QuestionsList";

const HomeMainBar = () => {
  const location = useLocation();

  const user = 1;

  const navigate = useNavigate();

  var questionsList = [
    {
      _id: 1,
      votes: 3,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
      answer:[{
        answerBody: "Answer",
        userAnswered: "ali",
        answeredOn: 'jan 2',
        userId: 2,
      }]
    },
    {
      _id: 2,
      votes: 0,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["javascript", "Ruby", "python js", "mongodb"],
      userPosted: "mano",
      askedOn: "jan 1",
      answer:[{
        answerBody: "Answer",
        userAnswered: "ali",
        answeredOn: 'jan 2',
        userId: 3,
      }]
    },
    {
      _id: 3,
      votes: 1,
      noOfAnswers: 0,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["c++", "vue js", "react js", "strapi"],
      userPosted: "mano",
      askedOn: "jan 1",
      answer:[{
        answerBody: "Answer",
        userAnswered: "ali",
        answeredOn: 'jan 2',
        userId: 1,
      }]
    },
  ];

  const checkAuth = () => {
    if (user == null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="main-bar">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button onClick={checkAuth} className="ask-btn">
          Ask Question
        </button>
      </div>
      <div>
        {questionsList == null ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <p>{questionsList.length} questions</p>
            <QuestionsList questionsList={questionsList} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeMainBar;
