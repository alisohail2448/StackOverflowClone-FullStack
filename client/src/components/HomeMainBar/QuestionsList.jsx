import React from 'react'
import HomeQuestions from './HomeQuestions'

const QuestionsList = ({questionsList}) => {
  return (
    <>
        {
            questionsList.map((question) =>{
                // console.log(question);
                return(
                    <HomeQuestions question={question} key={question._id} />
                )
            })
        }
    </>
  )
}

export default QuestionsList