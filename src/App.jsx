import { useState } from 'react'
import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Playwright Testing</h1>
      <div>
        <span className="">Count is {count}</span>
        <br/>
        <Button onClick={() => setCount(count + 1)}>
          Increment
        </Button>
      </div>
    </>
  )
}

export default App
