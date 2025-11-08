import { StrictMode } from 'react'
import React from "react";
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>Custom App!!</h1>
    </div>
  )
}

// const ReactElement = {
//     type: "a",
//     props: {
//         href: "https://google.com",
//         target: "_blank"
//     },
//     children : "Click me to visit google"
// }

const AnotherElement = (
  <a href="https://google.com" target = "_blank">Visit Google</a>
)

const reactElement = React.createElement(
  "a",
  {href: "https://google.com", target: "_blank"},
  "click me to visit google"
)

function NewApp() {
  const username = "Chai aur Code!!";

  return (
    <>
    <h1>chai aur react : {username}</h1>
    <p>test para</p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <NewApp/>
)
