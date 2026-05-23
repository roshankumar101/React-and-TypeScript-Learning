import React from 'react'
// React.memo will not let re-render the component 
const Sum = React.memo(({number}) => {

    function calculateSum(){
        let sum = 0;

        for(let i=0; i<=number; i++){
            sum += i;
        }

        return sum;
    }

    const sum = calculateSum();

    console.log("Sum Render");

  return (
    <div>
        <h2>Sum Library</h2>
        <h3>{sum}</h3>
    </div>
  )
}
)

export default Sum