import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Routing from './Components/Routing'
import { ThemeProvider } from './Components/ThemeContext'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routing />
  )
}

export default App
