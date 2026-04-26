import React, { useActionState } from 'react'

const App = () => {

  const handleSubmit = async (prevData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise(res=> setTimeout(res, 2000));
    // console.log(name, password);

    if(name && password){
      return {message: "Data Submitted Successfully", name, password}
    }else{
      return {error: "Invalid! Please Fill Correct Data"}
    }
  }

  const [data, action, pending] = useActionState(handleSubmit, undefined)

  return (
    <div>
      <form action={action}>
        <input defaultValue={data?.name} type="text" placeholder='Enter name' name="name" />
        <br /><br />
        <input defaultValue={data?.password} type="password" placeholder='Enter password' name="password" />
        <br /><br />
        <button disabled={pending}>Submit</button>
        <br /><br />
        {
          data?.message && <span style={{color: 'green'}}>{data?.message}</span>
        }
        {
          data?.error && <span style={{color: 'red'}}>{data?.error}</span>
        }
      </form>

      <h3>Name: {data?.name}</h3>
      <h3>Name: {data?.password}</h3>
    </div>
  )
}

export default App