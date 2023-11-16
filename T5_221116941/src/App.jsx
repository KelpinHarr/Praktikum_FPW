import { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios';
import Catalog from './components/Catalog';
import Wishlist from './components/Wishlist';
import Cart from './components/Cart';

function App() {
  const [route, setRoute] = useState('Home');
  // const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] =  useState('');
  const [errMsg, setErrMsg] = useState('');
  const [pageSearch, setPageSearch] = useState(0);

  const handlerSearch = () => {
    searchGame(search)
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
          <Home />
        </>
        :
        route === 'Catalog' ?
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <p className="text-4xl text-center mt-7 txt"><strong>Catalog</strong></p>
          <Catalog search={search} setSearch={setSearch} handlerSearch={handlerSearch}/>
          <p className='text-xl text-red-600 text-center mt-5'>{errMsg}</p>
        </>
        :
        route === 'Wishlist' ?
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <p className="text-4xl text-center mt-7 txt"><strong>Wishlist</strong></p>
          <Wishlist/>
        </>
        :
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <p className="text-4xl text-center mt-7 txt"><strong>Cart</strong></p>
          <Cart />
        </>
      }
    </>
  )
}

export default App
