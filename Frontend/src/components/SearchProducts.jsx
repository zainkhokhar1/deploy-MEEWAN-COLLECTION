
import React from 'react'
import { Link } from 'react-router-dom';

const SearchProducts = ({ singleProduct }) => {
    return (
        <Link className='cursor-pointer' to={`/product/${singleProduct._id}`}>
            <div className='flex gap mt-3 pl-2'>
                <div className='h-24 w-24 overflow-hidden mr-2'>
                    <img className='object-cover min-w-full min-h-full' src={singleProduct.images[0]} alt="productImage" />
                </div>

                <div className=' flex flex-col justify-start pt-2'>
                    <h2 className='line-clamp-2 text-base'>
                        {
                            singleProduct.title
                        }
                    </h2>
                    <div className='flex items-center'>
                        <h3 className='line-through text-slate-600 text-base'>
                            Rs.{
                                singleProduct.originalPrice
                            }
                        </h3>
                        <h3 className='text-red-600 text-base pl-2'>
                            Rs.{
                                singleProduct.salePrice
                            }
                        </h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchProducts;