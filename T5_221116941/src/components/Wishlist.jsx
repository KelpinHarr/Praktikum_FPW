import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RemoveWishlist } from "../app/wishSlice";
import fullHeart from '../assets/full-heart.svg'
import trash from '../assets/trash.svg'

function Wishlist(){
    const dispatch = useDispatch();
    const arrWish = useSelector((state) => state.wishlist.arrWishlist);

    return(
        <>
            <div className="flex flex-wrap mt-7 justify-center ml-3 mr-3">
            {
                arrWish.map((item, index) => {
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
                                    <div className="flex justify-center mb-5">
                                        <button className="text-lg text-center mt-2" ><img src={fullHeart} alt="" /></button>
                                        <button className="text-lg text-center mt-2 ml-8" onClick={() => dispatch(RemoveWishlist(item.dealID))}><img src={trash} alt="" /></button>
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
                                        <button className="text-lg text-center mt-2"><img src={fullHeart} alt="" /></button>
                                        <button className="text-lg text-center mt-2 ml-8" onClick={() => dispatch(RemoveWishlist(item.dealID))}><img src={trash} alt="" /></button>
                                    </div>
                                </div>
                            </>
                        }
                    </>
                    )
                })
            }
            </div>
        </>
    )   
}
export default Wishlist;