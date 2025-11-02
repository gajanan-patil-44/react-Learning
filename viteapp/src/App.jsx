import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Example from './Example.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>this is h1 tag</h1>
      <Example /> 
    </>
  )
}

export default App
