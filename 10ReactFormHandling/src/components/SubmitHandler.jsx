import React from 'react'

const SubmitHandler = () => {
  const submitHandler = (e) => {
        e.preventDefault()            // if we not prevent Default behaviour then after clicking submit button the page will refresh
        console.log("Form Submitted");
    }


  return (
    <div>
        <form onSubmit={(e) => {
            submitHandler(e)
        }}>
            <input type="text" placeholder='Enter Your Name' />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SubmitHandler