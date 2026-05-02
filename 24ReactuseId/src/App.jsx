import React, { useId } from 'react'

const App = () => {

  return (
    <div>
      <UserFormData />
      <hr />
      <UserFormData />
    </div>
  )
}
export default App




function UserFormData() {

    const user = useId();

    return (
      <form action="">
        <label htmlFor={user + "name"}>Enter Name: </label>
        <input id={user + "name"} type="text" placeholder='Enter Name' />
        <br /><br />

        <label htmlFor={user + "password"}>Enter Password: </label>
        <input id={user + "password"} type="text" placeholder='Enter Password' />
        <br /><br />

        <label htmlFor={user + "skill"}>Enter Skills: </label>
        <input id={user + "skill"} type="text" placeholder='Enter Skills' />
        <br /><br />

        <input id={user + "TandC"} type="checkbox" />
        <label htmlFor={user + "TandC"}>Terms and Conditions</label>
        <br /><br />

        <button>Submit</button>
      </form>
    )
  }