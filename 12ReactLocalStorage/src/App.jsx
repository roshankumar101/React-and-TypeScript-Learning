import React from 'react'

const App = () => {

  // To add in localStorage    'key', 'value'
  localStorage.setItem('userName', "Roshan");
  localStorage.setItem('age', 20)

  // Access from localStorage with key
  console.log(localStorage.getItem('userName'));
  
  // delete from localStorge with key
  localStorage.removeItem('age')

  // remove all from localStorage
  localStorage.clear()
  
  localStorage.setItem('userName', "Roshan");
  localStorage.setItem('age', 20)

  const user = {
    name: 'Roshan',
    age: 20,
    city: 'Jamtara'
  }

  localStorage.setItem('user', JSON.stringify(user))    // JSON.stringify() -> Other to String

  let usera = JSON.parse(localStorage.getItem('user'))  // JSON.parse() -> String to Other
  console.log(usera);

  return (
    <div>App</div>
  )
}

export default App