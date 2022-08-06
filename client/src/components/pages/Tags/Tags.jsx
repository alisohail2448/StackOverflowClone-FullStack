import React from "react";
import LeftSideBar from "../../LeftSideBar/LeftSideBar";
import TagsList from "./TagsList";
import './Tags.css'

const Tags = () => {
  const tagsList = [
    {
      id: 1,
      tagName: "javascript",
      tagDesc:
        "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note ",
    },
    {
      id: 2,
      tagName: "python",
      tagDesc:
        "Python is a multi-paradigm, dynamically typed, multi-purpose programming language. It is designed to be quick to learn",
    },
    {
      id: 3,
      tagName: "java",
      tagDesc:
        "Java is a high-level object oriented programming language. Use this tag when you're having problems using or understanding the ",
    },
    {
      id: 4,
      tagName: "c#",
      tagDesc:
        "C# (pronounced 'see sharp') is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code  ",
    },
    {
      id: 5,
      tagName: "php",
      tagDesc:
        "PHP is a widely used, open source, general-purpose, multi-paradigm, dynamically typed and interpreted scripting language originally ",
    },
    {
      id: 6,
      tagName: "android",
      tagDesc:
        "For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Note ",
    },
    {
      id: 7,
      tagName: "html",
      tagDesc:
        "HTML (HyperText Markup Language) is the markup language for creating web pages and other information to be displayed in a ",
    },
    {
      id: 8,
      tagName: "jquery",
      tagDesc:
        "jQuery is a JavaScript library, consider also adding the JavaScript tag. jQuery is a popular cross-browser JavaScript library ",
    },
    {
      id: 9,
      tagName: "c++",
      tagDesc:
        "C++ is a general-purpose programming language. It was originally designed as an extension to C and has a similar ",
    },
    {
      id: 10,
      tagName: "css",
      tagDesc:
        "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML ",
    },
    {
      id: 11,
      tagName: "ios",
      tagDesc:
        "iOS is the mobile operating system running on the Apple iPhone, iPod touch, and iPad. Use this tag [ios] for questions related to ",
    },
    {
      id: 12,
      tagName: "mysql",
      tagDesc:
        "MySQL is a free, open-source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). ",
    },
    {
      id: 13,
      tagName: "r",
      tagDesc:
        "R is a free, open-source programming language & software environment for statistical computing, bioinformatics, ",
    },
  ];
  return (
    <div className="home-container-1">
      <LeftSideBar />
      <div className="home-container-2">
        <h1 className="tags-h1" >Tags</h1>
        <p className="tags-p">
          A tag is a keyword or label that categorizes your question with other,
          similar questions.
        </p>
        <p className="tags-p">
          Using the right tags makes it easier for others to find and answer
          your question.{" "}
        </p>
        <div className="tags-list-container">
            {
                tagsList.map((tag) =>{
                    return (
                        <TagsList tag={tag} key={tag.id} />
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Tags;
