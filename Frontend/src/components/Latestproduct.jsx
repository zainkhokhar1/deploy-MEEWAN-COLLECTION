
import React from 'react'
import SingleProduct from './SingleProduct';
import products from '../dummydata';
const Latestproduct = () => {
    return (
        <div>
            <h1 className='font-bold text-xl text-center pt-6 pb-5 flex items-center justify-center gap-2'>
                <div className='py-[1px] w-7 bg-black'></div>
                Our Latest Product
                <div className='py-[1px] w-7 bg-black'></div>
            </h1>
            {/* This div element will show the products here */}
            <div className='items-center justify-center gap-4 md:gap-10 flex flex-wrap'>
                {
                    products.map((item) => <SingleProduct home={true} key={item.id} singleProduct={item} />)
                }
            </div>
        </div>
    )
}

export default Latestproduct;