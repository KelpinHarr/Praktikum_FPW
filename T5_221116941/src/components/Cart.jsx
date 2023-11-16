import { useDispatch, useSelector } from "react-redux";
import trash from '../assets/trash.svg';
import { RemoveCart } from "../app/cartSlice";

function Cart(){
    const dispatch = useDispatch();
    const arrCart = useSelector((state) => state.cart.arrCart);

    function totalHarga(){
        let total = 0;
        arrCart.map((item, index) => {
            total = total + parseFloat(item.salePrice)
        })
        return total;
    }
    return (
        <>
            <div className="flex mt-7 justify-center ml-3">
                <div className='w-1/2'>
                {
                    arrCart.map((item, index) => {
                        return (
                            <>
                                {
                                    item.isOnSale == '1'?
                                    <div className='bg-white rounded-lg shadow-md mt-7 p-4'>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="left flex">
                                                <img src={item.thumb} alt="" className='w-72'/>
                                                <div className="title">
                                                    <p className="text-2xl ml-8"><strong>{item.title}</strong></p>
                                                    <p className="text-xl ml-8 mt-5"><s>${item.normalPrice}</s></p>
                                                    <p className="text-xl ml-8 mt-2">${item.salePrice}</p>
                                                </div>
                                            </div>
                                            <div className="right mr-8">
                                                <button className='text-lg ml-20' onClick={() => dispatch(RemoveCart(item.dealID))}><img src={trash} alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='bg-white rounded-lg shadow-md mt-7 p-4'>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="left flex">
                                                <img src={item.thumb} alt="" className='w-72'/>
                                                <div className="title">
                                                    <p className="text-2xl ml-8"><strong>{item.title}</strong></p>
                                                    <p className="text-xl ml-8 mt-5">${item.normalPrice}</p>
                                                </div>
                                            </div>
                                            <div className="right mr-8">
                                                <button className='text-lg ml-20' onClick={() => dispatch(RemoveCart(item.dealID))}><img src={trash} alt="" /></button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </>
                        )
                    })
                }
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/3 mt-7 p-4 ml-20">
                    <p className="text-2xl text-center"><strong>Total Price</strong></p>
                    {
                        arrCart.map((item, index) => {
                            return (
                                <>
                                    <div className="flex items-center justify-between w-full">
                                        <div className="left flex">
                                            <p className="text-xl mt-5">{item.title}</p>

                                        </div>
                                        <div className="right mr-8">
                                        {
                                            item.isOnSale == '1'?
                                            <p className="text-xl mt-3"><strong>${item.salePrice}</strong></p>
                                            :
                                            <p className="text-xl mt-3"><strong>${item.normalPrice}</strong></p>
                                        }        
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                    <hr className="border border-1 border-black mt-28"/>
                    <div className="flex items-center justify-between w-full">
                        <div className="left flex">
                            <p className="text-xl mt-5"><strong>Total</strong></p>
                        </div>
                        <div className="right mr-8">
                            <p className="text-xl"><strong>$ {totalHarga()}</strong></p>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="border rounded-lg bg-green-500 text-white w-full h-8 mt-6">Order</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;