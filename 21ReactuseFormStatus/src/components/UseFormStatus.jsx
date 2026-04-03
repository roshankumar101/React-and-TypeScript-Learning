import React from 'react'
import { useFormStatus } from 'react-dom'

const UseFormStatus = () => {
  const handleSubmit = async () => {
    // e.preventDefault();
    await new Promise(res => setTimeout(res, 3000));
    console.log("Submited");
  }


  function CustomerForm() {

    // to use this we must have a form
    const { pending } = useFormStatus()
    console.log(pending);

    return (
      <div>
        <input type="text" placeholder='Enter User Name' />
        <br /><br />
        <input type="password" placeholder='Enter User Password' />
        <br /><br />
        <button type='submit' disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>
      </div>
    )
  }

  return (
    <div>
      <h2>useFormStatus</h2>
      <form action={handleSubmit} style={{ margin: "20px" }}>
        <CustomerForm />
      </form>
    </div>
  )
}

export default UseFormStatus