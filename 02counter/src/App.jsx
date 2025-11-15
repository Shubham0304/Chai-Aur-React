import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)


  const addValue = () => {
    if (counter<=19) {
    counter = counter + 1;
    }
    else {
      counter = 20;
    }
    setCounter(counter);
  }

    const removeValue = () => {
    if (counter>0) {
    counter = counter - 1;
    }
    else {
      counter = 0;
    }
    setCounter(counter);
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
      <p>Counter Value : {counter}</p>


    
    </>
  )
}

export default App
