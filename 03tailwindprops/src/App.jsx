import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Cards'
import './App.css'

function App() {
  let myObj = {
    username: "Shubham",
    age: 31
  }
  const [count, setCount] = useState(0)

  return (
    <>
 <Card username="chai aur code" someObj = {myObj}/>
 <Card username="Shubham"/>


    
    </>
  )
}

export default App
