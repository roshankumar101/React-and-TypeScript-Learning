import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        <h3>Theme is {props.theme}</h3>
        <button
        onClick={()=>{
            props.setTheme('Light')
        }}
        >Change Theme</button>
    </div>
  )
}

export default Navbar