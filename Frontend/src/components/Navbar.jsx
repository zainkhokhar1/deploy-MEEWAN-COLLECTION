
import React from 'react';
import { GoSearch } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import Sidebar from './Sidebar';
import { useAddCart, useCart, useSearch, useSideBar, useWishlist } from './ContextApi';
import { IoMdHeartEmpty, IoMdLogOut } from "react-icons/io";
import { LiaUser } from "react-icons/lia";
import { Link, useNavigate } from 'react-router-dom';
import FilterSlidebar from './FilterSlidebar.jsx';
import SortSlider from './SortSlider.jsx';
import SearchSlider from './SearchSlider.jsx';
import CartSlider from './CartSlider.jsx';
import toast from 'react-hot-toast';

const Navbar = () => {
    const [isOpen, setIsOpen] = useSideBar();
    const [cart, dispatchCart] = useAddCart();
    const [openSearch, setOpenSearch] = useSearch();
    const [wishList, dispatch] = useWishlist();
    const [showCart, setShowCart] = useCart();
    const Navigate = useNavigate();

    return (
        <div className='text-[12px] relative'>
            {/* Navbar upper part will be displayed in the next given div element */}
            <div className='px-10 pt-4 pb-2 text-slate-500 flex xl:flex-row xl:text-md xl:justify-between flex-col items-center space-y-[1px]'>
                <div className='flex items-center xl:items-baseline xl:w-1/3'>
                    <svg className='mt-1 mr-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M23.407 30.394c-2.431 0-8.341-3.109-13.303-9.783-4.641-6.242-6.898-10.751-6.898-13.785 0-2.389 1.65-3.529 2.536-4.142l0.219-0.153c0.979-0.7 2.502-0.927 3.086-0.927 1.024 0 1.455 0.599 1.716 1.121 0.222 0.442 2.061 4.39 2.247 4.881 0.286 0.755 0.192 1.855-0.692 2.488l-0.155 0.108c-0.439 0.304-1.255 0.869-1.368 1.557-0.055 0.334 0.057 0.684 0.342 1.068 1.423 1.918 5.968 7.55 6.787 8.314 0.642 0.6 1.455 0.685 2.009 0.218 0.573-0.483 0.828-0.768 0.83-0.772l0.059-0.057c0.048-0.041 0.496-0.396 1.228-0.396 0.528 0 1.065 0.182 1.596 0.541 1.378 0.931 4.487 3.011 4.487 3.011l0.050 0.038c0.398 0.341 0.973 1.323 0.302 2.601-0.695 1.327-2.85 4.066-5.079 4.066zM9.046 2.672c-0.505 0-1.746 0.213-2.466 0.728l-0.232 0.162c-0.827 0.572-2.076 1.435-2.076 3.265 0 2.797 2.188 7.098 6.687 13.149 4.914 6.609 10.532 9.353 12.447 9.353 1.629 0 3.497-2.276 4.135-3.494 0.392-0.748 0.071-1.17-0.040-1.284-0.36-0.241-3.164-2.117-4.453-2.988-0.351-0.238-0.688-0.358-0.999-0.358-0.283 0-0.469 0.1-0.532 0.14-0.104 0.111-0.39 0.405-0.899 0.833-0.951 0.801-2.398 0.704-3.424-0.254-0.923-0.862-5.585-6.666-6.916-8.459-0.46-0.62-0.641-1.252-0.538-1.877 0.187-1.133 1.245-1.866 1.813-2.26l0.142-0.099c0.508-0.363 0.4-1.020 0.316-1.242-0.157-0.414-1.973-4.322-2.203-4.781-0.188-0.376-0.336-0.533-0.764-0.533z" fillRule="currentColor"></path>
                    </svg>
                    <span>0300-9700209</span>
                </div>
                <div>
                    <span className='text-red-600'>
                        Upto 80% Discount
                    </span>!
                    <span className='text-black pl-1'>
                        Shop Now
                    </span>
                </div>
                <div className='flex items-start text-center'>
                    <div className='flex items-center justify-center h-4 pr-1'>
                        <svg className='-mt-1 h-fit' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" class="ml__15" width="20" height="32" viewBox="0 0 32 32"><path d="M16.001 1.072c5.291 0 9.596 4.305 9.596 9.597 0 1.683-0.446 3.341-1.29 4.799l-8.307 14.394-8.308-14.395c-0.843-1.456-1.289-3.115-1.289-4.798 0-5.292 4.305-9.597 9.597-9.597zM16.001 14.4c2.058 0 3.731-1.674 3.731-3.731s-1.674-3.731-3.731-3.731c-2.058 0-3.732 1.674-3.732 3.731s1.674 3.731 3.732 3.731zM16.001 0.006c-5.889 0-10.663 4.775-10.663 10.663 0 1.945 0.523 3.762 1.432 5.332l9.23 15.994 9.23-15.994c0.909-1.57 1.432-3.387 1.432-5.332 0-5.888-4.774-10.663-10.662-10.663v0zM16.001 13.334c-1.472 0-2.666-1.193-2.666-2.665 0-1.471 1.194-2.665 2.666-2.665s2.665 1.194 2.665 2.665c0 1.472-1.193 2.665-2.665 2.665v0z" fillRule="currentColor"></path></svg>
                        Location:
                    </div>
                    House 13, Boulevard Rd, Eden Lahore,
                </div>
            </div>
            {/* Here Navbar will be shown */}
            <div className='h-16 xsm:h-fit lg:h-20 xsm:py-3 bg-[#dddddd] text-center flex items-center px-3 justify-between w-full'>
                <div onClick={() => {
                    setIsOpen(true);
                    localStorage.setItem('isOpen', true)
                }} className='w-1/3 xl:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="16" viewBox="0 0 30 16" fillRule="currentColor"><rect width="30" height="1.5"></rect><rect y="7" width="20" height="1.5"></rect><rect y="14" width="30" height="1.5"></rect></svg>
                </div>
                <Link to='/' className='cursor-pointer w-2/3 xl:order-1 sm:w-44 md:w-44 lg:w-60 xl:w-72 pl-2 object-contain flex items-center justify-center'>
                    <img className='object-cover' src="../../public/MEEWANTEXTIMG.avif" alt="MEEWANIMAGE" />
                </Link>
                <div className='hidden xl:w-1/3 order-1 gap-6 xl:flex xl:items-center xl:justify-end xl:text-lg '>
                    <Link className='hover:text-sky-700 duration-300' to='/collections/women'>Women</Link>
                    <Link className='hover:text-sky-700 duration-300' to='/collections/kids'>Kids</Link>
                    <Link className='hover:text-sky-700 duration-300' to='/collections/men'>Men</Link>
                    <Link className='hover:text-sky-700 duration-300' to='/collections/summer'>Summer</Link>
                    <Link className='hover:text-sky-700 duration-300' to='/collections/winter'>Winter</Link>
                </div>
                <div className='min-w-1/3 flex items-center justify-center xl:order-3'>
                    <GoSearch onClick={() => { setOpenSearch(true); localStorage.setItem("Search", true); }} className='text-2xl cursor-pointer ml-6 md:ml-14 lg:ml-28 xl:ml-52 text-slate-800 hover:text-purple-500 hover:rotate-6 duration-200 block' />
                    <Link to='/login'>
                        <LiaUser className={`${localStorage.getItem('token') ? "hidden" : "md:block"} text-2xl ml-3 text-slate-800 hover:text-purple-500 hover:rotate-6 hover:scale-125 duration-200 cursor-pointer`} />
                    </Link>
                    <Link onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('userId'); Navigate('/login'); toast.success('Logged out !') }}>
                        <IoMdLogOut className={`${localStorage.getItem('token') ? "md:block" : "hidden"} text-2xl ml-3 text-slate-800 hover:text-purple-500 hover:rotate-6 hover:scale-125 duration-200 cursor-pointer`} />
                    </Link>
                    <Link to='/wishlist' className='relative w-fit h-fit hidden md:block'>
                        <IoMdHeartEmpty className='text-2xl -mt-1 ml-4 text-slate-800 hover:text-purple-500 hover:scale-110 hover:rotate-12 duration-200' />
                        <span className='bg-black absolute -top-2 left-8 text-white px-[5px] text-[10px] rounded-full'>
                            {
                                wishList.length
                            }
                        </span>
                    </Link>
                    <div className='relative w-fit h-fit cursor-pointer' onClick={() => {
                        showCart ? setShowCart(false) : setShowCart(true);
                    }}>
                        <LiaShoppingBagSolid className='text-2xl -mt-1 ml-4 text-slate-800 hover:text-purple-500 hover:rotate-6 hover:scale-110 duration-200' />
                        <span className='bg-black absolute -top-2 left-8 text-white px-[5px] text-[10px] rounded-full'>
                            {
                                cart.length
                            }
                        </span>
                    </div>
                </div>
            </div>
            <Sidebar />
            <FilterSlidebar />
            <SortSlider />
            <SearchSlider />
            {
                showCart ? <CartSlider className="duration-400" right={0} /> : ""
            }
        </div>
    )
}

export default Navbar;