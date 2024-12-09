
import React from 'react'
import { useAddCart, useWishlist } from './ContextApi';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [wishList, dispatch] = useWishlist();
    const [cart, dispatchCart] = useAddCart();
    return (
        <div className='sticky bottom-0 h-14 pt-1 xl:hidden flex items-center justify-between w-full shadow-lg bg-white'>
            <Link to='/collections/all' className='text-center flex flex-col items-center w-16 '>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-grid"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span className='text-[12px] font-bold'>
                    Shop
                </span>
            </Link>
            <Link to='/wishlist'>
                <div className='text-center flex flex-col items-center w-16 relative'>
                    <svg className='w-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    <span className='text-[12px] font-bold'>
                        Wishlist
                    </span>
                    <span className='bg-black absolute -top-2 left-9 text-white px-[5px] text-[10px] rounded-full'>
                        {
                            wishList.length
                        }
                    </span>
                </div>
            </Link>
            <Link to='/cart' className='text-center flex flex-col items-center w-16 relative'>

                <svg className='w-5'  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                <span className='text-[12px] font-bold'>
                    Cart
                </span>
                <span className='bg-black absolute -top-2 left-9 text-white px-[5px] text-[10px] rounded-full'>
                    {
                        cart.length
                    }
                </span>
            </Link>
            <div className='text-center flex flex-col items-center w-16'>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span className='text-[12px] font-bold'>
                    Account
                </span>
            </div>
            <div className='text-center flex flex-col items-center w-16'>
                <svg className='w-5' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <span className='text-[12px] font-bold'>
                    Search
                </span>
            </div>
        </div>
    )
}

export default Footer