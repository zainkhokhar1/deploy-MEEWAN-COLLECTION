
import React, { useEffect, useState } from 'react'
import { useAddCart, useCart } from './ContextApi';
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';

const CartSlider = ({ right }) => {
    const [showCart, setShowCart] = useCart();
    const [rightval, setRightVal] = useState("-right-[30rem]");
    const [cart, dispatchCart] = useAddCart();
    showCart ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
    let totalPrice = cart.reduce((prev, current) => {
        return prev += current.salePrice * current.qty
    }, 0);
    useEffect(() => {
        setRightVal(`right-${right}`);
    }, []);
    return (
        <>
            
            {
                cart.length > 0 ? <div className={`fixed duration-300 shadow-xl top-0 z-[999] flex flex-col ${rightval} xl:w-4/12 w-10/12 lg:w-6/12 sm:w-8/12  h-screen bg-white`}>
                    <div className='flex items-center h-24 border border-transparent border-b-slate-200 py-3'>
                        <div className='absolute right-0 top-4 text-2xl cursor-pointer ease-in-out flex pr-3 justify-end text-black' onClick={() => { setRightVal("-right-[38rem]"); setShowCart(false) }}>
                            <RxCross1 className='' />
                        </div>
                        <div className='text-lg text-slate-900  pl-5'>
                            SHOPPING CART
                        </div>
                    </div>
                    <div className=' py-4 h-64 xsm:h-72  lg:h-96 overflow-y-auto'>
                        {
                            cart.map((singleItem) => {
                                return <CartProduct key={singleItem._id} product={singleItem} />
                            })
                        }
                        <div className='h-20 bg-[#f5f5f5] w-full'>
                            <div className='flex w-full h-full items-center justify-center gap-10 mb-4'>
                                <div className='w-fit h-fit px-2 py-2 rounded-full shadow-xl shadow-[
                                #faffff] flex items-center justify-center cursor-pointer'>
                                    <svg className='min-w-8 text-slate-600' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 3 C 14.742188 3 13.847656 3.890625 13.40625 5 L 6 5 L 6 28 L 26 28 L 26 5 L 18.59375 5 C 18.152344 3.890625 17.257813 3 16 3 Z M 16 5 C 16.554688 5 17 5.445313 17 6 L 17 7 L 20 7 L 20 9 L 12 9 L 12 7 L 15 7 L 15 6 C 15 5.445313 15.445313 5 16 5 Z M 8 7 L 10 7 L 10 11 L 22 11 L 22 7 L 24 7 L 24 26 L 8 26 Z"></path></svg>
                                </div>
                                <div className='w-fit h-fit px-2 py-2 rounded-full shadow-xl shadow-[
                                #faffff] flex items-center justify-center cursor-pointer'>
                                    <svg className='min-w-8 text-slate-600' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 1 4 L 1 25 L 4.15625 25 C 4.601563 26.71875 6.148438 28 8 28 C 9.851563 28 11.398438 26.71875 11.84375 25 L 20.15625 25 C 20.601563 26.71875 22.148438 28 24 28 C 25.851563 28 27.398438 26.71875 27.84375 25 L 31 25 L 31 14.59375 L 30.71875 14.28125 L 24.71875 8.28125 L 24.40625 8 L 19 8 L 19 4 Z M 3 6 L 17 6 L 17 23 L 11.84375 23 C 11.398438 21.28125 9.851563 20 8 20 C 6.148438 20 4.601563 21.28125 4.15625 23 L 3 23 Z M 19 10 L 23.5625 10 L 29 15.4375 L 29 23 L 27.84375 23 C 27.398438 21.28125 25.851563 20 24 20 C 22.148438 20 20.601563 21.28125 20.15625 23 L 19 23 Z M 8 22 C 9.117188 22 10 22.882813 10 24 C 10 25.117188 9.117188 26 8 26 C 6.882813 26 6 25.117188 6 24 C 6 22.882813 6.882813 22 8 22 Z M 24 22 C 25.117188 22 26 22.882813 26 24 C 26 25.117188 25.117188 26 24 26 C 22.882813 26 22 25.117188 22 24 C 22 22.882813 22.882813 22 24 22 Z"></path></svg>
                                </div>
                                <div className='w-fit h-fit px-2 py-2 rounded-full shadow-xl shadow-[
                                #faffff] flex items-center justify-center cursor-pointer'>
                                    <svg className='min-w-8 text-slate-600' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M 16 5 L 15.6875 5.28125 L 4.28125 16.8125 L 3.59375 17.5 L 4.28125 18.21875 L 13.78125 27.71875 L 14.5 28.40625 L 15.1875 27.71875 L 26.71875 16.3125 L 27 16 L 27 5 Z M 16.84375 7 L 25 7 L 25 15.15625 L 14.5 25.59375 L 6.40625 17.5 Z M 22 9 C 21.449219 9 21 9.449219 21 10 C 21 10.550781 21.449219 11 22 11 C 22.550781 11 23 10.550781 23 10 C 23 9.449219 22.550781 9 22 9 Z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-52 px-3 shadow-xl bg-white border border-t-slate-200 border-transparent'>
                        <div className='flex justify-between items-center pt-3 text-lg px-3 font-semibold'>
                            <div>Subtotal:</div>
                            <div>
                                Rs.{
                                        totalPrice
                                    }PKR
                            </div>
                        </div>
                        <div className='text-slate-500 text-sm py-2 pl-3'>
                            Shipping calculated at checkout
                        </div>
                        <Link to='/cart' className='text-center block w-10/12 bg-slate-200 hover:bg-slate-300 duration-300 hover:shadow-sm rounded-full py-3 mx-auto mb-2'>
                            VIEW CART
                        </Link>
                        <Link className='text-center block w-10/12 bg-[#23b2c7] font-semibold tracking-wide hover:bg-[#359dad] duration-300 ease-in-out text-white rounded-full py-4 mx-auto'>
                            CHECK OUT
                        </Link>
                    </div>
                </div> : <div className={`fixed duration-300 shadow-xl top-0 z-[999] flex flex-col ${rightval} xl:w-4/12 w-10/12 lg:w-6/12 sm:w-8/12 h-screen bg-white `}>
                    <div className='flex items-center h-14 border border-transparent border-b-slate-200 py-3'>
                        <div className='absolute right-0 top-4 text-2xl cursor-pointer ease-in-out flex pr-3 justify-end text-black' onClick={() => { setRightVal("-right-[38rem]"); setShowCart(false) }}>
                            <RxCross1 className='' />
                        </div>
                        <div className='text-lg text-slate-900 pl-5'>
                            SHOPPING CART
                        </div>
                    </div>
                    <div className='w-full flex flex-col items-center space-y-4'>
                        <svg id="icon-cart-emty" className='text-slate-500 mt-10' widht="70" height="70" xmlns="http://www.w3.org/2000/svg" fill='currentColor' viewBox="0 0 576 512"><path d="M263.4 103.4C269.7 97.18 279.8 97.18 286.1 103.4L320 137.4L353.9 103.4C360.2 97.18 370.3 97.18 376.6 103.4C382.8 109.7 382.8 119.8 376.6 126.1L342.6 160L376.6 193.9C382.8 200.2 382.8 210.3 376.6 216.6C370.3 222.8 360.2 222.8 353.9 216.6L320 182.6L286.1 216.6C279.8 222.8 269.7 222.8 263.4 216.6C257.2 210.3 257.2 200.2 263.4 193.9L297.4 160L263.4 126.1C257.2 119.8 257.2 109.7 263.4 103.4zM80 0C87.47 0 93.95 5.17 95.6 12.45L100 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H158.2L172.8 352H496C504.8 352 512 359.2 512 368C512 376.8 504.8 384 496 384H160C152.5 384 146.1 378.8 144.4 371.5L67.23 32H16C7.164 32 0 24.84 0 16C0 7.164 7.164 0 16 0H80zM107.3 64L150.1 256H487.8L541.8 64H107.3zM128 456C128 425.1 153.1 400 184 400C214.9 400 240 425.1 240 456C240 486.9 214.9 512 184 512C153.1 512 128 486.9 128 456zM184 480C197.3 480 208 469.3 208 456C208 442.7 197.3 432 184 432C170.7 432 160 442.7 160 456C160 469.3 170.7 480 184 480zM512 456C512 486.9 486.9 512 456 512C425.1 512 400 486.9 400 456C400 425.1 425.1 400 456 400C486.9 400 512 425.1 512 456zM456 432C442.7 432 432 442.7 432 456C432 469.3 442.7 480 456 480C469.3 480 480 469.3 480 456C480 442.7 469.3 432 456 432z"></path></svg>
                        <div className='font-semibold text-base text-slate-500'>
                            Your cart is empty.
                        </div>
                        <Link to='/collections/all' className='text-base text-white rounded-full px-3 py-1 bg-[#23b2c7]'>
                            RETURN TO SHOP
                        </Link>
                    </div>
                </div>
            }
            <div className='fixed inset-0 min-h-screen min-w-screen z-[700] bg-black opacity-50' onClick={()=>setShowCart(false)}></div>
            </>
    )
}

export default CartSlider;

