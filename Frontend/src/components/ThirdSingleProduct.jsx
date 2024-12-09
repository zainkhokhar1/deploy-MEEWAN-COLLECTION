
import React, { useEffect, useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { GoTrash } from 'react-icons/go';
import { useWishlist } from './ContextApi';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const ThirdSingleProduct = ({ singleProduct, wish }) => {

  const [wishList, dispatch] = useWishlist();
  const [like, setLike] = useState(false);
  const handleRemoveWishItem = (singleProduct) => {
    dispatch({
      type: 'delete',
      payload: singleProduct
    });
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
      const checking = wishList.some(singleItem => singleItem.id == singleProduct.id);
      setLike(checking);
    }
  }, [wishList]);
  return (
    <div className='w-full overflow-hidden line-clamp-3 pb-3'>
      <div className='relative w-full h-[22rem]'>
        <Link to={`/product/${singleProduct.id}`}>
          <img className='w-full h-full object-cover' src={singleProduct.image} alt="Image" />
        </Link>
        <div className='px-[5px] py-[10px] text-xs rounded-full bg-[#ff4e00] text-white absolute top-3 right-2'>
          {singleProduct.discount}
        </div>
        {
          wish ? <Link onClick={() => handleRemoveWishItem(singleProduct)} className='text-lg absolute top-3 left-2 bg-white rounded-full px-1 py-1 w-fit h-fit '>
            <GoTrash className="text-slate-500 w-4 h-4" />
          </Link> :
            <Link onClick={() => like ? handleRemoveWishItem(singleProduct) : handleLike()} className='text-lg absolute top-3 left-2 rounded-full px-1 py-1 w-fit h-fit '>
              <FiHeart className={`text-xl duration-100 w-4 h-4  ${like ? "text-red-600 scale-105 fill-red-600" : "text-slate-600 fill-transparent "} `} />
            </Link>
        }
        <div className='bg-white absolute right-2 bottom-2 w-8 h-16 rounded-full flex flex-col items-center justify-between py-2 '>
          <IoEyeOutline className='opacity-60 text-lg' />
          <FiShoppingCart className='opacity-60' />
        </div>
        <div className='absolute text-sm text-slate-100 left-4 w-20 bottom-5 line-clamp-1'>
          {
            singleProduct.ageRange
          }
        </div>
      </div>
      <div className='pt-3 space-y-[2px]'>
        <h1 className='font-semibold px-1'>
          {
            singleProduct.title
          }
        </h1>
        <div className='flex gap-3'>
          <h3 className='line-through'>
            Rs.{
              singleProduct.originalPrice
            }
          </h3>
          <h3 className='text-red-600'>
            Rs.{
              singleProduct.salePrice
            }
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ThirdSingleProduct;