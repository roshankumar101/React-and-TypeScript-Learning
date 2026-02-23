import React from 'react'

const Card = (props) => {
  return (
    <>
        <div>
            {/** props is an object */}
            <h2>{props.name} age: {props.age}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    </>
  )
}

export default Card