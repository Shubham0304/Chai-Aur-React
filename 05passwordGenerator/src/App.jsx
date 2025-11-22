import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook:

  const passwordRef = useRef(null);

  function copyPasswordToClipboard() {
    passwordRef.current?.select();
    password.current?.selectSelectionRange(0,length)
    window.navigator.clipboard.writeText(password);

  }

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "!@#$%^&*()_+-[]"
    }

    for (let i = 1; i<=length; i++) {
      let char = Math.floor(Math.random()* str.length +1);
       pass += str.charAt(char);
    }
    setPassword(pass)

  }, [length, numAllowed, charAllowed, setPassword]);

  //const passwordGenerator = function() {


  useEffect(()=> {
    passwordGenerator();
  },[length, numAllowed, charAllowed, passwordGenerator] )


    return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
      <div className='flex shadow rounded-lg'>
      <input type="text"
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly ref={passwordRef} />
      <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      onClick={copyPasswordToClipboard}>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={8}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="">Length: {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input type="checkbox" onChange={()=> {
          setNumAllowed((prev) => {
            return !prev
          })
        }} defaultChecked={numAllowed} name="numberInput" id="numberInput" />

        <label htmlFor="numberInput">Characters</label>
      </div>

      <div className='flex items-center gap-x-1'>
        <input type="checkbox" onChange={()=> {
          setCharAllowed((prev) => {
            return !prev
          })
        }} defaultChecked={charAllowed} name="characterInput" id="characterInput" />

        <label htmlFor="characterInput">Characters</label>
      </div>

    </div>

    </div>
    </>
  )

  }





export default App
