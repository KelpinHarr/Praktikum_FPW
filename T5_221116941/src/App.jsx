import { useState, useEffect } from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import axios from 'axios';
import Catalog from './components/Catalog';
import Wishlist from './components/Wishlist';

function App() {
  const [route, setRoute] = useState('Home');
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] =  useState('');
  const [errMsg, setErrMsg] = useState('');
  const [pageSearch, setPageSearch] = useState(0);

  // async function searchGame(title){
  //   const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
  //     params: {
  //       pageSize: 10,
  //       page: pageSearch,
  //       title: title
  //     }
  //   })
  //   setGame(result.data);
  // }

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
          <Catalog wishlist={wishlist} search={search} setSearch={setSearch} setWishlist={setWishlist} handlerSearch={handlerSearch}/>
          <p className='text-xl text-red-600 text-center mt-5'>{errMsg}</p>
        </>
        :
        <>
          <Navbar route={route} setRoute={setRoute}/>
          <Wishlist wishlist={wishlist} setWishlist={setWishlist}/>
        </>
      }
    </>
  )
}

export default App
