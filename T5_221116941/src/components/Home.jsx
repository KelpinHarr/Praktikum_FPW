import { useState, useEffect } from "react"
import heart from '../assets/heart.svg'
import axios from 'axios';

function Home(){
    const [gameDeals, setGameDeals] = useState([]);
    const [release, setRelease] = useState([]);
    const [metacritic, setMetacritic] = useState([]);

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

      setGameDeals(deals.data);
      setRelease(releaseDate.data);
      setMetacritic(gameMetacritic.data);
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
                      <div className="flex justify-center">
                        <button className="text-lg text-center mt-2"><img src={heart} alt="" /></button>
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
                      <div className="flex justify-center">
                        <button className="text-lg text-center mt-2"><img src={heart} alt="" /></button>
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
                        <div className="flex justify-center">
                          <button className="text-lg text-center mt-2"><img src={heart} alt="" /></button>
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
                        <div className="flex justify-center">
                          <button className="text-lg text-center mt-2"><img src={heart} alt="" /></button>
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