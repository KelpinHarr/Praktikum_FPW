import { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios';

function App() {
  const [route, setRoute] = useState('Home');
  const [game, setGame] = useState([]);

  useEffect(() => {
    getGame()
  }, [])

  async function getGame() {
    const result = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1`, {
      params: {
        pageSize: 5
      }
    })

    setGame(result.data);

  }

  return (
    <>
      {
        route === 'Home' ? 
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <p className="text-4xl text-center mt-7 txt"><strong>Welcome, Kapitan</strong></p>
          <Home game={game} setGame={setGame}/>
        </>
        :
        route === 'Catalog' ?
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <h1>Ini halaman catalog</h1>
        </>
        :
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <h1>Ini halaman wishlist</h1>
        </>
      }
    </>
  )
}

export default App
