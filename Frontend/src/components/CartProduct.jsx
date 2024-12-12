
import React, { useState } from 'react'
import { FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { useAddCart } from './ContextApi';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';


const CartProduct = ({ product, cartPage }) => {
    const [qty, setQty] = useState(1);
    const [cart, dispatchCart] = useAddCart();
    let totalPrice = cart.reduce((prev, current) => {
        return prev += current.salePrice * current.qty
    }, 0);
    const updateQuantityPlus = (product) => {
        let newItem = { ...product, qty: product.qty + 1 };
        let cartItems = cart.filter((oneItem) => oneItem._id !== product._id);
        cartItems.unshift(newItem);
        dispatchCart({
            type: 'update',
            payload: cartItems,
        });
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    const updateQuantityMinus = (product) => {
        let newItem = { ...product, qty: product.qty - 1 };
        let cartItems = cart.filter((oneItem) => oneItem._id !== product._id);
        cartItems.unshift(newItem);
        dispatchCart({
            type: 'update',
            payload: cartItems,
        });
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    const handleDeleteCart = (id) => {
        dispatchCart({
            type: 'delete',
            id
        });
        toast.success('Item Removed from the Cart');
        let newItems = cart.filter((item) => {
            return item._id !== id
        });
        localStorage.setItem('cart', JSON.stringify(newItems));
    }
    return (
        <Link>
            <div className={`lg:flex grid grid-cols-8 mb-3 h-fit pl-4 px-2 pb-3 border lg:border-b-transparent border-b-slate-300 border-transparent ${cartPage ? "flex-row pb-6" : ""}`}>
                <div className='lg:min-w-44 lg:max-h-48 col-span-3 max-w-32 max-h-36 md:max-w-64 md:min-h-56 min-w-24 min-h-32 xsm:min-h-40 xmd:min-w-44 xmd:min-h-44'>
                    <img className='max-w-full xsm:min-w-full min-h-full max-h-full object-cover' src={product.images[0]} alt="ItemImage" />
                </div>
                <div className={`w-full pl-3 lg:pl-2 py-2 col-span-4 md:space-y-3 space-y-1 ${cartPage ? "lg:flex col-span-4 items-center justify-between lg:px-14" : "block"}`}>
                    <div className='line-clamp-2 w-full lg:w-24 font-semibold md:text-xl lg:text-lg text-base'>
                        {
                            product.title
                        }
                    </div>
                    <div className={` ${cartPage ? "md:flex md:flex-col md:items-start lg:gap-4" : "block"} space-y-1 lg:space-y-0 flex items-center gap-2`}>
                        <div className='line-through text-slate-500 md:text-xl text-base'>Rs.{product.originalPrice}</div>
                        <div className='text-red-600 md:text-xl text-base font-semibold'>Rs.{product.salePrice}</div>
                    </div>
                    <div className='flex md:w-28 w-24 px-1 cursor-pointer h-fit md:py-1 items-center border rounded-full border-black'>
                        <div className='flex w-1/3 items-center justify-center' onClick={() => {
                            if (product.qty > 1) {
                                setQty(qty - 1)
                                updateQuantityMinus(product);
                            }
                            else {
                                handleDeleteCart(product._id);
                            }
                        }}>
                            {
                                product.qty > 1 ? <FaMinus /> : <FaRegTrashAlt />
                            }
                        </div>
                        <div className='text-lg font-semibold w-1/3 flex items-center justify-center'>
                            {
                                product.qty
                            }
                        </div>
                        <div className='flex w-1/3 items-center justify-center' onClick={() => { setQty(qty + 1); updateQuantityPlus(product) }}>
                            <FaPlus />
                        </div>
                    </div>
                    <div onClick={() => {
                        handleDeleteCart(product._id)
                    }}
                        className={`pl-2 pt-3 cursor-pointer ${cartPage ? "hidden" : "block"} `}><FaRegTrashAlt className='text-lg text-slate-600 hover:text-sky-400 duration-100 ease-in-out' /></div>
                    <div className={`font-semibold hidden lg:block ${cartPage !== undefined ? 'block' : 'hidden lg:hidden'}`}>
                        Rs.{
                            product.salePrice * product.qty
                        }.00
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CartProduct;