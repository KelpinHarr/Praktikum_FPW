import { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios';
import Catalog from './components/Catalog';

function App() {
  const [route, setRoute] = useState('Home');
  const [gameDeals, setGameDeals] = useState([]);
  const [release, setRelease] = useState([]);
  const [metacritic, setMetacritic] = useState([]);
  const [game, setGame] = useState([]);
  const [wishlist, setWishlist] = useState('');
  const [page, setPage] = useState(0);
  const [search, setSearch] =  useState('');
  const [errMsg, setErrMsg] = useState('');
  const [pageSearch, setPageSearch] = useState(0);

  useEffect(() => {
    getGame()
    getGameDeals()
    getRelease()
    getMetacritic()
    searchGame()
  }, [page, pageSearch])

  async function getGame(){
    const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
      params: {
        pageSize: 10,
        pageNumber: page
      }
    })
    setGame(result.data);
  }

  async function searchGame(title){
    const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
      params: {
        pageSize: 10,
        page: pageSearch,
        title: title
      }
    })
    setGame(result.data);
  }

  const handlerSearch = () => {
    searchGame(search)
  }

  async function getGameDeals() {
    const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
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

  function handlerPrev(){
    setPage(page-1)
    if (page < 1){
      let msg = 'No more page'
      setPage(0)
      setErrMsg(msg)
    }
  }
  
  function handlerNext(){
    setPage(page+1);
  }

  function handlerNextSearch(){
    setPageSearch(pageSearch+1)
  }

  return (
    <>
      {
        route === 'Home' ? 
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <p className="text-4xl text-center mt-7 txt"><strong>Welcome, Kapitan</strong></p>
          <Home gameDeals={gameDeals} release={release} metacritic={metacritic} setMetacritic={setMetacritic} setGameDeals={setGameDeals} setRelease={setRelease}/>
        </>
        :
        route === 'Catalog' ?
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <Catalog game={game} setGame={setGame} wishlist={wishlist} page={page} search={search} setSearch={setSearch} setPage={setPage} setWishlist={setWishlist} handlerNext={handlerNext} handlerPrev={handlerPrev} handlerSearch={handlerSearch}/>
          <p className='text-xl text-red-600 text-center mt-5'>{errMsg}</p>
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
