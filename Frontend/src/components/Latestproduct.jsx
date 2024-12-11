
import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';
import axios from 'axios';

const Latestproduct = () => {
    const [products, setProducts] = useState([]);

    // Fetching all the products from the API Backend
    const fetchProducts = async () => {
        try {
            let products = await axios.get('http://localhost:3001/product/all');
            if (products.data.success) {
                setProducts(products.data.products);
            }
        }
        catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, [])
    return (
        products.length > 0 ? <div>
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
        </div> : <div className='h-screen w-screen flex items-center justify-center text-purple-700'>
        <span className="loading loading-bars loading-xl"></span>
        </div>
    )
}

export default Latestproduct;