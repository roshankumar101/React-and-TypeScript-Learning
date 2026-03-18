import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export let ThemeType = createContext()


const ThemeContext = ({ children }) => {

    const [theme, setTheme] = useState('Light')

  return (
    <>
        <ThemeType.Provider value={[theme, setTheme]}>
            {children}
        </ThemeType.Provider>
    </>
  )
}

export default ThemeContext