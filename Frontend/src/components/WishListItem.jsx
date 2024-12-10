
import React, { useEffect, useState } from 'react'
import { useSideBar, useWishlist } from './ContextApi'
import ThirdSingleProduct from './ThirdSingleProduct';
import { RiArrowDownSLine } from 'react-icons/ri';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import SingleProduct from './SingleProduct';
import SecondSingleProduct from './SecondSingleProduct';

const WishListItem = () => {
    const [isOpen, setIsOpen] = useSideBar();
    const [option, setOption] = useState(1);
    const [wishList, dispatch] = useWishlist();

    useEffect(() => {
        setIsOpen(false);
    }, [])
    if (wishList.length === 0) {
        return (
            <>
                <div className='h-screen flex-col font-semibold w-full text-2xl flex items-center justify-center mb-9'>
                    <img src="https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg?t=st=1733737825~exp=1733741425~hmac=cf7ba8065b38ece1f21a52b25112fad4b89fdeee51e543bf8ad303a7279187a0&w=740" alt="NOT FOUND IMAGE" />
                   <div className='pt-8'> No Item In the WishList</div>
                   </div>
            </>
        )
    }
    return (
        <div >
            <div className='bg-[#757575] h-36 font-semibold w-full text-2xl text-white flex items-center justify-center mb-9'>
                Wishlist
            </div>
            <div className='flex justify-center items-center w-full px-2'>
            <div className='flex gap-3 items-center md:justify-center w-1/3'>
          <div className='border flex flex-col justify-center space-y-[3px] py-1 border-slate-500 w-8 h-7' onClick={() => setOption(2)}>
            <div className={`min-h-[5px] ${option === 2 ? "bg-slate-800" : "bg-[#878787]"} w-10/12 mx-auto pl-1 pr-1`}></div>
            <div className={`min-h-[5px] ${option === 2 ? "bg-slate-800" : "bg-[#878787]"} w-10/12 mx-auto pl-1 pr-1`}></div>
            <div className={`min-h-[5px] ${option === 2 ? "bg-slate-800" : "bg-[#878787]"} w-10/12 mx-auto pl-1 pr-1`}></div>
          </div>
          <div className='border border-slate-500 md:hidden w-8 h-7 p-[2px]' onClick={() => setOption(3)}>
            <div className={`w-full h-full ${option === 3 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-8 h-7 flex gap-1 p-[2px]' onClick={() => setOption(1)}>
            <div className={`w-1/2 h-full ${option === 1 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`w-1/2 h-full ${option === 1 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-8 h-7 hidden md:flex gap-1 p-[2px]' onClick={() => setOption(4)}>
            <div className={`w-1/2 h-full ${option === 4 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`w-1/2 h-full ${option === 4 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`w-1/2 h-full ${option === 4 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400  w-fit h-7 hidden md:flex gap-1 p-[2px]' onClick={() => setOption(5)}>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 5 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-fit xl:flex xl:gap-1 h-7 hidden p-[2px]' onClick={() => setOption(6)}>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 6 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
          <div className='border border-slate-400 w-fit xl:flex xl:gap-1 h-7 hidden p-[2px]' onClick={() => setOption(7)}>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
            <div className={`min-w-[6px] h-full ${option === 7 ? "bg-slate-800" : "bg-[#878787]"}`}></div>
          </div>
        </div>
            </div>
            {
                option === 1 ? <div className='grid grid-cols-2 px-2 my-20 xsm:gap-1 md:gap-4 lg:mx-5 lg:gap-7 xl:px-20'>
                    {
                        wishList.length > 0 ?
                        wishList.map((wish) => {
                                return <div key={wish.id} className='flex items-center justify-center'> <SingleProduct type={1} wish={true} className="col-span-1" singleProduct={wish} />
                                </div>
                            })
                            : ""
                    }
                </div> : option === 2 ? <div className='border border-slate-300 border-b-transparent mx-4 my-20 lg:mx-5 xl:mx-20'>
                    {
                        wishList.length > 0 ? wishList.map((wish) => <SecondSingleProduct wish={true} key={wish.id} singleProduct={wish} />) : ""
                    }
                </div> : option === 3 ? <div className='grid grid-cols-1 px-3 my-20 mr-4 lg:mx-5 xl:px-20'>
                    {
                        wishList.length > 0 ? wishList.map((wish) => <ThirdSingleProduct wish={true} key={wish.id} singleProduct={wish} />) : ""
                    }
                </div> : option === 4 ? <div className='grid grid-cols-3 px-3 my-20 gap-3 lg:mx-5 lg:gap-5 xl:px-20'>
                    {
                        wishList.length > 0 ? wishList.map((wish) => <SingleProduct type={2} wish={true} key={wish.id} singleProduct={wish} />) : ""

                    }
                </div> : option === 5 ? <div className='grid grid-cols-4 px-3 my-20 gap-4 lg:mx-4 xl:px-20'>
                    {
                        wishList.length > 0 ? wishList.map((wish) => <SingleProduct type={3} wish={true} key={wish.id} singleProduct={wish} />) : ""
                    }
                </div> : option === 6 ? <div className='grid grid-cols-5 px-3 my-20 gap-4 lg:mx-4 xl:px-20'>
                    {
                        wishList.length > 0 ? wishList.map((wish) => <SingleProduct type={4} wish={true} key={wish.id} singleProduct={wish} />) : ""
                    }
                </div> : option === 7 ? <div className='grid grid-cols-6 px-3 my-20 gap-4 lg:mx-4 xl:px-20'>
                    {
                        wishList.length > 0 ? wishList.map((wish) => <SingleProduct type={5} wish={true} key={wish.id} singleProduct={wish} />) : ""
                    }
                </div> : ""
            }
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

export default WishListItem;



