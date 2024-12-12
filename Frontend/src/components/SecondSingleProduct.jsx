
import React, { useEffect, useState } from 'react'
import { FiHeart } from 'react-icons/fi';
import { GoTrash } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { useWishlist } from './ContextApi';
import toast from 'react-hot-toast';
const SecondSingleProduct = ({ singleProduct, wish }) => {

    const [wishList, dispatch] = useWishlist();
    const [like, setLike] = useState(false);
    const handleRemoveWishItem = (singleProduct) => {
        dispatch({
            type: 'delete',
            payload: singleProduct._id
        });
        setLike(false);
        toast.success("Removed item from the wishList");
    }
    const handleLike = () => {
        dispatch({
            type: 'add',
            payload: singleProduct
        });
        toast.success("Added item to the wishList");
    }
    useEffect(() => {
        if (wishList.length > 0 && singleProduct) {
            const checking = wishList.some(singleItem => singleItem._id == singleProduct._id);
            setLike(checking);
        }
    }, [wishList]);
    return (

        <div className='border border-b-slate-300 border-transparent p-2'>
            <div className='flex md:flex-row md:justify-evenly md:items-center'>
                <div className='relative w-6/12 md:min-w-3/12 xsm:w-5/12 lg:min-w-2/12 h-40 md:min-h-64 lg:min-h-80 xl:min-h-96'>
                    <Link to={`/product/${singleProduct._id}`}>
                        <img className='w-full h-full object-cover' src={singleProduct.images[0]} alt="Image" />
                    </Link>
                    <div className='px-[5px] py-[10px] text-xs rounded-full bg-[#ff4e00] text-white absolute top-3 right-2'>
                        {Math.round((((singleProduct.originalPrice - singleProduct.salePrice) / singleProduct.originalPrice) * 100))}%
                    </div>
                    {
                        wish ? <Link onClick={() => handleRemoveWishItem(singleProduct)} className='text-lg absolute top-3 left-2 bg-white rounded-full px-1 py-1 w-fit h-fit '>
                            <GoTrash className="text-slate-500 w-4 h-4" />
                        </Link> :
                            <Link onClick={() => like ? handleRemoveWishItem(singleProduct) : handleLike()} className='text-lg absolute top-3 left-2 rounded-full px-1 py-1 w-fit h-fit '>
                                <FiHeart className={`text-xl duration-100 w-4 h-4  ${like ? "text-red-600 scale-105 fill-red-600" : "text-slate-600 fill-transparent "} `} />
                            </Link>
                    }
                </div>
                <div className='w-7/12 md:max-w-full md:flex-row md:justify-between md:items-center flex flex-col text-start px-2'>
                    <div className='xl:space-y-2'>
                        <h2 className='text-slate-500 text-base'>
                            Meewan Collection
                        </h2>
                        <h3 className='text-black text-sm font-semibold line-clamp-1 xl:text-xl'>
                            {
                                singleProduct.title
                            }
                        </h3>
                        <h3 className='line-through xl:text-lg text-slate-500'>
                            Rs.{
                                singleProduct.originalPrice
                            }
                        </h3>
                        <h3 className='text-red-600 pl-2 pb-1 xl:text-lg'>
                            Rs.{
                                singleProduct.salePrice
                            }
                        </h3>
                    </div>
                    <div className='flex flex-col'>
                        <button className='md:px-14 mb-4 w-fit px-7 md:py-2 xsm:px-9 py-[4px] text-nowrap border border-sky-400 rounded-full text-sky-400'>
                            Quick view
                        </button>
                        <button className='md:px-14 mb-2 w-fit px-7 md:py-2 xsm:px-9 py-[4px] text-nowrap bg-sky-400 rounded-full text-white'>
                            Quick Shop
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSingleProduct;