import React from 'react'

// component re-render even we used React.memo because the props receiving is object and every time object created with diff memory location and compared
const Post = React.memo(({value}) => {
    console.log("Post Re-Render");
  return (
    <div>
        <h2>My Name '{value.name}' is and my Age is '{value.age}'</h2>
    </div>
  )
})

export default Post