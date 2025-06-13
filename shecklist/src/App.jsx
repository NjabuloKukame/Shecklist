import { useState } from 'react'
import { useDarkMode } from "./components/DarkMode";
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const { darkMode } = useDarkMode();

  return (
    <>
    <div className="main-container">
      <Header/>

    </div>
    </>
  )
}

export default App
