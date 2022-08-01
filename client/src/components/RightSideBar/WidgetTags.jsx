import React from 'react'

const WidgetTags = () => {
    const tags = ['c','c++', 'html', 'css', 'javascript', 'reactjs', 'nextjs', 'nodejs', 'expressjs', 'mongodb', 'firebase', 'java', 'react-native', 'api', 'flutter'];
  return (
    <div className="widget-tags">
        <h4>Watched Tags</h4>
        <div className="widget-tags-div">
       {
        tags.map((tag) =>{
            return(
                <p key={tag}>{tag}</p>
            )
        })
       }
        </div>
    </div>
  )
}

export default WidgetTags