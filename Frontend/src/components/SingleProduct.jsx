
import React, { useEffect, useState } from 'react'
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { GoTrash } from "react-icons/go";
import { useAddCart, useWishlist } from './ContextApi';
import toast from 'react-hot-toast';

const SingleProduct = ({ singleProduct, wish, type, home, preview }) => {
    const [cart, dispatchCart] = useAddCart();
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
    // Adding item to the cart handler Function
    const addToCart = (product) => {
        let sizes = product.sizes[0];
        let addedProduct = { ...product, qty: 1, sizes };
        let condition = cart.some((singleItem) => {
            return addedProduct._id === singleItem._id
        });
        if (condition) {
            let item = cart.filter((singleEntity) => addedProduct._id === singleEntity._id);
            let newItem = { ...product, qty: addedProduct.qty + item[0].qty };
            let cartItems = cart.filter((oneItem) => oneItem._id !== product._id);
            cartItems.push(newItem);
            dispatchCart({
                type: 'update',
                payload: cartItems,
            });
            toast.success('Item quantity updated in Cart');
        }
        else {
            dispatchCart({
                type: 'add', payload: addedProduct
            });
            toast.success('Item added to Cart');
        }
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);
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
    if (singleProduct === '{}') {
        return <div className='h-screen w-screen flex items-center justify-center text-purple-700'>
            <span className="loading loading-bars loading-xl"></span>
        </div>;
    }
    return (
        singleProduct && singleProduct?.images && <div className={`${preview ? "max-w-32" : "max-w-[140px] min-w-[125px]"} col-span-1 ${preview ? "xsm:max-w-[190px] xmd:max-w-[250px] md:min-w-[335px] xl:pr-5 lg:max-w-[445px] xl:max-w-[430px]" : "xsm:max-w-[190px] lg:h-fit"} xsm:h-fit mb-2 ${home ? "md:min-w-72" : "md:min-w-full"}  h-72 sm:min-h-fit overflow-hidden line-clamp-3 sm:mb-4`}>
            <div className={`relative max-w-full ${preview ? "xmd:min-h-[300px] md:min-h-[350px] lg:min-h-[520px]" : "md:h-36 sm:min-h-[340px]"} overflow-hidden xsm:w-full xsm:h-60 md:min-w-full h-44 ${home ? "md:min-h-72" : "md:min-h-36"}  z-0 ${type === 1 ? "md:min-h-96 lg:min-h-[33rem]" : type === 2 ? "md:h-72 lg:h-96" : type === 3 ? "md:h-52  lg:h-72" : type === 4 ? "md:h-52  lg:h-64" : type === 5 ? "md:h-52  lg:h-56" : ""} `}>
                <Link to={`/product/${singleProduct._id}`}><img className='min-w-full h-full object-cover hover:scale-110 duration-700 ease-in-out' src={singleProduct.images[0]} alt="Image" /></Link>
                <div className='px-[5px] py-[10px] text-xs rounded-full bg-[#ff4e00] xl:px-[16px] xl:py-[16px] text-white absolute top-3 right-2'>
                    {Math.round((((singleProduct.originalPrice - singleProduct.salePrice) / singleProduct.originalPrice) * 100))}%
                </div>
                {
                    wish ? <Link onClick={() => handleRemoveWishItem(singleProduct)} className='text-lg absolute top-3 left-2 bg-white rounded-full px-1 py-1 w-fit h-fit '>
                        <GoTrash className="text-slate-500 w-4 h-4" />
                    </Link> :
                        <Link onClick={() => like ? handleRemoveWishItem(singleProduct) : handleLike()} className='text-lg absolute top-3 left-2 rounded-full px-1 py-1 w-fit h-fit '>
                            <FiHeart className={`text-xl duration-100 w-4 h-4  ${like ? "text-red-600 scale-105 fill-red-600" : "text-slate-300 fill-transparent "} `} />
                        </Link>
                }
                <div className='bg-white absolute right-2 bottom-2 w-8 h-16 rounded-full flex flex-col items-center justify-between py-2 cursor-pointer'>
                    <Link to={`/product/${singleProduct._id}`}><IoEyeOutline className='opacity-60 hover:text-purple-500 hover:scale-125 ease-in-out duration-200 hover:opacity-100 text-lg' /></Link>
                    <FiShoppingCart className='opacity-60 hover:text-purple-500 hover:scale-150 ease-in-out duration-200 hover:-rotate-2 hover:opacity-100' onClick={() => addToCart(singleProduct)} />
                </div>
                <div className='absolute text-sm text-slate-100 left-4 w-20 bottom-5 line-clamp-1 duration-300'>
                    {
                        singleProduct.ageRange
                    }
                </div>
            </div>
            <div className='pt-3 space-y-[2px]'>
                <h1 className={`font-semibold hover:text-sky-500  cursor-pointer ${preview ? "line-clamp-1" : ""}`}>
                    {
                        singleProduct.title
                    }
                </h1>
                <div className={`xsm:flex xsm:flex-row xsm:gap-2 flex flex-col w-full ${preview ? "justify-center" : ""}`}>
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

export default SingleProduct