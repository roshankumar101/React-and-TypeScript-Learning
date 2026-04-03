import React, { useTransition } from 'react'

const UseTransition = () => {
  // useTransition  -> same as useFormStatus but form not compulsory

  const [pending, startTransition] = useTransition()
  const handleBtn = () =>{
    startTransition(async () =>{
      await new Promise(res=>setTimeout(res, 2000));
    })
  }

  return (
    <div>
      <h2>useTransition</h2>
      <button onClick={handleBtn} disabled={pending}>{pending?"Submitting...":"Submit"}</button>
      <br />
      {pending && <LoaderCircle color='red' />}
    </div>
  )
}

export default UseTransition