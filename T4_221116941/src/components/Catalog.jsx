import heart from '../assets/heart.svg'
import fullHeart from '../assets/full-heart.svg'
import { useState } from 'react'

function Catalog(props){
    const handlerWishlist = (id) => {
        props.setWishlist()
    }
    
    return (
        <>
            <div className="flex justify-end mt-3">
                <input type="text" className="border border-1 border-black rounded-lg pt-1 pb-1 pl-3 mr-3" placeholder="Search" value={props.search} onChange={(e => props.setSearch(e.target.value))}/>
                <button className="text-xl border border-1 border-black bg-white rounded-lg mr-7 w-12" onClick={props.handlerSearch}>🔍</button>
            </div>           
            <div className="flex flex-wrap mt-7 justify-center ml-3 mr-3">
            {
                props.game.map((item, index) => {
                    return(
                    <>
                        {
                            item.isOnSale == '1' ?
                            <>
                                <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 ml-8 mt-7">
                                    <div className="flex justify-center">
                                        <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                                    </div>
                                    <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                                    <div className="flex justify-center">
                                        <p className="text-lg mt-2"><s>{item.normalPrice}</s></p>
                                        <p className="text-lg mt-2 ml-5">{item.salePrice}</p>
                                    </div>
                                    {/* {
                                        wishlist === 'favorite' ?
                                        <div className="flex justify-center mb-5">
                                            <button className="text-lg text-center mt-2" ><img src={fullHeart} alt="" /></button>
                                        </div>
                                        : */}
                                        <div className="flex justify-center mb-5">
                                            <button className="text-lg text-center mt-2" ><img src={heart} alt="" /></button>
                                        </div>
                                </div>                                
                            </>
                            :
                            <>
                                <div className="bg-white pt-3 pr-3 pl-3 rounded-lg shadow-md w-72 ml-8 mt-7">
                                    <div className="flex justify-center">
                                        <img src={item.thumb} alt="" className='w-full rounded-lg'/>
                                    </div>
                                    <p className="text-xl text-center mt-4"><strong>{item.title}</strong></p>
                                    <p className="text-lg text-center mt-2">{item.normalPrice}</p>
                                    <div className="flex justify-center mb-5">
                                        <button className="text-lg text-center mt-2"><img src={heart} alt="" /></button>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                    )
                })
            }
            </div>
            <div className="flex justify-center">
                <button className='border rounded bg-white text-lg w-20 mt-10' onClick={props.handlerPrev}>Prev</button>
                <p className='text-xl mt-10 ml-8'><strong>{props.page}</strong></p>
                <button className='border rounded bg-white text-lg w-20 ml-8 mt-10' onClick={props.handlerNext}>Next</button>
            </div>  
        </>
    )
}
export default Catalog