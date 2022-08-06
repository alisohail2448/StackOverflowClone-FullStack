import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../../actions/questionAction';
import "./AskQuestion.css"

const AskQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState('');
    const [questionBody, setQuestionBody] = useState('');
    const [questionTags, setquestionTags] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const User = useSelector((state) => (state. currentUserReducer))


    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result._id}, navigate))
    }

    const handleEnter = (e) =>{
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }

  return (
   <div className="ask-question">
    <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form onSubmit={handleSubmit} >
            <div className="ask-form-container">
                <label className="ask-ques-title">
                    <h4>Title</h4>
                    <p>Be specific and imagine you're asking a question to another person</p>
                    <input type="text" placeholder='e.g. Is there an R function for finding the index of an element in a vector?' id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} />
                </label>
                <label className="ask-ques-body">
                    <h4>Body</h4>
                    <p>Include all the information someone would need to answer your question</p>
                    <textarea name="" id="ask-ques-body" cols="30" rows="10" onChange={(e) => {setQuestionBody(e.target.value)}} onKeyPress={handleEnter} ></textarea>
                </label>
                <label className="ask-ques-tags">
                    <h4>Tags</h4>
                    <p>Add up to 5 tags to describe what your question is about</p>
                    <input type="text"  id='ask-ques-tags' placeholder="e.g. (linux css vba)" onChange={(e) => {setquestionTags(e.target.value.split(" "))}} />
                </label>
            </div>
            <input type="submit" value="Review your question" className="review-btn" />
        </form>
    </div>
   </div>
  )
}

export default AskQuestion