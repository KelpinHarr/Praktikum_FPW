import { useState, useEffect } from "react"
import heart from '../assets/heart.svg'

function Home(props){
    return (
        <>
          {/* Best Deal */}
          <p className="text-2xl ml-48"><strong>Best Deals</strong></p>
          <div className="flex flex-wrap mt-5 justify-center">
            {
              props.gameDeals.map((item, index) => {
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
              props.release.map((item, index) => {  
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
              props.metacritic.map((item, index) => {
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