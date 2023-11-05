import { useState, useEffect } from "react"

function Home(props){
    return (
        <>
          <div className="flex flex-wrap mt-5 justify-center">
            {
              props.game.map((item, index) => {
                return(
                  <>
                    <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 border border-black ml-8 ">
                      <div className="flex justify-center">
                        <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                      </div>
                      <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                      <p className="text-lg text-center mt-2"><s>{item.normalPrice}</s></p>
                      <p className="text-lg text-center mt-1">{item.salePrice}</p>
                    </div>
                  </>
                )
              })
            }
          </div>
        </>
    )
}
export default Home