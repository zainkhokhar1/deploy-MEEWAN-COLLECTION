
import React, { useState } from 'react'
import CartProduct from './CartProduct';
import { useAddCart } from './ContextApi';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const CartPageItem = () => {
    const [cart, dispatchCart] = useAddCart();
    const [agreed, setAgreed] = useState(false);
    let totalPrice = cart.reduce((prev, current) => {
        return prev += current.salePrice * current.qty
    }, 0);
    return (
        <div className='w-full'>
            <div className='hidden lg:flex flex-col lg:flex-row w-full lg:justify-between lg:items-center px-14 font-semibold border pb-4 border-transparent border-b-slate-200'>
                <div className='lg:pl-24'>PRODUCT</div>
                <div className='pl-32'>PRICE</div>
                <div className='pl-2'>QUANTITY</div>
                <div className='pr-12'>TOTAL</div>
            </div>
            <div className='lg:pl-10 lg:pr-8 py-5 border-t-slate-200 border border-l-transparent border-r-transparent mb-5'>
                {
                    cart.map((singleItem) => {
                        return <CartProduct key={singleItem.id} cartPage={true} product={singleItem} />
                    })
                }
            </div>
            <div className='lg:mx-20 w-full md:grid md:grid-cols-2 md:items-center flex flex-col px-3 mb-10'>
                <form className='bg-white flex flex-col items-center col-span-1 mb-5'>
                    <label htmlFor='Help' className="form-control pl-2 py-3 text-lg ">
                        Add Order Note
                    </label>
                    <textarea id='Help' className="textarea textarea-bordered min-h-72 md:h-52 w-full mx-8 bg-slate-50" placeholder="Bio"></textarea>
                    <h3 className='pt-4 pb-2 text-lg'>
                        Coupon:
                    </h3>
                    <p className='text-slate-600 text-sm py-3'>
                        Coupon code will work on checkout page
                    </p>
                    <label className="form-control w-full max-w-xs">
                    </label>
                    <input type="text" placeholder="Coupon Code" className="input w-full bg-slate-50 input-bordered" />
                </form>
                <div className='grid-cols-1'>
                    <div className='flex-end flex flex-col gap-4 items-center'>
                        <div className='flex gap-4'>
                            <div className='md:text-2xl font-semibold'>SUBTOTAL:</div>
                            <div className='md:text-2xl font-semibold text-sky-400'>RS.{totalPrice}.00</div>
                        </div>
                        <p className='md:text-lg text-slate-600'>Shipping calculated at checkout</p>
                        <div className='flex items-center gap-2 cursor-pointer'>
                            <input type="checkbox" id='terms' onClick={() => setAgreed(!agreed)} />
                            <label className='md:text-lg cursor-pointer text-slate-600' htmlFor="terms">I agree with the terms and conditions</label>
                        </div>
                        <button className={`py-3 ${agreed ? "block" : "disabled cursor-not-allowed"} bg-[#56cfe1] text-white w-52 rounded-full font-semibold`}>
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus bg-[#e6e6e6] rounded-none duration-300 mb-7">
                <input type="checkbox" className="peer" />
                <div className="collapse-title font-bold">Get in touch</div>
                <div className="collapse-content">
                    <div className="flex gap-3 opacity-60">
                        <FaFacebookF className="text-xl" />
                        <FaInstagram className="text-xl" />
                        <FaYoutube className="text-xl" />
                    </div>
                </div>
            </div>
            <div className="text-sm px-10 text-center text-slate-500 line-clamp-2 pb-5">
                Copyright © 2024 <span className="text-sky-500">Meewan</span> all rights Reserved.
            </div>
        </div>
    )
}

export default CartPageItem;