import { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios';

function App() {
  const [route, setRoute] = useState('Home');
  const [gameDeals, setGameDeals] = useState([]);
  const [release, setRelease] = useState([]);
  const [metacritic, setMetacritic] = useState([]);

  useEffect(() => {
    getGameDeals()
    getRelease()
    getMetacritic()
  }, [])

  async function getGameDeals() {
    const result = await axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=1`, {
      params: {
        pageSize: 5
      }
    })
    setGameDeals(result.data);
  }

  async function getRelease(){
    const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
      params: {
        sortBy: 'Release',
        pageSize: 5
      }
    })
    setRelease(result.data);
  }

  async function getMetacritic(){
    const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
      params: {
        sortBy: 'Metacritic',
        pageSize: 5
      }
    })
    setMetacritic(result.data);
  }

  return (
    <>
      {
        route === 'Home' ? 
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <p className="text-4xl text-center mt-7 txt"><strong>Welcome, Kapitan</strong></p>
          <Home game={gameDeals} release={release} metacritic={metacritic} setMetacritic={setMetacritic} setGame={setGameDeals} setRelease={setRelease}/>
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
