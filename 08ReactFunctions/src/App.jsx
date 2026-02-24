import React from 'react'

const App = () => {


  function btnClicked() {
    console.log("Button Clicked");
  }
  function btnClickedWithPara(val) {
    console.log("Button Clicked", val);
  }




  return (
    <div
      onWheel={(elem) => {
        if (elem.deltaY > 0) {
          console.log("Scrolling downwards");
        } else {
          console.log("Scrolling upwards");
        }
      }}
    >
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>


      <button onClick={btnClicked}>click</button>

      <button onClick={function (elem) {
        btnClickedWithPara(elem.pageY);
      }}
      >clickWithPara</button>



    </div>
  )
}

export default App