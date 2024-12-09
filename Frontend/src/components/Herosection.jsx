
import React from 'react'
import { Link } from 'react-router-dom';

const Herosection = () => {
    return (
        <div className='px-4 xl:px-28 lg:px-14 md:px-10'>
            {/* This is the category div */}
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 w-full gap-3 py-6 xsm:gap-3 sm:gap-3'>
                <Link to='/collections/men' className='col-span-1 md:h-80 xl:h-80 md:col-span-2 xl:col-span-2 md:order-1 xl:order-1 h-28 xsm:h-44 lg:h-96 w-36 xsm:w-full object-contain overflow-hidden relative'>
                    <img className='hover:scale-110 duration-1000 ease-in-out' src="https://www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=100%20100w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=200%20200w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=400%20400w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=600%20600w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=700%20700w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=800%20800w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=900%20900w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=1000%201000w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=1200%201200w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=1400%201400w,%20//www.meewancollection.pk/cdn/shop/files/latest-kurta-design-for-men-in-pakistan-charcoal-clothing.jpg?v=1703694482&width=1600%201600w" alt="menKurta" />
                    <Link to={'/collections/men'}>
                        <button className='absolute bottom-5 left-6 xsm:left-12 sm:left-6 px-8 py-2 bg-white md:hidden lg:block xl:block hover:bg-slate-800 duration-500 ease-in-out xl:px-12 hover:text-white'>
                            Men
                        </button>
                    </Link>
                </Link>
                <Link to='/collections/kids' className='col-span-1 xl:col-span-2  md:col-span-2  md:mt-0 xl:mt-0 xl:min-h-80 h-28 md:order-2 xl:order-2 lg:min-h-[21rem] lg:max-h-[21rem] lg:-mt-[22rem] xsm:w-full md:min-h-[19rem] xsm:h-44 md:max-h-[21rem] w-36 overflow-hidden relative'>
                    <img className='hover:scale-110 duration-1000 ease-in-out' src="//www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=100 100w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=200 200w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=400 400w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=600 600w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=700 700w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=800 800w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=900 900w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=1000 1000w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=1200 1200w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=1400 1400w, //www.meewancollection.pk/cdn/shop/files/9-Pepperland-1-1024x1024.jpg?v=1703694051&width=1600 1600w" alt="childrensDress" />
                    <Link to={'/collections/kids'}>
                        <button className='absolute bottom-5 left-6 px-8 py-2 xsm:left-16 xl:px-12 sm:left-6 bg-white hover:text-white hover:bg-slate-900 duration-500 md:hidden lg:block xl:block'>
                            Kids
                        </button>
                    </Link>
                </Link>
                <Link to='/collections/women' className='col-span-2 xl:h-80 md:h-80 md:w-full xl:col-span-2 md:col-span-2 xl:order-1 md:order-1  lg:h-[740px] h-72 relative object-contain overflow-hidden'>
                    <img className='min-h-full object-cover hover:scale-110 duration-1000 ease-in-out' src="https://www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=100%20100w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=200%20200w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=400%20400w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=600%20600w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=700%20700w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=800%20800w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=900%20900w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=1000%201000w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=1200%201200w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=1400%201400w,%20//www.meewancollection.pk/cdn/shop/files/1000278588.jpg?v=1704548612&width=1600%201600w" alt="womenDress" />
                    <Link to={'/collections/women'}>
                        <button className='absolute bottom-5 left-20 px-8 py-2 sm:left-20 xsm:left-32 bg-white md:hidden lg:block xl:block xl:px-12 hover:text-white hover:bg-slate-900 duration-500 ease-in-out'>
                            Women
                        </button>
                    </Link>
                </Link>
                <Link to='/collections/winter' className='col-span-1 h-28 w-36 xl:h-96 lg:col-span-4 xl:col-span-3 md:col-span-2 md:h-80 xl:order-3 xl:w-auto md:w-full md:order-4 xsm:w-full xsm:h-36 object-contain overflow-hidden relative'>
                    <img className='hover:scale-110 duration-1000 ease-in-out' src="https://www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=100%20100w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=200%20200w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=400%20400w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=600%20600w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=700%20700w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=800%20800w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=900%20900w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=1000%201000w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=1200%201200w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=1400%201400w,%20//www.meewancollection.pk/cdn/shop/files/Light_Knitted_Sweater_New_Winter_Collection_Instagram_Post_1.png?v=1703691989&width=1600%201600w" alt="catImage" />
                    <Link to={'/collections/winter'}>
                        <button className='absolute bottom-5 text-[12px] left-6 xsm:left-12 sm:left-6 px-3 py-3 bg-white lg:block md:hidden xl:block xl:px-12 xl:py-4 hover:text-white hover:bg-slate-900 duration-500 ease-in-out'>
                            Winter colection
                        </button>
                    </Link>
                </Link>
                <Link to='/collections/summer' className='col-span-1 h-28 w-36 md:col-span-4 md:h-80 xl:col-span-3 xl:h-96 xl:w-auto md:w-full md:order-4 object-cover xsm:w-full xsm:h-36 overflow-hidden relative'>
                    <img className='hover:scale-110 duration-1000 ease-in-out' src="//www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=100 100w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=200 200w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=400 400w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=600 600w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=700 700w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=800 800w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=900 900w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=1000 1000w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=1200 1200w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=1400 1400w, //www.meewancollection.pk/cdn/shop/files/Vintage_Fashion_Dress_Summer_Collection_Product_-_Pinterest_Pin.png?v=1703693569&width=1600 1600w" alt="dressImage" />
                    <Link to={'/collections/summer'}>
                        <button className='absolute text-xs bottom-5 left-6 xsm:left-12 sm:left-6 w-28 px-4 py-2 font-semibold lg:block bg-white md:hidden xl:block md:text-nowrap md:w-fit md:py-3 xl:px-12 xl:py-4 hover:text-white hover:bg-slate-900 duration-500 ease-in-out'>
                            Summer Collection
                        </button>
                    </Link>
                </Link>
            </div>
        </div>
    )
}

export default Herosection;