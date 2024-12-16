
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import useProducts from '../../Hooks/products/useAllProducts.hook';

const Latestproduct = () => {
    const { products, loading, error, totalProducts } = useProducts();
    const Navigate = useNavigate();

    // Handling navigation if there is an error (login issue, etc.)
    if (error) {
        toast.error(error);
        localStorage.removeItem("token");
        Navigate("/login");
    }

    return (
        !loading ? < div  className='mb-8'>
            <h1 className='font-bold text-xl text-center pt-6 pb-5 flex items-center justify-center gap-2'>
                <div className='py-[1px] w-7 bg-black'></div>
                Our Latest Product
                <div className='py-[1px] w-7 bg-black'></div>
            </h1>
            {/* This div element will show the products here */}
            <div className='items-center justify-center gap-4 md:gap-10 flex flex-wrap'>
                {
                    products.map((item) => <SingleProduct home={true} key={item._id} singleProduct={item} />)
                }
            </div>
        </div > : <div className='h-screen w-screen flex items-center justify-center text-purple-700'>
            <span className="loading loading-bars loading-xl"></span>
        </div>

    )
}

export default Latestproduct;