import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './component/Navbar'
import Player from './component/Player'

function App() {
  const [mode, setMode] = useState(0);
  return (
    <>
      {
        mode == 0 ?
        <Navbar mode={mode} setMode={setMode}/>
        :
        <>
          <Navbar mode={mode} setMode={setMode}/>
          <Player />
        </>
      }
    </>
  )
}

export default App
