import { useState } from 'react'


function App() {
  //let counter = 0;
  
  const [counter, setCounter]= useState(0)

  let addValue = ()=>{
    setCounter(counter+1)   
}

  let removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
      
      <p>showing demo that react use to change value in all position where ever variable are injected like : {counter}</p>
      <button onClick={addValue}>
        added count is {counter}</button> 
        
        {"  "}

      <button onClick={removeValue}> decreased count is {counter} </button>
      <h2>final Count is : {counter}</h2>

    </>
  )
}

export default App
