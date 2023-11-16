import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import heart from '../assets/heart.svg'
import fullHeart from '../assets/full-heart.svg'
import cart from '../assets/cart.svg'
import axios from 'axios';
import { AddWishList } from "../app/wishSlice";
import { AddCart } from "../app/cartSlice";

function Home(){
    const [gameDeals, setGameDeals] = useState([]);
    const [release, setRelease] = useState([]);
    const [metacritic, setMetacritic] = useState([]);
    const [game, setGame] = useState([]);
    const dispatch = useDispatch();
    const arrWish = useSelector((state) => state.wishlist.arrWishlist);
    const arrCart = useSelector((state) => state.cart.arrCart);

    useEffect(() => {
      fetchGame()
    }, [])

    async function fetchGame(){
      const deals = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
        params: {
          pageSize: 5
        }
      })

      const releaseDate = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
        params: {
          sortBy: 'Release',
          pageSize: 5
        }
      })

      const gameMetacritic = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1', {
        params: {
          sortBy: 'Metacritic',
          pageSize: 5
        }
      })

      const result = await axios.get('https://www.cheapshark.com/api/1.0/deals?storeID=1')

      setGameDeals(deals.data);
      setRelease(releaseDate.data);
      setMetacritic(gameMetacritic.data);
      setGame(result.data);
    }

    function toggleFav(dealID){
      const check = arrWish.find((e) => e.dealID == dealID)
      let flag = false;
      if (check){
        flag = true;
      }
      return flag;
    }
    
    function toggleCart(title){
      // const check = arrCart.find((e) => e.dealID == dealID);
      // let flag = false;
      // if (check){
        alert(title + " berhasil ditambahkan ke dalam Cart")
      //   flag = true;
      // }
      // return flag;
    }

    return (
        <>
          {/* Best Deal */}
          <p className="text-2xl ml-48"><strong>Best Deals</strong></p>
          <div className="flex flex-wrap mt-5 justify-center">
            {
              gameDeals.map((item, index) => {
                return(
                  <>
                    <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 ml-8 mt-4">
                      <div className="flex justify-center">
                        <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                      </div>
                      <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                      <div className="flex justify-center">
                        <p className="text-lg text-center mt-2"><s>{item.normalPrice}</s></p>
                        <p className="text-lg text-center mt-2 ml-5">{item.salePrice}</p>
                      </div>
                      <div className="flex justify-center mb-4">
                        <button className="text-lg text-center mt-2" onClick={() => dispatch(AddWishList(item))}><img src={toggleFav(item.dealID) ? fullHeart : heart} alt="" /></button>
                        <button className="text-lg text-center mt-2 ml-3" onClick={() => dispatch(AddCart(item))}><img src={cart} alt="" onClick={() => toggleCart(item.title)}/></button>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>

          {/* Latest Release */}
          <p className="text-2xl ml-48 mt-5"><strong>Latest Release</strong></p>
          <div className="flex flex-wrap mt-5 justify-center">
            {
              release.map((item, index) => {  
                let timestamp = item.releaseDate    
                const date = new Date(timestamp * 1000);    
                const year = date.getFullYear();
                const month = date.toLocaleString('default', { month: 'long'});
                const day = date.getDate();
                const formattedDate = `${month} ${day}, ${year}`   
                 
                return(
                  <>
                    <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 ml-8 mt-4">
                      <div className="flex justify-center">
                        <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                      </div>
                      <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                      <p className="text-lg text-center mt-2">{item.normalPrice}</p>
                      <p className="text-lg text-center mt-2">{formattedDate}</p>
                      <div className="flex justify-center mb-4">
                        <button className="text-lg text-center mt-2" onClick={() => dispatch(AddWishList(item))}><img src={toggleFav(item.dealID) ? fullHeart : heart} alt="" /></button>
                        <button className="text-lg text-center mt-2 ml-3" onClick={() => dispatch(AddCart(item))}><img src={cart} alt="" /></button>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>

          {/* Best Metacritic */}
          <p className="text-2xl ml-48 mt-5"><strong>Best Metacritic</strong></p>
          <div className="flex flex-wrap mt-5 justify-center mb-5">
            {
              metacritic.map((item, index) => {
                return(
                  <>
                    {
                      item.isOnSale == '1' ?
                      <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 ml-8 mt-4">
                        <div className="flex justify-center">
                          <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                        </div>
                        <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                        <div className="flex justify-center">
                          <p className="text-lg text-center mt-2"><s>{item.normalPrice}</s></p>
                          <p className="text-lg text-center mt-2 ml-5">{item.salePrice}</p>
                        </div>
                        <p className="text-lg text-center mt-2">{item.metacriticScore}</p>
                        <div className="flex justify-center mb-4">
                          <button className="text-lg text-center mt-2" onClick={() => handlerFav(index)}><img src={toggleFav(item.dealID) ? fullHeart : heart} alt="" /></button>
                          <button className="text-lg text-center mt-2 ml-3" onClick={() => dispatch(AddCart(item))}><img src={cart} alt="" /></button>
                        </div>
                      </div>
                      :
                      <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 ml-8 mt-4">
                        <div className="flex justify-center">
                          <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                        </div>
                        <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                        <p className="text-lg text-center mt-2">{item.normalPrice}</p>
                        <p className="text-lg text-center mt-2">{item.metacriticScore}</p>
                        <div className="flex justify-center mb-4">
                          <button className="text-lg text-center mt-2" onClick={() => handlerFav(index)}><img src={toggleFav(item.dealID) ? fullHeart : heart} alt="" /></button>
                          <button className="text-lg text-center mt-2 ml-3" onClick={() => dispatch(AddCart(item))}><img src={cart} alt="" /></button>
                        </div>
                      </div>
                    }
                  </>
                )
              })
            }
          </div>
        </>
    )
}
export default Home