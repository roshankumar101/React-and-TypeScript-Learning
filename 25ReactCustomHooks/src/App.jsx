// Rules of Hooks
// 1. Prefix should be "use____"
// 2. always keep Hooks in the global scope to that components

// What Not To Do
// 3. do not call Hooks inside the conditions or loops
// 4. do not call Hooks after a conditional "return" statement
// 5. do not call Hooks in event handlers
// 6. do not call Hooks in class Components
// 7. do not call Hooks inside try/catch/finally blocks
// 8. do not call Hooks from "regular JavaScript Functions" like .js/.ts

// What to Do
// 9. Call Hooks from React Function components
// 10. Call Hooks from "custom hooks"  -> we can keep a hook inside custom hook

import React from 'react'

const App = () => {
  return (
    <div>App</div>
  )
}

export default App