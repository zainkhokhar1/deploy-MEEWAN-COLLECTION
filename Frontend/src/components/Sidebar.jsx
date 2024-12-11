
import React, { useEffect } from 'react';
import { RxCross2 } from "react-icons/rx";
import { useSideBar } from './ContextApi';
import { Link } from 'react-router-dom';
const Sidebar = () => {
    const [isOpen, setIsOpen] = useSideBar();

    // useEffect to control the overflow of the component/slider
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }

        return () => document.body.style.overflow = "auto";
    }, [isOpen]);
    
    return (
        <>
            <div className={`absolute z-50 top-0 rounded-l-xl duration-700 bg-white md:w-1/3 w-10/12 h-screen border border-slate-200 ${isOpen === true ? 'left-0' : '-left-[900px] md:-left-[1500px] lg:-left-[2300px] xl:-left-[2700px]'}`}>
                <div className='h-full w-full'>
                    <h1 className='text-lg pl-5 pt-3 h-14 border-b-slate-200 border-b font-bold'>
                        MENU
                    </h1>
                    <div tabIndex={0} className="border-b-slate-200 border-b collapse collapse-plus rounded-none duration-300">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-base">Women</div>
                        <div className="collapse-content">
                            <div className="flex flex-col">
                                <h3 className='text-base text-slate-500 pt-3 pl-3 h-12 border-b-slate-200 border-b border-t border-t-slate-200'>
                                    Ready to Wear
                                </h3>
                                <h3 className='text-base pt-3 h-12 text-slate-500 pl-3 border-b-slate-200 border-b'>
                                    Unstitched
                                </h3>
                                <h3 className='text-base pt-3 h-12 text-slate-500 pl-3 border-b-slate-200 border-b'>
                                    Luxury
                                </h3>
                            </div>
                        </div>
                    </div>
                    <Link to='/collections/men'>
                        <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b'>
                            Men
                        </h3>
                    </Link>
                    <Link to='/collections/kids'>
                        <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b'>
                            Kids
                        </h3>
                    </Link>
                    <Link to='/collections/summer'>
                        <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b'>
                            Summer Collection
                        </h3>
                    </Link>
                    <Link to='/collections/winter'>
                        <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b'>
                            Winter Collection
                        </h3>
                    </Link>
                    <Link to='/wishlist'>
                        <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b flex items-center gap-1 pb-2'>
                            <svg className='w-5' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                            <span>
                                Wishlist
                            </span>
                        </h3>
                    </Link>
                    <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b flex items-center pb-2 gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>Search</span>
                    </h3>
                    <Link to='/login'>
                        <h3 className='text-base pl-5 pt-3 h-12 border-b-slate-200 border-b flex items-center pb-2 gap-1'>
                            <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span>Login / Register</span>
                        </h3>
                    </Link>
                    <div className='text-sm font-medium text-slate-700 pt-5 pl-5'>
                        Need help?
                    </div>
                    <div className='flex items-center ml-5 mt-2 gap-1 pb-4'>
                        <svg className='w-4 text-slate-500 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor"><path d="M 8.65625 3 C 8.132813 3 7.617188 3.1875 7.1875 3.53125 L 7.125 3.5625 L 7.09375 3.59375 L 3.96875 6.8125 L 4 6.84375 C 3.035156 7.734375 2.738281 9.066406 3.15625 10.21875 C 3.160156 10.226563 3.152344 10.242188 3.15625 10.25 C 4.003906 12.675781 6.171875 17.359375 10.40625 21.59375 C 14.65625 25.84375 19.402344 27.925781 21.75 28.84375 L 21.78125 28.84375 C 22.996094 29.25 24.3125 28.960938 25.25 28.15625 L 28.40625 25 C 29.234375 24.171875 29.234375 22.734375 28.40625 21.90625 L 24.34375 17.84375 L 24.3125 17.78125 C 23.484375 16.953125 22.015625 16.953125 21.1875 17.78125 L 19.1875 19.78125 C 18.464844 19.433594 16.742188 18.542969 15.09375 16.96875 C 13.457031 15.40625 12.621094 13.609375 12.3125 12.90625 L 14.3125 10.90625 C 15.152344 10.066406 15.167969 8.667969 14.28125 7.84375 L 14.3125 7.8125 L 14.21875 7.71875 L 10.21875 3.59375 L 10.1875 3.5625 L 10.125 3.53125 C 9.695313 3.1875 9.179688 3 8.65625 3 Z M 8.65625 5 C 8.730469 5 8.804688 5.035156 8.875 5.09375 L 12.875 9.1875 L 12.96875 9.28125 C 12.960938 9.273438 13.027344 9.378906 12.90625 9.5 L 10.40625 12 L 9.9375 12.4375 L 10.15625 13.0625 C 10.15625 13.0625 11.304688 16.136719 13.71875 18.4375 L 13.9375 18.625 C 16.261719 20.746094 19 21.90625 19 21.90625 L 19.625 22.1875 L 22.59375 19.21875 C 22.765625 19.046875 22.734375 19.046875 22.90625 19.21875 L 27 23.3125 C 27.171875 23.484375 27.171875 23.421875 27 23.59375 L 23.9375 26.65625 C 23.476563 27.050781 22.988281 27.132813 22.40625 26.9375 C 20.140625 26.046875 15.738281 24.113281 11.8125 20.1875 C 7.855469 16.230469 5.789063 11.742188 5.03125 9.5625 C 4.878906 9.15625 4.988281 8.554688 5.34375 8.25 L 5.40625 8.1875 L 8.4375 5.09375 C 8.507813 5.035156 8.582031 5 8.65625 5 Z"></path></svg>
                        <span className='text-slate-500 text-base'>0300-9700209</span>
                    </div>
                </div>
                <div onClick={() => {
                    setIsOpen(false); localStorage.setItem('isOpen', false);
                }} className={`px-2 py-2 rounded-sm text-3xl absolute top-0 -right-14 active:bg-slate-200 opacity-70 ${isOpen ? 'opacity-100' : 'opacity-0'} duration-200`}>
                    <RxCross2 />
                </div>
            </div>
            <div className={`fixed top-0 right-0 left-0 ${isOpen ? "opacity-25" : "opacity-0 hidden"} duration-700 min-h-screen min-w-90% z-10 bg-black `} onClick={() => {
                localStorage.setItem('isOpen', false);
                setIsOpen(false);
            }}></div>
        </>
    )
}

export default Sidebar;