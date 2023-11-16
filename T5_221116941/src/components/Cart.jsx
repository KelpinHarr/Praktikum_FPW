import { useDispatch, useSelector } from "react-redux";
import trash from '../assets/trash.svg';

function Cart(){
    const dispatch = useDispatch();
    const arrCart = useSelector((state) => state.cart.arrCart);

    return (
        <>
            <div className="flex mt-7 justify-center ml-3">
                <div className='w-1/2'>
                {
                    arrCart.map((item, index) => {
                        return (
                            <>
                                <div className='bg-white rounded-lg shadow-md mt-7 p-4'>
                                    <div className="flex">
                                        <div>
                                            <img src={item.thumb} alt="" className='w-72'/>
                                        </div>
                                        <div>
                                            <p className="text-4xl ml-8"><strong>{item.title}</strong></p>
                                            <p className="text-xl ml-8 mt-5">${item.salePrice}</p>
                                        </div>
                                        <div className='grid justify-items-end'>
                                            <button className='text-lg mt-5 ml-20 align-end'><img src={trash} alt="" /></button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                </div>
                <div className="bg-white rounded-lg shadow-md w-72 mt-7 p-4 ml-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad laborum suscipit nobis, qui, autem deserunt dicta quia laboriosam minima odit animi deleniti ducimus porro reprehenderit ab explicabo minus ex ea?
                </div>
            </div>
        </>
    )
}
export default Cart;